import contextlib
import logging
import os
import subprocess
import time
import uuid

import docker
from bentoml.configuration import LAST_PYPI_RELEASE_VERSION
from bentoml.utils.tempdir import TempDirectory
from bentoml.gamma.deployment.docker_utils import ensure_docker_available_or_raise

logger = logging.getLogger('bentoml.test')


def wait_until_container_ready(docker_container, timeout_seconds=120):
    start_time = time.time()
    while True:
        time.sleep(1)
        if docker_container.status == 'created':
            logger.info('Container logs')
            logger.info(docker_container.logs())
            break
        else:
            logger.info(f'Container status: {docker_container.status}')
        if time.time() - start_time > timeout_seconds:
            raise TimeoutError(f'Get container: {docker_container.name} timed out')
        else:
            continue


@contextlib.contextmanager
def local_gamma_service_container(db_url=None, repo_base_url=None):
    ensure_docker_available_or_raise()
    docker_client = docker.from_env()
    local_bentoml_repo_path = os.path.abspath(__file__ + "/../../../")
    gamma_docker_image_tag = f'bentoml/gamma-service:e2e-test-{uuid.uuid4().hex[:6]}'

    # Note: When set both `custom_context` and `fileobj`, docker api will not use the
    #   `path` provide... docker/api/build.py L138. The solution is create an actual
    #   Dockerfile along with path, instead of fileobj and custom_context.
    with TempDirectory() as temp_dir:
        temp_docker_file_path = os.path.join(temp_dir, 'Dockerfile')
        with open(temp_docker_file_path, 'w') as f:
            f.write(
                f"""\
FROM bentoml/gamma-service:{LAST_PYPI_RELEASE_VERSION}
ADD . /bentoml-local-repo
RUN pip install -U /bentoml-local-repo
            """
            )
        logger.info(f'building docker image {gamma_docker_image_tag}')
        docker_client.images.build(
            path=local_bentoml_repo_path,
            dockerfile=temp_docker_file_path,
            tag=gamma_docker_image_tag,
        )

        container_name = f'gamma-service-container-{uuid.uuid4().hex[:6]}'
        gamma_service_url = 'localhost:50051'
        gamma_server_command = ['bentoml', 'gamma-service-start', '--no-ui']
        if db_url:
            gamma_server_command.extend(['--db-url', db_url])
        if repo_base_url:
            gamma_server_command.extend(['--repo-base-url', repo_base_url])
        container = docker_client.containers.run(
            image=gamma_docker_image_tag,
            environment=['BENTOML_HOME=/tmp'],
            ports={'50051/tcp': 50051},
            command=gamma_server_command,
            name=container_name,
            detach=True,
        )

        wait_until_container_ready(container)
        yield gamma_service_url

        logger.info(f"Shutting down docker container: {container_name}")
        container.kill()


@contextlib.contextmanager
def local_gamma_service_from_cli(db_url=None, repo_base_url=None, port=50051):
    gamma_server_command = [
        'bentoml',
        'gamma-service-start',
        '--no-ui',
        '--grpc-port',
        str(port),
    ]
    if db_url:
        gamma_server_command.extend(['--db-url', db_url])
    if repo_base_url:
        gamma_server_command.extend(['--repo-base-url', repo_base_url])
    logger.info(f'Starting local GammaServer {" ".join(gamma_server_command)}')
    proc = subprocess.Popen(
        gamma_server_command, stdout=subprocess.PIPE, stderr=subprocess.PIPE
    )
    gamma_service_url = f"localhost:{port}"
    logger.info(f'Setting config gamma_service.url to: {gamma_service_url}')
    yield gamma_service_url
    proc.kill()
