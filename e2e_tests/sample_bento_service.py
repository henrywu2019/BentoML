import logging

from kappa import MyModel, api
from kappa.adapters import JsonInput

logger = logging.getLogger('kappa.test')


class SampleMyModel(MyModel):
    @api(input=JsonInput(), batch=False)
    def predict(self, data):
        logger.info(f"SampleMyModel predict API received data {data}")
        return 'cat'


class UpdatedSampleMyModel(MyModel):
    @api(input=JsonInput(), batch=False)
    def predict(self, data):
        logger.info(f"UpdatedSampleMyModel predict API received data {data}")
        return 'dog'
