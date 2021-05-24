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


import logging

from kappa.gamma.gamma_service import get_gamma_service
from kappa.gamma.client.bento_repository_api import BentoRepositoryAPIClient
from kappa.gamma.client.deployment_api import DeploymentAPIClient

from kappa.utils import cached_property

logger = logging.getLogger(__name__)


class GammaClient:
    """Python Client for interacting with GammaService
    """

    def __init__(self, gamma_service=None):
        self.gamma_service = gamma_service if gamma_service else get_gamma_service()
        self.bento_repository_api_client = None
        self.deployment_api_client = None

    @cached_property
    def repository(self):
        return BentoRepositoryAPIClient(self.gamma_service)

    @cached_property
    def deployment(self):
        return DeploymentAPIClient(self.gamma_service)


def get_gamma_client(gamma_url=None):
    """
    Args:
        gamma_service_channel_address: String. Gamma Service URL address.

    Returns:
        GammaClient instance

    Example:

    >>>  from kappa.gamma.client import get_gamma_client
    >>>
    >>>  gamma_url = 'https://remote.gamma:50050'
    >>>  gamma_client = get_gamma_client(gamma_url)
    >>>
    >>>  local_gamma_client = get_gamma_client()
    """
    gamma_service = get_gamma_service(channel_address=gamma_url)
    return GammaClient(gamma_service=gamma_service)
