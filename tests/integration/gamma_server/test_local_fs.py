import logging
import time
import pytest

from kappa.gamma.client import get_gamma_client
from kappa.gamma.proto.repository_pb2 import BentoUri
from tests.bento_service_examples.example_bento_service import ExampleBentoService
from tests.gamma.local_gamma_service import (
    local_gamma_service_container,
    local_gamma_service_from_cli,
)

logger = logging.getLogger('kappa.test')


def test_sqlite_and_local_fs():
    with local_gamma_service_container() as gamma_server_url:
        yc = get_gamma_client(gamma_server_url)
        svc = ExampleBentoService()
        svc.pack('model', [1, 2, 3])
        bento_tag = f'{svc.name}:{svc.version}'
        logger.info(f'Saving Kappa saved bundle {bento_tag}')
        svc.save(gamma_url=gamma_server_url)

        bento_pb = yc.repository.get(bento_tag)
        assert (
            bento_pb.uri.type == BentoUri.LOCAL
        ), 'BentoService storage type mismatched, expect LOCAL'

        logger.info(f'Deleting saved bundle {bento_tag}')
        delete_svc_result = yc.repository.delete(bento_tag)
        assert delete_svc_result is None


@pytest.mark.skip('Skipping Postgres test on Github Action as it continues been flaky')
def test_gamma_server_with_postgres_and_local_storage():
    postgres_db_url = 'postgresql://postgres:postgres@localhost/kappa:5432'

    from sqlalchemy_utils import create_database

    create_database(postgres_db_url)
    time.sleep(60)

    with local_gamma_service_from_cli(db_url=postgres_db_url) as gamma_server_url:
        logger.info('Saving bento service')
        logger.info(f'gamma url is {gamma_server_url}')
        svc = ExampleBentoService()
        svc.pack('model', [1, 2, 3])
        bento_tag = f'{svc.name}:{svc.version}'
        logger.info(f'Saving Kappa saved bundle {bento_tag}')
        svc.save(gamma_url=gamma_server_url)

        yc = get_gamma_client(gamma_server_url)
        bento_pb = yc.repository.get(bento_tag)
        assert (
            bento_pb.uri.type == BentoUri.LOCAL
        ), 'BentoService storage type mismatched, expect LOCAL'
