import logging

from kappa.gamma.proto.repository_pb2 import BentoUri
from kappa.gamma.client import get_gamma_client
from e2e_tests.sample_bento_service import SampleMyModel
from e2e_tests.gamma_server.utils import (
    execute_kappa_run_command,
    local_gamma_server,
)

logger = logging.getLogger('kappa.test')


def test_gamma_server_with_postgres_and_local_storage(postgres_db_container_url):
    with local_gamma_server(postgres_db_container_url) as gamma_service_url:
        yc = get_gamma_client(gamma_service_url)
        logger.info('Saving bento service')
        svc = SampleMyModel()
        svc.save(gamma_url=gamma_service_url)
        bento_tag = f'{svc.name}:{svc.version}'
        logger.info('MyModel saved')

        logger.info("Display MyModel info")
        bento = yc.repository.get(bento_tag)
        logger.info(bento)
        assert (
            bento.uri.type == BentoUri.LOCAL
        ), 'MyModel storage type mismatched, expect LOCAL'

        logger.info('Validate MyModel prediction result')
        run_result = execute_kappa_run_command(
            bento_tag=bento_tag, data='[]', gamma_url=gamma_service_url
        )
        assert 'cat' in run_result, 'Unexpected MyModel prediction result'

        logger.info(f'Deleting saved bundle {bento_tag}')
        yc.repository.delete(bento_tag=bento_tag)
