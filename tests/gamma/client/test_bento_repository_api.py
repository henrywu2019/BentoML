# pylint: disable=redefined-outer-name
import logging
import os
import signal
import subprocess
import sys
import time
import uuid

import psutil  # noqa # pylint: disable=unused-import
import pytest

import kappa
import docker
from kappa.configuration import LAST_PYPI_RELEASE_VERSION
from kappa.exceptions import InvalidArgument
from kappa.saved_bundle.loader import load_from_dir
from kappa.gamma.client import get_gamma_client
from kappa.gamma.deployment.docker_utils import ensure_docker_available_or_raise
from kappa.gamma.db.stores.label import _validate_labels

logger = logging.getLogger('kappa.test')


def test_validate_labels_fails():
    with pytest.raises(InvalidArgument):
        _validate_labels(
            {'this_is_a_super_long_key_name_it_will_be_more_than_the_max_allowed': 'v'}
        )
    with pytest.raises(InvalidArgument):
        _validate_labels({'key_contains!': 'value'})
    with pytest.raises(InvalidArgument):
        _validate_labels({'key': 'value-contains?'})
    with pytest.raises(InvalidArgument):
        _validate_labels({'key nop': 'value'})
    with pytest.raises(InvalidArgument):
        _validate_labels({'key': '1', 'key3@#!$': 'value'})
    with pytest.raises(InvalidArgument):
        _validate_labels({'key': 'cant_end_with_symbol_'})


def test_validate_labels_pass():
    _validate_labels({'long_key_title': 'some_value', 'another_key': "value"})
    _validate_labels({'long_key-title': 'some_value-inside.this'})
    _validate_labels({'create_by': 'admin', 'py.version': '3.6.8'})


def wait_until_container_ready(container_name, check_message, timeout_seconds=120):
    docker_client = docker.from_env()

    start_time = time.time()
    while True:
        time.sleep(1)
        container_list = docker_client.containers.list(filters={'name': container_name})
        logger.info("Container list: " + str(container_list))
        if not container_list:
            # Raise timeout, if exceeds timeout limit
            if time.time() - start_time > timeout_seconds:
                raise TimeoutError(f'Get container: {container_name} timed out')
            else:
                continue

        assert (
            len(container_list) == 1
        ), f'should be exact one container with name {container_name}'

        if check_message in container_list[0].logs():
            break


@pytest.fixture(scope='module')
def gamma_server_container():
    ensure_docker_available_or_raise()

    gamma_docker_image_tag = f'kappa/gamma-service:{LAST_PYPI_RELEASE_VERSION}'
    container_name = f'e2e-test-gamma-service-container-{uuid.uuid4().hex[:6]}'
    port = '50055'
    command = [
        'docker',
        'run',
        '--rm',
        '--name',
        container_name,
        '-e',
        'KAPPA_HOME=/tmp',
        '-p',
        f'{port}:{port}',
        '-p',
        '3000:3000',
        gamma_docker_image_tag,
        '--grpc-port',
        port,
    ]

    logger.info(f"Starting docker container {container_name}: {command}")
    docker_proc = subprocess.Popen(
        command, stdout=subprocess.PIPE, stderr=subprocess.PIPE
    )
    wait_until_container_ready(
        container_name, b'* Starting Kappa GammaService gRPC Server', 120
    )

    yield f'localhost:{port}'

    logger.info(f"Shutting down docker container: {container_name}")
    os.kill(docker_proc.pid, signal.SIGINT)


class TestModel(object):
    def predict(self, input_data):
        return int(input_data) * 2


@pytest.mark.skipif(
    sys.platform == "darwin",
    reason="Requires docker, skipping test for Mac OS on Github Action",
)
@pytest.mark.skipif('not psutil.POSIX')
def test_save_load(gamma_server_container, example_bento_service_class):
    example_bento_service_class = kappa.ver(major=2, minor=1)(
        example_bento_service_class
    )

    yc = get_gamma_client(gamma_server_container)
    test_model = TestModel()
    svc = example_bento_service_class()
    svc.pack('model', test_model)

    saved_path = svc.save(gamma_url=gamma_server_container)
    assert saved_path

    bento_pb = yc.repository.get(f'{svc.name}:{svc.version}')
    bento_service = load_from_dir(bento_pb.uri.uri)
    assert bento_service.predict(1) == 2


@pytest.mark.skipif(
    sys.platform == "darwin",
    reason="Requires docker, skipping test for Mac OS on Github Action",
)
@pytest.mark.skipif('not psutil.POSIX')
def test_push(gamma_server_container, example_bento_service_class):
    example_bento_service_class = kappa.ver(major=2, minor=2)(
        example_bento_service_class
    )

    yc = get_gamma_client(gamma_server_container)
    test_model = TestModel()
    svc = example_bento_service_class()
    svc.pack('model', test_model)
    saved_path = svc.save()

    pushed_path = yc.repository.push(f'{svc.name}:{svc.version}')
    assert pushed_path != saved_path


@pytest.mark.skipif(
    sys.platform == "darwin",
    reason="Requires docker, skipping test for Mac OS on Github Action",
)
@pytest.mark.skipif('not psutil.POSIX')
def test_pull(gamma_server_container, example_bento_service_class):
    example_bento_service_class = kappa.ver(major=2, minor=3)(
        example_bento_service_class
    )

    yc = get_gamma_client(gamma_server_container)
    test_model = TestModel()
    svc = example_bento_service_class()
    svc.pack('model', test_model)
    saved_path = svc.save(gamma_url=gamma_server_container)

    pulled_local_path = yc.repository.pull(f'{svc.name}:{svc.version}')
    assert pulled_local_path != saved_path


@pytest.mark.skipif(
    sys.platform == "darwin",
    reason="Requires docker, skipping test for Mac OS on Github Action",
)
@pytest.mark.skipif('not psutil.POSIX')
def test_push_with_labels(gamma_server_container, example_bento_service_class):
    example_bento_service_class = kappa.ver(major=2, minor=2)(
        example_bento_service_class
    )

    yc = get_gamma_client(gamma_server_container)
    test_model = TestModel()
    svc = example_bento_service_class()
    svc.pack('model', test_model)
    saved_path = svc.save(labels={'foo': 'bar', 'abc': '123'})

    pushed_path = yc.repository.push(f'{svc.name}:{svc.version}')
    assert pushed_path != saved_path
    remote_bento_pb = yc.repository.get(f'{svc.name}:{svc.version}')
    assert remote_bento_pb.bento_service_metadata.labels
    labels = dict(remote_bento_pb.bento_service_metadata.labels)
    assert labels['foo'] == 'bar'
    assert labels['abc'] == '123'


@pytest.mark.skipif(
    sys.platform == "darwin",
    reason="Requires docker, skipping test for Mac OS on Github Action",
)
@pytest.mark.skipif('not psutil.POSIX')
def test_pull_with_labels(gamma_server_container, example_bento_service_class):
    example_bento_service_class = kappa.ver(major=2, minor=3)(
        example_bento_service_class
    )

    yc = get_gamma_client(gamma_server_container)
    test_model = TestModel()
    svc = example_bento_service_class()
    svc.pack('model', test_model)
    saved_path = svc.save(
        gamma_url=gamma_server_container, labels={'foo': 'bar', 'abc': '123'}
    )

    pulled_local_path = yc.repository.pull(f'{svc.name}:{svc.version}')
    assert pulled_local_path != saved_path
    local_yc = get_gamma_client()
    local_bento_pb = local_yc.repository.get(f'{svc.name}:{svc.version}')
    assert local_bento_pb.bento_service_metadata.labels
    labels = dict(local_bento_pb.bento_service_metadata.labels)
    assert labels['foo'] == 'bar'
    assert labels['abc'] == '123'


@pytest.mark.skipif(
    sys.platform == "darwin",
    reason="Requires docker, skipping test for Mac OS for Github Action",
)
@pytest.mark.skipif('not psutil.POSIX')
def test_get(gamma_server_container, example_bento_service_class):
    example_bento_service_class = kappa.ver(major=2, minor=4)(
        example_bento_service_class
    )

    yc = get_gamma_client(gamma_server_container)
    test_model = TestModel()
    svc = example_bento_service_class()
    svc.pack('model', test_model)
    svc.save(gamma_url=gamma_server_container)
    svc_pb = yc.repository.get(f'{svc.name}:{svc.version}')
    assert svc_pb.bento_service_metadata.name == svc.name
    assert svc_pb.bento_service_metadata.version == svc.version


@pytest.mark.skipif(
    sys.platform == "darwin",
    reason="Requires docker, skipping test for Mac OS for Github Action",
)
@pytest.mark.skipif('not psutil.POSIX')
def test_list(gamma_server_container, example_bento_service_class):
    example_bento_service_class = kappa.ver(major=2, minor=5)(
        example_bento_service_class
    )
    yc = get_gamma_client(gamma_server_container)
    test_model = TestModel()
    svc = example_bento_service_class()
    svc.pack('model', test_model)
    svc.save(gamma_url=gamma_server_container)

    bentos = yc.repository.list(bento_name=svc.name)
    assert len(bentos) == 7


@pytest.mark.skipif(
    sys.platform == "darwin",
    reason="Requires docker, skipping test for Mac OS for Github Action",
)
@pytest.mark.skipif('not psutil.POSIX')
def test_load(gamma_server_container, example_bento_service_class):
    example_bento_service_class = kappa.ver(major=2, minor=5)(
        example_bento_service_class
    )
    yc = get_gamma_client(gamma_server_container)
    test_model = TestModel()
    svc = example_bento_service_class()
    svc.pack('model', test_model)
    svc.save(gamma_url=gamma_server_container)

    loaded_svc = yc.repository.load(f'{svc.name}:{svc.version}')
    assert loaded_svc.name == svc.name


@pytest.mark.skipif('not psutil.POSIX')
def test_load_from_dir(example_bento_service_class):
    example_bento_service_class = kappa.ver(major=2, minor=6)(
        example_bento_service_class
    )
    yc = get_gamma_client()
    test_model = TestModel()
    svc = example_bento_service_class()
    svc.pack('model', test_model)
    saved_path = svc.save()

    loaded_svc = yc.repository.load(saved_path)
    assert loaded_svc.name == svc.name
