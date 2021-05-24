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


import click
import logging
from dependency_injector.wiring import Provide, inject

from bentoml.configuration.containers import (
    BentoMLContainer,
    GAMMA_REPOSITORY_TYPES,
    GAMMA_REPOSITORY_FILE_SYSTEM,
    GAMMA_REPOSITORY_S3,
    GAMMA_REPOSITORY_GCS,
    GAMMA_REPOSITORY_OCI,
)
from bentoml.gamma.gamma_service import start_gamma_service_grpc_server


logger = logging.getLogger(__name__)


@inject
def add_gamma_service_sub_command(
    cli,
    default_db_url: str = Provide[BentoMLContainer.gamma_database_url],
    default_repository_type: str = Provide[
        BentoMLContainer.config.gamma.repository.type
    ],
    default_file_system_directory: str = Provide[
        BentoMLContainer.gamma_file_system_directory
    ],
    default_s3_url: str = Provide[BentoMLContainer.config.gamma.repository.s3.url],
    default_s3_endpoint_url: str = Provide[
        BentoMLContainer.config.gamma.repository.s3.endpoint_url
    ],
    default_gcs_url: str = Provide[BentoMLContainer.config.gamma.repository.gcs.url],
    default_oci_url: str = Provide[BentoMLContainer.config.gamma.repository.oci.url],
):
    # pylint: disable=unused-variable

    @cli.command(help='Start Kappa GammaService for model management and deployment')
    @click.option(
        '--db-url',
        type=click.STRING,
        help='Database URL following RFC-1738, and usually can include username, '
        'password, hostname, database name as well as optional keyword arguments '
        'for additional configuration',
        envvar='BENTOML_DB_URL',
        default=default_db_url,
    )
    @click.option(
        '--repo-base-url',
        type=click.STRING,
        help='Deprecated option for base URL for storing Kappa saved bundle files, '
        'this can be a file system path(POSIX/Windows), or a S3 URL, '
        'usually starting with "s3://"',
        envvar='BENTOML_REPO_BASE_URL',
    )
    @click.option(
        '--grpc-port',
        type=click.INT,
        default=50051,
        help='Port to run GammaService gRPC server',
        envvar='BENTOML_GRPC_PORT',
    )
    @click.option(
        '--ui-port',
        type=click.INT,
        default=3000,
        help='Port to run GammaService Web UI server',
        envvar='BENTOML_WEB_UI_PORT',
    )
    @click.option(
        '--ui/--no-ui',
        default=True,
        help='Run GammaService with or without Web UI, when running with --no-ui, it '
        'will only run the gRPC server',
        envvar='BENTOML_ENABLE_WEB_UI',
    )
    @click.option(
        '--web-prefix-path',
        type=click.STRING,
        default='.',
        help='Add a location prefix to the URL when running GammaService'
        'behind a reverse proxy server',
        envvar='BENTOML_GAMMA_WEB_PREFIX_PATH',
    )
    @click.option(
        '--repository-type',
        type=click.Choice(GAMMA_REPOSITORY_TYPES, case_sensitive=False),
        default=default_repository_type,
        help='Type of the repository implementation',
        envvar='BENTOML_GAMMA_REPOSITORY_TYPE',
    )
    @click.option(
        '--file-system-directory',
        type=click.STRING,
        default=default_file_system_directory,
        help='Specifies the directory path for the file system repository type',
        envvar='BENTOML_GAMMA_FILE_SYSTEM_DIRECTORY',
    )
    @click.option(
        '--s3-url',
        type=click.STRING,
        default=default_s3_url,
        help='Specifies the S3 URL for the S3 repository type',
        envvar='BENTOML_GAMMA_S3_URL',
    )
    @click.option(
        '--s3-endpoint-url',
        type=click.STRING,
        default=default_s3_endpoint_url,
        help='S3 Endpoint URL is used for deploying with storage services that are '
        'compatible with Amazon S3, such as MinIO',
        envvar='BENTOML_S3_ENDPOINT_URL',
    )
    @click.option(
        '--gcs-url',
        type=click.STRING,
        default=default_gcs_url,
        help='Specifies the GCS URL for the GCS repository type',
        envvar='BENTOML_GAMMA_GCS_URL',
    )
    @click.option(
        '--oci-url',
        type=click.STRING,
        default=default_oci_url,
        help='Specifies the OCI URL for the OCI repository type',
        envvar='BENTOML_GAMMA_OCI_URL',
    )
    def gamma_service_start(
        db_url,
        repo_base_url,
        grpc_port,
        ui_port,
        ui,
        web_prefix_path,
        repository_type,
        file_system_directory,
        s3_url,
        s3_endpoint_url,
        gcs_url,
        oci_url,
    ):
        from bentoml.utils.s3 import is_s3_url
        from bentoml.utils.oci_object_storage import is_oci_url
        from bentoml.utils.gcs import is_gcs_url

        if repo_base_url:
            logger.warning(
                "Option --repo-base-url has been deprecated but is still supported "
                "in the current release. Consider using --repository-type and its "
                "corresponding options in the upcoming releases. "
            )
            if is_s3_url(repo_base_url):
                repository_type = GAMMA_REPOSITORY_S3
                s3_url = repo_base_url
            elif is_gcs_url(repo_base_url):
                repository_type = GAMMA_REPOSITORY_GCS
                gcs_url = repo_base_url
            elif is_oci_url(repo_base_url):
                repository_type = GAMMA_REPOSITORY_OCI
                oci_url = repo_base_url
            else:
                repository_type = GAMMA_REPOSITORY_FILE_SYSTEM
                file_system_directory = repo_base_url

        if repository_type == GAMMA_REPOSITORY_S3 and s3_url is None:
            logger.error("'--s3-url' must be specified for S3 repository type")
            return
        elif repository_type == GAMMA_REPOSITORY_GCS and gcs_url is None:
            logger.error("'--gcs-url' must be specified for GCS repository type")
            return
        elif repository_type == GAMMA_REPOSITORY_OCI and oci_url is None:
            logger.error("'--oci-url' must be specified for OCI repository type")
            return
        elif (
            repository_type == GAMMA_REPOSITORY_FILE_SYSTEM
            and file_system_directory is None
        ):
            logger.error(
                "'--file-system-directory' must be specified for file system "
                "repository type"
            )
            return
        else:
            start_gamma_service_grpc_server(
                db_url=db_url,
                grpc_port=grpc_port,
                ui_port=ui_port,
                with_ui=ui,
                base_url=web_prefix_path,
                repository_type=repository_type,
                file_system_directory=file_system_directory,
                s3_url=s3_url,
                s3_endpoint_url=s3_endpoint_url,
                gcs_url=gcs_url,
                oci_url=oci_url,
            )
