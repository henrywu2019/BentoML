import os

from bentoml.gamma.client import get_gamma_client
from .example_bento_service_class import ExampleBentoService
from tests.gamma.local_gamma_service import local_gamma_service_container


def test_push_and_pull():
    with local_gamma_service_container() as gamma_server_url:
        svc = ExampleBentoService()
        bento_tag = f'{svc.name}:{svc.version}'
        saved_path = svc.save()
        yc = get_gamma_client(gamma_server_url)

        pushed_path = yc.repository.push(bento_tag)
        assert pushed_path != saved_path

        local_yc = get_gamma_client()
        delete_result = local_yc.repository.delete(bento_tag)
        assert delete_result is None
        assert os.path.exists(saved_path) is False

        pull_result = yc.repository.pull(bento_tag)
        assert pull_result == saved_path
