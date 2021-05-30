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

from kappa.utils.lazy_loader import LazyLoader

gamma_proto = LazyLoader('gamma_proto', globals(), 'kappa.gamma.proto')


def _proto_status_code_to_http_status_code(proto_status_code, fallback):
    _PROTO_STATUS_CODE_TO_HTTP_STATUS_CODE = {
        gamma_proto.status_pb2.Status.INTERNAL: 500,  # Internal Server Error
        gamma_proto.status_pb2.Status.INVALID_ARGUMENT: 400,  # "Bad Request"
        gamma_proto.status_pb2.Status.NOT_FOUND: 404,  # Not Found
        gamma_proto.status_pb2.Status.DEADLINE_EXCEEDED: 408,  # Request Time out
        gamma_proto.status_pb2.Status.PERMISSION_DENIED: 401,  # Unauthorized
        gamma_proto.status_pb2.Status.UNAUTHENTICATED: 401,  # Unauthorized
        gamma_proto.status_pb2.Status.FAILED_PRECONDITION: 500,  # Internal Server Error
    }
    return _PROTO_STATUS_CODE_TO_HTTP_STATUS_CODE.get(proto_status_code, fallback)


class KappaException(Exception):
    """
    Base class for all Kappa's errors.
    Each custom exception should be derived from this class
    """

    @property
    def proto_status_code(self):
        return gamma_proto.status_pb2.Status.INTERNAL

    @property
    def status_proto(self):
        return gamma_proto.status_pb2.Status(
            status_code=self.proto_status_code, error_message=str(self)
        )

    @property
    def status_code(self):
        """HTTP response status code"""
        return _proto_status_code_to_http_status_code(self.proto_status_code, 500)


class RemoteException(KappaException):
    """
    Raise when known exceptions happened in remote server(a model server normally)
    """

    def __init__(self, *args, payload, **kwargs):
        super(RemoteException, self).__init__(*args, **kwargs)
        self.payload = payload


class Unauthenticated(KappaException):
    """
    Raise when a Kappa operation is not authenticated properly, either against 3rd
    party cloud service such as AWS s3, Docker Hub, or Atalaya hosted Kappa service
    """

    @property
    def proto_status_code(self):
        return gamma_proto.status_pb2.Status.UNAUTHENTICATED


class InvalidArgument(KappaException):
    """
    Raise when Kappa received unexpected/invalid arguments from CLI arguments, HTTP
    Request, or python API function parameters
    """

    @property
    def proto_status_code(self):
        return gamma_proto.status_pb2.Status.INVALID_ARGUMENT


class BadInput(InvalidArgument):
    """Raise when InputAdapter receiving bad input request"""


class NotFound(KappaException):
    """
    Raise when specified resource or name not found
    """

    @property
    def proto_status_code(self):
        return gamma_proto.status_pb2.Status.NOT_FOUND


class FailedPrecondition(KappaException):
    """
    Raise when required precondition check failed
    """

    @property
    def proto_status_code(self):
        return gamma_proto.status_pb2.Status.FAILED_PRECONDITION


class LockUnavailable(KappaException):
    """
    Raise when a bundle/deployment resource is unable to be locked
    """

    @property
    def proto_status_code(self):
        return gamma_proto.status_pb2.Status.FAILED_PRECONDITION


class ArtifactLoadingException(KappaException):
    """Raise when MyModel failed to load model artifacts from saved bundle"""


class KappaConfigException(KappaException):
    """Raise when Kappa is misconfigured or when required configuration is missing"""


class MissingDependencyException(KappaException):
    """
    Raise when Kappa component failed to load required dependency - some Kappa
    components has dependency that is optional to the library itself. For example,
    when using SklearnModelArtifact, the scikit-learn module is required although
    Kappa does not require scikit-learn to be a dependency when installed
    """


class GammaServiceException(KappaException):
    """Raise when GammaService encounters an error"""


class GammaServiceRpcAborted(GammaServiceException):
    """Raise when GammaService RPC operation aborted"""

    @property
    def proto_status_code(self):
        return gamma_proto.status_pb2.Status.ABORTED


class GammaDeploymentException(GammaServiceException):
    """Raise when GammaService encounters an issue creating/managing deployments"""


class GammaRepositoryException(GammaServiceException):
    """Raise when GammaService encounters an issue managing MyModel repository"""


class AWSServiceError(GammaDeploymentException):
    """Raise when GammaService encounters an issue with AWS service"""


class AzureServiceError(GammaDeploymentException):
    """Raise when GammaService encounters an issue with Azure service"""


class CLIException(KappaException):
    """Raise when CLI encounters an issue"""


class GammaLabelException(GammaServiceException):
    """Raise when GammaService encounters an issue managing MyModel label"""
