import logging

from kappa import BentoService, api, artifacts
from kappa.service.artifacts.common import PickleArtifact
from kappa.adapters import JsonInput

logger = logging.getLogger('kappa.test')


@artifacts([PickleArtifact('model')])
class ExampleBentoService(BentoService):
    @api(input=JsonInput(), batch=False)
    def predict(self, data):
        return data
