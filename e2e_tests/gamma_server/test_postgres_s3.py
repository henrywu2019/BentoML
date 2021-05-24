import logging

from kappa.gamma.proto.repository_pb2 import BentoUri
from kappa.gamma.client import get_gamma_client
from e2e_tests.sample_bento_service import SampleMyModel
from e2e_tests.gamma_server.utils import (
    execute_kappa_run_command,
    local_gamma_server,
)

logger = logging.getLogger('kappa.test')


def test_gamma_server_with_postgres_and_s3(postgres_db_container_url):
    # Note: Use pre-existing bucket instead of newly created bucket, because the
    # bucket's global DNS needs time to get set up.
    # https://github.com/boto/boto3/issues/1982#issuecomment-511947643

    s3_bucket_name = 's3://kappa-e2e-test-repo/'

    with local_gamma_server(
        db_url=postgres_db_container_url, repo_base_url=s3_bucket_name
    ) as gamma_service_url:
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
            bento.uri.type == BentoUri.S3
        ), 'MyModel storage type mismatched, expect S3'

        logger.info('Validate MyModel prediction result')
        run_result = execute_kappa_run_command(
            bento_tag=bento_tag, data='[]', gamma_url=gamma_service_url
        )
        assert 'cat' in run_result, 'Unexpected MyModel prediction result'

        logger.info(f'Deleting saved bundle {bento_tag}')
        yc.repository.delete(bento_tag=bento_tag)
