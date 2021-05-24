import sys

import kappa
from kappa.adapters import TfTensorInput
from kappa.frameworks.tensorflow import TensorflowSavedModelArtifact

if "tensorflow" not in sys.modules:
    import tensorflow

    tensorflow.enable_eager_execution()


@kappa.env(infer_pip_packages=True)
@kappa.artifacts([TensorflowSavedModelArtifact('model')])
class Tensorflow1Classifier(kappa.MyModel):
    @kappa.api(input=TfTensorInput(), batch=True)
    def predict(self, tensor):
        import tensorflow as tf

        tf.enable_eager_execution()

        pred_func = self.artifacts.model.signatures['serving_default']
        return pred_func(tensor)['prediction']
