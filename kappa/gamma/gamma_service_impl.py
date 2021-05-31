# Copyright 2019 Atalaya Tech, Inc.

# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at

# http://www.apache.org/licenses/LICENSE-2.0

# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
import json
import logging
from datetime import datetime
from dependency_injector.wiring import Provide, inject

from kappa.configuration.containers import KappaContainer
from kappa.saved_bundle import safe_retrieve
from kappa.utils.docker_utils import (
    to_valid_docker_image_name,
    to_valid_docker_image_version,
)
from kappa.utils.tempdir import TempDirectory
from kappa.utils.usage_stats import track
from kappa.gamma.deployment.docker_utils import ensure_docker_available_or_raise
from kappa.gamma.locking.lock import LockType, lock
from kappa.gamma.proto.deployment_pb2 import (
    GetDeploymentResponse,
    DescribeDeploymentResponse,
    ListDeploymentsResponse,
    ApplyDeploymentResponse,
    DeleteDeploymentResponse,
    DeploymentSpec,
)
from kappa.gamma.proto.repository_pb2 import (
    AddBentoResponse,
    DangerouslyDeleteBentoResponse,
    GetBentoResponse,
    UpdateBentoResponse,
    ListBentoResponse,
    BentoUri,
    ContainerizeBentoResponse,
)
from kappa.gamma.proto.gamma_service_pb2 import (
    HealthCheckResponse,
    GetGammaServiceVersionResponse,
)
from kappa.gamma.deployment.operator import get_deployment_operator
from kappa.exceptions import (
    KappaException,
    InvalidArgument,
    GammaRepositoryException,
)
from kappa.gamma.repository.base_repository import BaseRepository
from kappa.gamma.db import DB
from kappa.gamma.status import Status
from kappa.gamma.proto import status_pb2
from kappa.utils import ProtoMessageToDict
from kappa.gamma.validator import validate_deployment_pb
from kappa import __version__ as KAPPA_VERSION

logger = logging.getLogger(__name__)


def track_deployment_delete(deployment_operator, created_at, force_delete=False):
    operator_name = DeploymentSpec.DeploymentOperator.Name(deployment_operator)
    up_time = int((datetime.utcnow() - created_at.ToDatetime()).total_seconds())
    track(
        f'deployment-{operator_name}-stop',
        {'up_time': up_time, 'force_delete': force_delete},
    )


def get_gamma_service_impl(base=object):
    # This helps avoid loading GammaServicer grpc file when using local GammaService
    # implementation. This speeds up regular save/load operations when Gamma is not used

    class GammaServiceImpl(base):

        # pylint: disable=unused-argument
        # pylint: disable=broad-except
        @inject
        def __init__(
            self,
            database: DB,
            repository: BaseRepository,
            default_namespace: str = Provide[KappaContainer.config.gamma.namespace],
        ):
            self.default_namespace = default_namespace
            self.repo = repository
            self.db = database

        def HealthCheck(self, request, context=None):
            return HealthCheckResponse(status=Status.OK())

        def GetGammaServiceVersion(self, request, context=None):
            return GetGammaServiceVersionResponse(
                status=Status.OK, version=KAPPA_VERSION
            )

        def ApplyDeployment(self, request, context=None):
            deployment_id = f"{request.deployment.name}_{request.deployment.namespace}"
            spec = request.deployment.spec
            bento_id = f"{spec.bento_name}_{spec.bento_version}"
            with lock(
                self.db, [(deployment_id, LockType.WRITE), (bento_id, LockType.READ)]
            ) as (
                sess,
                _,
            ):
                # to bento level lock
                try:
                    # apply default namespace if not set
                    request.deployment.namespace = (
                        request.deployment.namespace or self.default_namespace
                    )

                    validation_errors = validate_deployment_pb(request.deployment)
                    if validation_errors:
                        raise InvalidArgument(
                            'Failed to validate deployment. {errors}'.format(
                                errors=validation_errors
                            )
                        )

                    previous_deployment = self.db.deployment_store.get(
                        sess, request.deployment.name, request.deployment.namespace
                    )
                    if not previous_deployment:
                        request.deployment.created_at.GetCurrentTime()
                    request.deployment.last_updated_at.GetCurrentTime()

                    self.db.deployment_store.insert_or_update(sess, request.deployment)
                    # find deployment operator based on deployment spec
                    operator = get_deployment_operator(self, request.deployment)

                    # deploying to target platform
                    if previous_deployment:
                        response = operator.update(
                            request.deployment, previous_deployment
                        )
                    else:
                        response = operator.add(request.deployment)

                    if response.status.status_code == status_pb2.Status.OK:
                        # update deployment state
                        if response and response.deployment:
                            self.db.deployment_store.insert_or_update(
                                sess, response.deployment
                            )
                        else:
                            raise KappaException(
                                "DeploymentOperator Internal Error: failed to add or "
                                "update deployment metadata to database"
                            )
                        logger.info(
                            "ApplyDeployment (%s, namespace %s) succeeded",
                            request.deployment.name,
                            request.deployment.namespace,
                        )
                    else:
                        if not previous_deployment:
                            # When failed to create the deployment,
                            # delete it from active deployments records
                            self.db.deployment_store.delete(
                                sess,
                                request.deployment.name,
                                request.deployment.namespace,
                            )
                        logger.debug(
                            "ApplyDeployment (%s, namespace %s) failed: %s",
                            request.deployment.name,
                            request.deployment.namespace,
                            response.status.error_message,
                        )

                    return response

                except KappaException as e:
                    logger.error("RPC ERROR ApplyDeployment: %s", e)
                    return ApplyDeploymentResponse(status=e.status_proto)
                except Exception as e:
                    logger.error("URPC ERROR ApplyDeployment: %s", e)
                    return ApplyDeploymentResponse(status=Status.INTERNAL(str(e)))

        def DeleteDeployment(self, request, context=None):
            deployment_id = f"{request.deployment_name}_{request.namespace}"
            with lock(self.db, [(deployment_id, LockType.WRITE)]) as (
                sess,
                _,
            ):
                try:
                    request.namespace = request.namespace or self.default_namespace
                    deployment_pb = self.db.deployment_store.get(
                        sess, request.deployment_name, request.namespace
                    )

                    if deployment_pb:
                        # find deployment operator based on deployment spec
                        operator = get_deployment_operator(self, deployment_pb)

                        # executing deployment deletion
                        response = operator.delete(deployment_pb)

                        # if delete successful, remove it from active deployment records
                        # table
                        if response.status.status_code == status_pb2.Status.OK:
                            track_deployment_delete(
                                deployment_pb.spec.operator, deployment_pb.created_at
                            )
                            self.db.deployment_store.delete(
                                sess, request.deployment_name, request.namespace
                            )
                            return response

                        # If force delete flag is True, we will remove the record
                        # from gamma database.
                        if request.force_delete:
                            # Track deployment delete before it
                            # vanishes from deployment store
                            track_deployment_delete(
                                deployment_pb.spec.operator,
                                deployment_pb.created_at,
                                True,
                            )
                            self.db.deployment_store.delete(
                                sess, request.deployment_name, request.namespace
                            )
                            return DeleteDeploymentResponse(status=Status.OK())

                        if response.status.status_code == status_pb2.Status.NOT_FOUND:
                            modified_message = (
                                'Cloud resources not found, error: {} - it '
                                'may have been deleted manually. Try delete '
                                'deployment with "--force" option to ignore this '
                                'error and force deleting the deployment record'.format(
                                    response.status.error_message
                                )
                            )
                            response.status.error_message = modified_message

                        return response
                    else:
                        return DeleteDeploymentResponse(
                            status=Status.NOT_FOUND(
                                'Deployment "{}" in namespace "{}" not found'.format(
                                    request.deployment_name, request.namespace
                                )
                            )
                        )

                except KappaException as e:
                    logger.error("RPC ERROR DeleteDeployment: %s", e)
                    return DeleteDeploymentResponse(status=e.status_proto)
                except Exception as e:  # pylint: disable=broad-except
                    logger.error("RPC ERROR DeleteDeployment: %s", e)
                    return DeleteDeploymentResponse(status=Status.INTERNAL(str(e)))

        def GetDeployment(self, request, context=None):
            deployment_id = f"{request.deployment_name}_{request.namespace}"
            with lock(self.db, [(deployment_id, LockType.READ)]) as (
                sess,
                _,
            ):
                try:
                    request.namespace = request.namespace or self.default_namespace
                    deployment_pb = self.db.deployment_store.get(
                        sess, request.deployment_name, request.namespace
                    )
                    if deployment_pb:
                        return GetDeploymentResponse(
                            status=Status.OK(), deployment=deployment_pb
                        )
                    else:
                        return GetDeploymentResponse(
                            status=Status.NOT_FOUND(
                                'Deployment "{}" in namespace "{}" not found'.format(
                                    request.deployment_name, request.namespace
                                )
                            )
                        )
                except KappaException as e:
                    logger.error("RPC ERROR GetDeployment: %s", e)
                    return GetDeploymentResponse(status=e.status_proto)
                except Exception as e:  # pylint: disable=broad-except
                    logger.error("RPC ERROR GetDeployment: %s", e)
                    return GetDeploymentResponse(status=Status.INTERNAL())

        def DescribeDeployment(self, request, context=None):
            deployment_id = f"{request.deployment_name}_{request.namespace}"
            with lock(self.db, [(deployment_id, LockType.READ)]) as (
                sess,
                _,
            ):
                try:
                    request.namespace = request.namespace or self.default_namespace
                    deployment_pb = self.db.deployment_store.get(
                        sess, request.deployment_name, request.namespace
                    )

                    if deployment_pb:
                        operator = get_deployment_operator(self, deployment_pb)

                        response = operator.describe(deployment_pb)

                        if response.status.status_code == status_pb2.Status.OK:
                            with self.db.deployment_store.update_deployment(
                                sess, request.deployment_name, request.namespace
                            ) as deployment:
                                deployment.state = ProtoMessageToDict(response.state)

                        return response
                    else:
                        return DescribeDeploymentResponse(
                            status=Status.NOT_FOUND(
                                'Deployment "{}" in namespace "{}" not found'.format(
                                    request.deployment_name, request.namespace
                                )
                            )
                        )
                except KappaException as e:
                    logger.error("RPC ERROR DescribeDeployment: %s", e)
                    return DeleteDeploymentResponse(status=e.status_proto)
                except Exception as e:  # pylint: disable=broad-except
                    logger.error("RPC ERROR DescribeDeployment: %s", e)
                    return DeleteDeploymentResponse(status=Status.INTERNAL())

        def ListDeployments(self, request, context=None):
            with self.db.create_session() as sess:
                try:
                    namespace = request.namespace or self.default_namespace
                    deployment_pb_list = self.db.deployment_store.list(
                        sess,
                        namespace=namespace,
                        label_selectors=request.label_selectors,
                        offset=request.offset,
                        limit=request.limit,
                        operator=request.operator,
                        order_by=request.order_by,
                        ascending_order=request.ascending_order,
                    )

                    return ListDeploymentsResponse(
                        status=Status.OK(), deployments=deployment_pb_list
                    )
                except KappaException as e:
                    logger.error("RPC ERROR ListDeployments: %s", e)
                    return ListDeploymentsResponse(status=e.status_proto)
                except Exception as e:  # pylint: disable=broad-except
                    logger.error("RPC ERROR ListDeployments: %s", e)
                    return ListDeploymentsResponse(status=Status.INTERNAL())

        def AddBento(self, request, context=None):
            bento_id = f"{request.bento_name}_{request.bento_version}"
            with lock(self.db, [(bento_id, LockType.WRITE)]) as (sess, _):
                try:
                    # TODO: validate request
                    bento_pb = self.db.metadata_store.get(
                        sess, request.bento_name, request.bento_version
                    )
                    if bento_pb:
                        error_message = "MyModel: " "{}:{} already exists".format(
                            request.bento_name, request.bento_version
                        )
                        logger.error(error_message)
                        return AddBentoResponse(status=Status.ABORTED(error_message))
                    new_bento_uri = self.repo.add(
                        request.bento_name, request.bento_version
                    )
                    self.db.metadata_store.add(
                        sess,
                        bento_name=request.bento_name,
                        bento_version=request.bento_version,
                        uri=new_bento_uri.uri,
                        uri_type=new_bento_uri.type,
                    )
                    return AddBentoResponse(status=Status.OK(), uri=new_bento_uri)
                except KappaException as e:
                    logger.error("RPC ERROR AddBento: %s", e)
                    return DeleteDeploymentResponse(status=e.status_proto)
                except Exception as e:  # pylint: disable=broad-except
                    logger.error("OCI ERROR AddBento: %s", e)
                    return DeleteDeploymentResponse(status=Status.INTERNAL())

        def UpdateBento(self, request, context=None):
            bento_id = f"{request.bento_name}_{request.bento_version}"
            with lock(self.db, [(bento_id, LockType.WRITE)]) as (sess, _):
                try:
                    # TODO: validate request
                    if request.upload_status:
                        self.db.metadata_store.update_upload_status(
                            sess,
                            request.bento_name,
                            request.bento_version,
                            request.upload_status,
                        )
                    if request.service_metadata:
                        self.db.metadata_store.update(
                            sess,
                            request.bento_name,
                            request.bento_version,
                            request.service_metadata,
                        )
                    return UpdateBentoResponse(status=Status.OK())
                except KappaException as e:
                    logger.error("RPC ERROR UpdateBento: %s", e)
                    return UpdateBentoResponse(status=e.status_proto)
                except Exception as e:  # pylint: disable=broad-except
                    logger.error("RPC ERROR UpdateBento: %s", e)
                    return UpdateBentoResponse(status=Status.INTERNAL())

        def DangerouslyDeleteBento(self, request, context=None):
            bento_id = f"{request.bento_name}_{request.bento_version}"
            with lock(self.db, [(bento_id, LockType.WRITE)]) as (sess, _):
                try:
                    # TODO: validate request
                    bento_pb = self.db.metadata_store.get(
                        sess, request.bento_name, request.bento_version
                    )
                    if not bento_pb:
                        msg = (
                            f"MyModel "
                            f"{request.bento_name}:{request.bento_version} "
                            f"has already been deleted"
                        )
                        return DangerouslyDeleteBentoResponse(
                            status=Status.ABORTED(msg)
                        )

                    logger.debug(
                        'Deleting MyModel %s:%s',
                        request.bento_name,
                        request.bento_version,
                    )
                    self.db.metadata_store.dangerously_delete(
                        sess, request.bento_name, request.bento_version
                    )
                    self.repo.dangerously_delete(
                        request.bento_name, request.bento_version
                    )
                    return DangerouslyDeleteBentoResponse(status=Status.OK())
                except KappaException as e:
                    logger.error("RPC ERROR DangerouslyDeleteBento: %s", e)
                    return DangerouslyDeleteBentoResponse(status=e.status_proto)
                except Exception as e:  # pylint: disable=broad-except
                    logger.error("RPC ERROR DangerouslyDeleteBento: %s", e)
                    return DangerouslyDeleteBentoResponse(status=Status.INTERNAL())

        def GetBento(self, request, context=None):
            bento_id = f"{request.bento_name}_{request.bento_version}"
            with lock(self.db, [(bento_id, LockType.READ)]) as (sess, _):
                try:
                    # TODO: validate request
                    bento_pb = self.db.metadata_store.get(
                        sess, request.bento_name, request.bento_version
                    )
                    if bento_pb:
                        if request.bento_version.lower() == 'latest':
                            logger.info(
                                'Getting latest version %s:%s',
                                request.bento_name,
                                bento_pb.version,
                            )
                        if bento_pb.uri.type == BentoUri.S3:
                            bento_pb.uri.s3_presigned_url = self.repo.get(
                                bento_pb.name, bento_pb.version
                            )
                        elif bento_pb.uri.type == BentoUri.GCS:
                            bento_pb.uri.gcs_presigned_url = self.repo.get(
                                bento_pb.name, bento_pb.version
                            )
                        elif bento_pb.uri.type == BentoUri.OCI:
                            bento_pb.uri.oci_presigned_url = self.repo.get(
                                bento_pb.name, bento_pb.version
                            )
                        return GetBentoResponse(status=Status.OK(), bento=bento_pb)
                    else:
                        return GetBentoResponse(
                            status=Status.NOT_FOUND(
                                "MyModel `{}:{}` is not found".format(
                                    request.bento_name, request.bento_version
                                )
                            )
                        )
                except KappaException as e:
                    logger.error("RPC ERROR GetBento: %s", e)
                    return GetBentoResponse(status=e.status_proto)
                except Exception as e:  # pylint: disable=broad-except
                    logger.error("RPC ERROR GetBento: %s", e)
                    return GetBentoResponse(status=Status.INTERNAL())

        def ListBento(self, request, context=None):
            with self.db.create_session() as sess:
                try:
                    # TODO: validate request
                    bento_metadata_pb_list = self.db.metadata_store.list(
                        sess,
                        bento_name=request.bento_name,
                        offset=request.offset,
                        limit=request.limit,
                        order_by=request.order_by,
                        label_selectors=request.label_selectors,
                        ascending_order=request.ascending_order,
                    )

                    return ListBentoResponse(
                        status=Status.OK(), bentos=bento_metadata_pb_list
                    )
                except KappaException as e:
                    logger.error("RPC ERROR ListBento: %s", e)
                    return ListBentoResponse(status=e.status_proto)
                except Exception as e:  # pylint: disable=broad-except
                    logger.error("RPC ERROR ListBento: %s", e)
                    return ListBentoResponse(status=Status.INTERNAL())

        def ContainerizeBento(self, request, context=None):
            bento_id = f"{request.bento_name}_{request.bento_version}"
            with lock(self.db, [(bento_id, LockType.READ)]) as (sess, _):
                try:
                    ensure_docker_available_or_raise()
                    tag = request.tag
                    if tag is None or len(tag) == 0:
                        name = to_valid_docker_image_name(request.bento_name)
                        version = to_valid_docker_image_version(request.bento_version)
                        tag = f"{name}:{version}"
                    if ":" not in tag:
                        version = to_valid_docker_image_version(request.bento_version)
                        tag = f"{tag}:{version}"
                    import docker

                    docker_client = docker.from_env()
                    bento_pb = self.db.metadata_store.get(
                        sess, request.bento_name, request.bento_version
                    )
                    if not bento_pb:
                        raise GammaRepositoryException(
                            f'MyModel '
                            f'{request.bento_name}:{request.bento_version} '
                            f'does not exist'
                        )

                    with TempDirectory() as temp_dir:
                        temp_bundle_path = f'{temp_dir}/{bento_pb.name}'
                        bento_service_bundle_path = bento_pb.uri.uri
                        if bento_pb.uri.type == BentoUri.S3:
                            bento_service_bundle_path = self.repo.get(
                                bento_pb.name, bento_pb.version
                            )
                        elif bento_pb.uri.type == BentoUri.GCS:
                            bento_service_bundle_path = self.repo.get(
                                bento_pb.name, bento_pb.version
                            )
                        elif bento_pb.uri.type == BentoUri.OCI:
                            bento_service_bundle_path = self.repo.get(
                                bento_pb.name, bento_pb.version
                            )
                        safe_retrieve(bento_service_bundle_path, temp_bundle_path)
                        try:
                            # Oracle Registry
                            import os
                            login_result = docker_client.login(username="bmc_operator_access/fuhwu",
                                                               registry="iad.ocir.io",
                                                               password=os.environ['OCASTESTTOKEN'])
                            if not (login_result and "Status" in login_result and login_result[
                                'Status'] == "Login Succeeded"):
                                raise GammaRepositoryException("OCIR register failed!")
                            build_log = docker_client.images.build(
                                path=temp_bundle_path,
                                tag=tag,
                                buildargs=dict(request.build_args),
                                quiet=False,
                                squash=False,
                            )
                            logger.info(str(build_log))
                        except (
                            docker.errors.APIError,
                            docker.errors.BuildError,
                        ) as error:
                            logger.error(f'Encounter container building issue: {error}')
                            raise GammaRepositoryException(error)
                        if request.push is True:
                            try:
                                docker_client.images.push(
                                    repository=request.repository, tag=tag
                                )
                            except docker.errors.APIError as error:
                                raise GammaRepositoryException(error)
                        return ContainerizeBentoResponse(status=Status.OK(), tag=tag)
                except KappaException as e:
                    logger.error(f"RPC ERROR ContainerizeBento: {e}")
                    return ContainerizeBentoResponse(status=e.status_proto)
                except Exception as e:  # pylint: disable=broad-except
                    logger.error(f"RPC ERROR ContainerizeBento: {e}")
                    return ContainerizeBentoResponse(status=Status.INTERNAL(e))

            # pylint: enable=unused-argument

    return GammaServiceImpl
