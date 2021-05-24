import os
import subprocess

import pytest
from minio import Minio

from kappa.utils.tempdir import TempDirectory
from kappa.gamma.client import get_gamma_client
from tests.bento_service_examples.example_bento_service import ExampleMyModel

bucket_name = 'test-repo'


@pytest.fixture()
def minio_address():
    client = Minio(
        'localhost:9000',
        access_key=os.getenv('AWS_ACCESS_KEY'),
        secret_key=os.getenv('AWS_SECRET_ACCESS_KEY'),
        secure=False,
    )
    client.make_bucket(bucket_name)
    return 'localhost:9000'


@pytest.mark.skip('Unable to connect minio on Github')
def test_s3(minio_address):
    gamma_server_command = [
        'kappa',
        'gamma-service-start',
        '--no-ui',
        '--grpc-port',
        '50051',
        '--repo-base-url',
        f's3://{bucket_name}/',
        '--s3-endpoint-url',
        'localhost:9000',
    ]
    proc = subprocess.Popen(
        gamma_server_command, stdout=subprocess.PIPE, stderr=subprocess.PIPE
    )
    gamma_server_url = "localhost:50051"
    svc = ExampleMyModel()
    svc.pack('model', {'model': 'abc'})
    bento_tag = f'{svc.name}:{svc.version}'
    saved_path = svc.save(gamma_url=gamma_server_url)
    yc = get_gamma_client(gamma_server_url)

    assert saved_path.startswith('s3://')

    bento_pb = yc.repository.get(bento_tag)
    with TempDirectory() as temp_dir:
        yc.repository.download_to_directory(bento_pb, f'{temp_dir}/bundle')
        assert os.path.exists(f'{temp_dir}/bundle/kappa.yml')
    proc.kill()
