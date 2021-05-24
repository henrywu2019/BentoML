import kappa
from kappa.adapters import JsonInput, TfTensorInput
from kappa.frameworks.tensorflow import TensorflowSavedModelArtifact


@kappa.env(infer_pip_packages=True)
@kappa.artifacts(
    [
        TensorflowSavedModelArtifact('model1'),
        TensorflowSavedModelArtifact('model2'),
        TensorflowSavedModelArtifact('model3'),
    ]
)
class Tensorflow2Classifier(kappa.MyModel):
    @kappa.api(input=TfTensorInput(), batch=True)
    def predict1(self, tensor):
        return self.artifacts.model1(tensor)

    @kappa.api(input=TfTensorInput(), batch=True)
    def predict2(self, tensor):
        return self.artifacts.model2(tensor)

    @kappa.api(input=JsonInput(), batch=True)
    def predict3(self, jsons):
        import tensorflow as tf

        tensor = tf.ragged.constant(jsons, dtype=tf.float64)
        return self.artifacts.model3(tensor)
