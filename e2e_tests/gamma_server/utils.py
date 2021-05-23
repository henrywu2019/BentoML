import subprocess
import contextlib
import logging
import os

import psutil


logger = logging.getLogger('bentoml.test')

GRPC_PORT = '50051'
GRPC_CHANNEL_ADDRESS = f'0.0.0.0:{GRPC_PORT}'


def execute_bentoml_run_command(bento_tag, data, api="predict", gamma_url=None):
    command = ['bentoml', 'run', bento_tag, api, '--input', data, "-q"]
    if gamma_url is not None:
        command.extend(['--gamma-url', gamma_url])
    proc = subprocess.Popen(
        command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, env=os.environ,
    )
    stdout = proc.stdout.read().decode('utf-8')
    return stdout


@contextlib.contextmanager
def modified_environ(*remove, **update):
    """
    Temporarily updates the ``os.environ`` dictionary in-place.

    The ``os.environ`` dictionary is updated in-place so that the modification
    is sure to work in all situations.

    :param remove: Environment variables to remove.
    :param update: Dictionary of environment variables and values to add/update.
    """
    env = os.environ
    update = update or {}
    remove = remove or []

    # List of environment variables being updated or removed.
    stomped = (set(update.keys()) | set(remove)) & set(env.keys())
    # Environment variables and values to restore on exit.
    update_after = {k: env[k] for k in stomped}
    # Environment variables and values to remove on exit.
    remove_after = frozenset(k for k in update if k not in env)

    try:
        env.update(update)
        [env.pop(k, None) for k in remove]  # pylint: disable=expression-not-assigned
        yield
    finally:
        env.update(update_after)
        [env.pop(k) for k in remove_after]  # pylint: disable=expression-not-assigned


def kill_process(proc_pid):
    process = psutil.Process(proc_pid)
    for proc in process.children(recursive=True):
        proc.kill()
    process.kill()


@contextlib.contextmanager
def local_gamma_server(db_url=None, repo_base_url=None, port=50051):
    gamma_server_command = ['bentoml', 'gamma-service-start']
    if db_url:
        gamma_server_command.extend(['--db-url', db_url])
    if repo_base_url:
        gamma_server_command.extend(['--repo-base-url', repo_base_url])
    try:
        proc = subprocess.Popen(
            gamma_server_command, stdout=subprocess.PIPE, stderr=subprocess.PIPE
        )
        gamma_service_url = f"localhost:{port}"
        logger.info(f'Setting config gamma_service.url to: {gamma_service_url}')
        yield gamma_service_url
    finally:
        logger.info('Shutting down GammaServer gRPC server and node web server')
        kill_process(proc.pid)
