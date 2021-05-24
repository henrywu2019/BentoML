import logging

from kappa.gamma.proto.repository_pb2 import BentoUri
from kappa.gamma.client import get_gamma_client
from e2e_tests.sample_bento_service import SampleBentoService
from e2e_tests.gamma_server.utils import (
    local_gamma_server,
    execute_kappa_run_command,
)

logger = logging.getLogger('kappa.test')


def test_gamma_server_with_sqlite_and_gcs():
    gcs_bucket_name = 'gs://kappa-e2e-tests/'

    with local_gamma_server(repo_base_url=gcs_bucket_name) as gamma_service_url:
        yc = get_gamma_client(gamma_service_url)
        logger.info('Saving bento service')
        svc = SampleBentoService()
        svc.save(gamma_url=gamma_service_url)
        bento_tag = f'{svc.name}:{svc.version}'
        logger.info('BentoService saved')

        logger.info("Display bentoservice info")
        bento = yc.repository.get(bento_tag)
        logger.info(bento)
        assert (
            bento.uri.type == BentoUri.GCS
        ), 'BentoService storage type mismatched, expect GCS'

        logger.info('Validate BentoService prediction result')
        run_result = execute_kappa_run_command(
            bento_tag=bento_tag, data='[]', gamma_url=gamma_service_url
        )
        logger.info(run_result)
        assert 'cat' in run_result, 'Unexpected BentoService prediction result'

        logger.info(f'Deleting saved bundle {bento_tag}')
        yc.repository.delete(bento_tag=bento_tag)
