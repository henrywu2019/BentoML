from kappa import env, artifacts, api, MyModel
from kappa.adapters import JsonInput
from kappa.frameworks.gluon import GluonModelArtifact
import mxnet as mx  # pylint: disable=import-error


@env(infer_pip_packages=True)
@artifacts([GluonModelArtifact('model')])
class GluonClassifier(MyModel):
    @api(input=JsonInput(), batch=False)
    def predict(self, request):
        nd_input = mx.nd.array(request)
        return self.artifacts.model(nd_input).asnumpy()
