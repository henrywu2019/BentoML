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

# List of APIs for accessing remote or local gamma service via Python

import io
import os
import logging
import tarfile

import click
import requests
import shutil

from kappa.exceptions import BentoMLException
from kappa.utils import (
    status_pb_to_error_code_and_message,
    resolve_bento_bundle_uri,
    is_s3_url,
    is_gcs_url,
)
from kappa.utils.lazy_loader import LazyLoader
from kappa.utils.usage_stats import track
from kappa.gamma.client.label_utils import generate_gprc_labels_selector
from kappa.gamma.db.stores.label import _validate_labels
from kappa.gamma.proto.repository_pb2 import (
    AddBentoRequest,
    GetBentoRequest,
    BentoUri,
    UpdateBentoRequest,
    UploadStatus,
    ListBentoRequest,
    DangerouslyDeleteBentoRequest,
    ContainerizeBentoRequest,
)
from kappa.gamma.proto import status_pb2
from kappa.utils.tempdir import TempDirectory
from kappa.saved_bundle import (
    save_to_dir,
    load_bento_service_metadata,
    safe_retrieve,
    load_from_dir,
)
from kappa.gamma.status import Status


logger = logging.getLogger(__name__)
gamma_proto = LazyLoader('gamma_proto', globals(), 'kappa.gamma.proto')


class BentoRepositoryAPIClient:
    def __init__(self, gamma_service):
        # GammaService stub for accessing remote GammaService RPCs
        self.gamma_service = gamma_service

    def push(self, bento, with_labels=True):
        """
        Push a local MyModel to a remote gamma server.

        Args:
            bento: a MyModel identifier in the format of NAME:VERSION

        Returns:
            MyModel saved path

        Example:

        >>> svc = MyMyModel()
        >>> svc.save()
        >>>
        >>> remote_gamma_client = get_gamma_client('http://remote.gamma.service:50050')
        >>> bento = f'{svc.name}:{svc.version}'
        >>> remote_saved_path= remote_gamma_client.repository.push(bento)
        """
        track('py-api-push')

        from kappa.gamma.client import get_gamma_client

        local_yc = get_gamma_client()

        local_bento_pb = local_yc.repository.get(bento)
        if local_bento_pb.uri.s3_presigned_url:
            bento_bundle_path = local_bento_pb.uri.s3_presigned_url
        elif local_bento_pb.uri.gcs_presigned_url:
            bento_bundle_path = local_bento_pb.uri.gcs_presigned_url
        elif local_bento_pb.uri.oci_presigned_url:
            bento_bundle_path = local_bento_pb.uri.oci_presigned_url
        else:
            bento_bundle_path = local_bento_pb.uri.uri
        labels = (
            dict(local_bento_pb.bento_service_metadata.labels)
            if with_labels is True and local_bento_pb.bento_service_metadata.labels
            else None
        )

        return self.upload_from_dir(bento_bundle_path, labels=labels)

    def pull(self, bento):
        """
        Pull a MyModel from a remote gamma service. The MyModel will be saved
        and registered with local gamma service.

        Args:
            bento: a MyModel identifier in the form of NAME:VERSION

        Returns:
            MyModel saved path

        Example:

        >>> client = get_gamma_client('0.0.0.0:50051')
        >>> saved_path = client.repository.pull('MyService:')
        """
        track('py-api-pull')

        bento_pb = self.get(bento)
        with TempDirectory() as tmpdir:
            # Create a non-exist directory for safe_retrieve
            target_bundle_path = os.path.join(tmpdir, 'bundle')
            self.download_to_directory(bento_pb, target_bundle_path)

            from kappa.gamma.client import get_gamma_client

            labels = (
                dict(bento_pb.bento_service_metadata.labels)
                if bento_pb.bento_service_metadata.labels
                else None
            )

            local_yc = get_gamma_client()
            return local_yc.repository.upload_from_dir(
                target_bundle_path, labels=labels
            )

    def upload(self, bento_service, version=None, labels=None):
        """Save and upload given bento_service to gamma_service, which manages all your
        saved MyModels and model serving deployments.

        Args:
            bento_service (kappa.service.MyModel): a Bento Service instance
            version (str): optional,
            labels (dict): optional
        Return:
            URI to where the MyModel is being saved to
        """
        with TempDirectory() as tmpdir:
            save_to_dir(bento_service, tmpdir, version, silent=True)
            return self.upload_from_dir(tmpdir, labels)

    def upload_from_dir(self, saved_bento_path, labels=None):
        bento_service_metadata = load_bento_service_metadata(saved_bento_path)
        if labels:
            _validate_labels(labels)
            bento_service_metadata.labels.update(labels)

        get_bento_response = self.gamma_service.GetBento(
            GetBentoRequest(
                bento_name=bento_service_metadata.name,
                bento_version=bento_service_metadata.version,
            )
        )
        if get_bento_response.status.status_code == status_pb2.Status.OK:
            raise BentoMLException(
                "MyModel {}:{} already registered in repository. Reset "
                "MyModel version with MyModel#set_version or bypass Kappa's"
                " model registry feature with MyModel#save_to_dir".format(
                    bento_service_metadata.name, bento_service_metadata.version
                )
            )
        elif get_bento_response.status.status_code != status_pb2.Status.NOT_FOUND:
            raise BentoMLException(
                'Failed accessing GammaService. {error_code}:'
                '{error_message}'.format(
                    error_code=Status.Name(get_bento_response.status.status_code),
                    error_message=get_bento_response.status.error_message,
                )
            )
        request = AddBentoRequest(
            bento_name=bento_service_metadata.name,
            bento_version=bento_service_metadata.version,
        )
        response = self.gamma_service.AddBento(request)

        if response.status.status_code != status_pb2.Status.OK:
            raise BentoMLException(
                "Error adding MyModel to repository: {}:{}".format(
                    Status.Name(response.status.status_code),
                    response.status.error_message,
                )
            )

        if response.uri.type == BentoUri.LOCAL:
            if os.path.exists(response.uri.uri):
                # due to copytree dst must not already exist
                shutil.rmtree(response.uri.uri)
            shutil.copytree(saved_bento_path, response.uri.uri)

            self._update_bento_upload_progress(bento_service_metadata)

            logger.info(
                "MyModel '%s:%s' saved to: %s",
                bento_service_metadata.name,
                bento_service_metadata.version,
                response.uri.uri,
            )
            # Return URI to saved bento in repository storage
            return response.uri.uri
        elif response.uri.type in (BentoUri.S3, BentoUri.GCS, BentoUri.OCI):
            uri_type = 'S3'
            if response.uri.type == BentoUri.GCS:
                uri_type = 'GCS'
            if response.uri.type == BentoUri.OCI:
                uri_type = "OCI"

            self._update_bento_upload_progress(
                bento_service_metadata, UploadStatus.UPLOADING, 0
            )

            fileobj = io.BytesIO()
            with tarfile.open(mode="w:gz", fileobj=fileobj) as tar:
                tar.add(saved_bento_path, arcname=bento_service_metadata.name)
            fileobj.seek(0, 0)

            if response.uri.type == BentoUri.S3:
                http_response = requests.put(
                    response.uri.s3_presigned_url, data=fileobj
                )
            elif response.uri.type == BentoUri.GCS:
                http_response = requests.put(
                    response.uri.gcs_presigned_url, data=fileobj
                )
            elif response.uri.type == BentoUri.OCI:
                http_response = requests.put(
                    response.uri.oci_presigned_url, data=fileobj
                )

            if http_response.status_code != 200:
                self._update_bento_upload_progress(
                    bento_service_metadata, UploadStatus.ERROR
                )
                raise BentoMLException(
                    f"Error saving MyModel to {uri_type}."
                    f"{http_response.status_code}: {http_response.text}"
                )

            self._update_bento_upload_progress(bento_service_metadata)

            logger.info(
                f"Successfully saved Model '{bento_service_metadata.name}:{bento_service_metadata.version}' to {uri_type}: {response.uri.uri}"
            )

            return response.uri.uri
        else:
            raise BentoMLException(
                f"Error saving Bento to target repository, URI type {response.uri.type}"
                f" at {response.uri.uri} not supported"
            )

    def _update_bento_upload_progress(
        self, bento_service_metadata, status=UploadStatus.DONE, percentage=None
    ):
        upload_status = UploadStatus(status=status, percentage=percentage)
        upload_status.updated_at.GetCurrentTime()
        update_bento_req = UpdateBentoRequest(
            bento_name=bento_service_metadata.name,
            bento_version=bento_service_metadata.version,
            upload_status=upload_status,
            service_metadata=bento_service_metadata,
        )
        self.gamma_service.UpdateBento(update_bento_req)

    def download_to_directory(self, bento_pb, target_dir):
        if bento_pb.uri.s3_presigned_url:
            bento_service_bundle_path = bento_pb.uri.s3_presigned_url
        elif bento_pb.uri.gcs_presigned_url:
            bento_service_bundle_path = bento_pb.uri.gcs_presigned_url
        elif bento_pb.uri.oci_presigned_url:
            bento_service_bundle_path = bento_pb.uri.oci_presigned_url
        else:
            bento_service_bundle_path = bento_pb.uri.uri

        safe_retrieve(bento_service_bundle_path, target_dir)

    def get(self, bento):
        """
        Get a MyModel info

        Args:
            bento: a MyModel identifier in the format of NAME:VERSION

        Returns:
            kappa.gamma.proto.repository_pb2.Bento

        Example:

        >>> gamma_client = get_gamma_client()
        >>> bento_info = gamma_client.repository.get('my_service:version')
        """
        track('py-api-get')
        if ':' not in bento:
            raise BentoMLException(
                'MyModel name or version is missing. Please provide in the '
                'format of name:version'
            )
        name, version = bento.split(':')
        result = self.gamma_service.GetBento(
            GetBentoRequest(bento_name=name, bento_version=version)
        )
        if result.status.status_code != gamma_proto.status_pb2.Status.OK:
            error_code, error_message = status_pb_to_error_code_and_message(
                result.status
            )
            raise BentoMLException(
                f'MyModel {name}:{version} not found - '
                f'{error_code}:{error_message}'
            )
        return result.bento

    def list(
        self,
        bento_name=None,
        offset=None,
        limit=None,
        labels=None,
        order_by=None,
        ascending_order=None,
    ):
        """
        List MyModels that satisfy the specified criteria.

        Args:
            bento_name: optional. MyModel name
            limit: optional. maximum number of returned results
            labels: optional.
            offset: optional. offset of results
            order_by: optional. order by results
            ascending_order:  optional. direction of results order

        Returns:
            [kappa.gamma.proto.repository_pb2.Bento]

        Example:

        >>> gamma_client = get_gamma_client()
        >>> bentos_info_list = gamma_client.repository.list(
        >>>     labels='key=value,key2=value'
        >>> )
        """
        track('py-api-list')
        list_bento_request = ListBentoRequest(
            bento_name=bento_name,
            offset=offset,
            limit=limit,
            order_by=order_by,
            ascending_order=ascending_order,
        )
        if labels is not None:
            generate_gprc_labels_selector(list_bento_request.label_selectors, labels)

        result = self.gamma_service.ListBento(list_bento_request)
        if result.status.status_code != gamma_proto.status_pb2.Status.OK:
            error_code, error_message = status_pb_to_error_code_and_message(
                result.status
            )
            raise BentoMLException(f'{error_code}:{error_message}')
        return result.bentos

    def _delete_bento_bundle(self, bento_tag, require_confirm):
        bento_pb = self.get(bento_tag)
        if require_confirm and not click.confirm(f'Permanently delete {bento_tag}?'):
            return
        result = self.gamma_service.DangerouslyDeleteBento(
            DangerouslyDeleteBentoRequest(
                bento_name=bento_pb.name, bento_version=bento_pb.version
            )
        )

        if result.status.status_code != gamma_proto.status_pb2.Status.OK:
            error_code, error_message = status_pb_to_error_code_and_message(
                result.status
            )
            # Rather than raise Exception, continue to delete the next bentos
            logger.error(
                f'Failed to delete {bento_pb.name}:{bento_pb.version} - '
                f'{error_code}:{error_message}'
            )
        else:
            logger.info(f'Deleted {bento_pb.name}:{bento_pb.version}')

    def delete(
        self,
        bento_tag=None,
        labels=None,
        bento_name=None,
        bento_version=None,
        prune=False,  # pylint: disable=redefined-builtin
        require_confirm=False,
    ):
        """
        Delete bentos that matches the specified criteria

        Args:
            bento_tag: string
            labels: string
            bento_name: string
            bento_version: string
            prune: boolean, Set True to delete all MyModel
            require_confirm: boolean
        Example:
        >>>
        >>> gamma_client = get_gamma_client()
        >>> # Delete all bento services
        >>> gamma_client.repository.delete(prune=True)
        >>> # Delete bento service with name is `IrisClassifier` and version `0.1.0`
        >>> gamma_client.repository.delete(
        >>>     bento_name='IrisClassifier', bento_version='0.1.0'
        >>> )
        >>> # or use bento tag
        >>> gamma_client.repository.delete('IrisClassifier:v0.1.0')
        >>> # Delete all bento services with name 'MyService`
        >>> gamma_client.repository.delete(bento_name='MyService')
        >>> # Delete all bento services with labels match `ci=failed` and `cohort=20`
        >>> gamma_client.repository.delete(labels='ci=failed, cohort=20')
        """
        track('py-api-delete')

        delete_list_limit = 50

        if (
            bento_tag is not None
            and bento_name is not None
            and bento_version is not None
        ):
            raise BentoMLException('Too much arguments')

        if bento_tag is not None:
            logger.info(f'Deleting saved Bento bundle {bento_tag}')
            return self._delete_bento_bundle(bento_tag, require_confirm)
        elif bento_name is not None and bento_tag is not None:
            logger.info(f'Deleting saved Bento bundle {bento_name}:{bento_version}')
            return self._delete_bento_bundle(
                f'{bento_name}:{bento_version}', require_confirm
            )
        else:
            # list of bentos
            if prune is True:
                logger.info('Deleting all Kappa saved bundles.')
                # ignore other fields
                bento_name = None
                labels = None
            else:
                log_message = 'Deleting saved Bento bundles'
                if bento_name is not None:
                    log_message += f' with name: {bento_name},'
                if labels is not None:
                    log_message += f' with labels match to {labels}'
                logger.info(log_message)
            offset = 0
            while offset >= 0:
                bento_list = self.list(
                    bento_name=bento_name,
                    labels=labels,
                    offset=offset,
                    limit=delete_list_limit,
                )
                offset += delete_list_limit
                # Stop the loop, when no more bentos
                if len(bento_list) == 0:
                    break
                else:
                    for bento in bento_list:
                        self._delete_bento_bundle(
                            f'{bento.name}:{bento.version}', require_confirm
                        )

    def containerize(self, bento, tag=None, build_args=None, push=False):
        """
        Create a container image from a MyModel.

        Args:
            bento: string
            tag: string
            build_args: dict
            push: boolean

        Returns:
            Image tag: String
        """
        track('py-api-containerize')
        if ':' not in bento:
            raise BentoMLException(
                'MyModel name or version is missing. Please provide in the '
                'format of name:version'
            )
        name, version = bento.split(':')
        containerize_request = ContainerizeBentoRequest(
            bento_name=name,
            bento_version=version,
            tag=tag,
            build_args=build_args,
            push=push,
        )
        result = self.gamma_service.ContainerizeBento(containerize_request)

        if result.status.status_code != gamma_proto.status_pb2.Status.OK:
            error_code, error_message = status_pb_to_error_code_and_message(
                result.status
            )
            raise BentoMLException(
                f'Failed to containerize {bento} - {error_code}:{error_message}'
            )
        return result.tag

    def load(self, bento):
        """
        Load bento service from bento tag or from a bento bundle path.
        Args:
            bento: string,
        Returns:
            MyModel instance

        Example:
        >>> gamma_client = get_gamma_client()
        >>> # Load MyModel bases on bento tag.
        >>> bento = gamma_client.repository.load('Service_name:version')
        >>> # Load MyModel from bento bundle path
        >>> bento = gamma_client.repository.load('/path/to/bento/bundle')
        >>> # Load MyModel from s3 storage
        >>> bento = gamma_client.repository.load('s3://bucket/path/bundle.tar.gz')
        """
        track('py-api-load')
        if os.path.isdir(bento) or is_s3_url(bento) or is_gcs_url(bento):
            saved_bundle_path = bento
        else:
            bento_pb = self.get(bento)
            saved_bundle_path = resolve_bento_bundle_uri(bento_pb)
        svc = load_from_dir(saved_bundle_path)
        return svc
