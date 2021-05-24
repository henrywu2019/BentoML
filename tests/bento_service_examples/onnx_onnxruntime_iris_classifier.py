import numpy

import kappa
from kappa.adapters import DataframeInput
from kappa.frameworks.onnx import OnnxModelArtifact


@kappa.env(infer_pip_packages=True)
@kappa.artifacts([OnnxModelArtifact('model', backend='onnxruntime')])
class OnnxIrisClassifier(kappa.BentoService):
    @kappa.api(input=DataframeInput(), batch=True)
    def predict(self, df):
        input_data = df.to_numpy().astype(numpy.float32)
        input_name = self.artifacts.model.get_inputs()[0].name
        output_name = self.artifacts.model.get_outputs()[0].name
        return self.artifacts.model.run([output_name], {input_name: input_data})[0]
