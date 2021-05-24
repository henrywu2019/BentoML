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

import logging
from urllib.parse import urlparse
from dependency_injector.wiring import Provide, inject

from kappa.configuration.containers import BentoMLContainer
from kappa.exceptions import GammaRepositoryException
from kappa.gamma.proto.repository_pb2 import BentoUri
from kappa.gamma.repository.base_repository import BaseRepository
from datetime import datetime, timedelta
import pytz
import oci
from oci.object_storage.models import CreatePreauthenticatedRequestDetails

logger = logging.getLogger(__name__)


class OCIRepository(BaseRepository):
    @inject
    def __init__(
        self,
        base_url,
    ):
        self.uri_type = BentoUri.OCI

        parse_result = urlparse(base_url)
        self.bucket = parse_result.netloc
        self.base_path = parse_result.path.lstrip('/')

        self.config = oci.config.from_file()
        self.object_storage = oci.object_storage.ObjectStorageClient(self.config)
        self.namespace = self.object_storage.get_namespace().data

    def _get_object_name(self, bento_name, bento_version):
        if self.base_path:
            return "/".join([self.base_path, bento_name, bento_version]) + '.tar.gz'
        else:
            return "/".join([bento_name, bento_version]) + '.tar.gz'

    def _get_presigned_url(self,
                           object_name,
                           access_type=CreatePreauthenticatedRequestDetails.ACCESS_TYPE_OBJECT_READ):
        # Creating a Pre-Authenticated Request
        par_ttl = (datetime.utcnow() + timedelta(hours=24)).replace(tzinfo=pytz.UTC)

        create_par_details = CreatePreauthenticatedRequestDetails()
        par_name = f"par-{object_name.replace('/', '-')}"
        create_par_details.name = par_name
        create_par_details.object_name = object_name
        create_par_details.access_type = access_type
        create_par_details.time_expires = par_ttl.isoformat()

        par = self.object_storage.create_preauthenticated_request(namespace_name=self.namespace,
                                                             bucket_name=self.bucket,
                                                             create_preauthenticated_request_details=create_par_details)

        # Get Object using the Pre-Authenticated Request
        par_request_url = self.object_storage.base_client.get_endpoint() + par.data.access_uri
        return par_request_url

    def add(self, bento_name, bento_version) -> BentoUri:
        object_name = self._get_object_name(bento_name, bento_version)
        par_request_url = self._get_presigned_url(object_name,
                                                  CreatePreauthenticatedRequestDetails.ACCESS_TYPE_OBJECT_WRITE)
        return BentoUri(
            type=self.uri_type,
            uri='oci://{}/{}'.format(self.bucket, object_name),
            oci_presigned_url=par_request_url,
        )

    def get(self, bento_name, bento_version) -> str:
        # Return OCI path containing uploaded Bento files
        object_name = self._get_object_name(bento_name, bento_version)

        try:
            par_request_url = self._get_presigned_url(object_name)
            logger.info(f"URL for Read: {par_request_url}")
            return par_request_url
        except Exception:  # pylint: disable=broad-except
            logger.error(
                "Failed generating presigned URL for downloading saved bundle from OCI,"
                "falling back to using OCI path and client side credential for"
                "downloading with oci sdk"
            )
            return 'oci://{}/{}'.format(self.bucket, object_name)

    def dangerously_delete(self, bento_name, bento_version):
        # Remove s3 path containing related Bento files

        object_name = self._get_object_name(bento_name, bento_version)

        pass
