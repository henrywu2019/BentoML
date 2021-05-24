import numpy
import sys

import kappa
from kappa.adapters import DataframeInput
from kappa.frameworks.onnxmlir import OnnxMlirModelArtifact


sys.path.append('/workdir/onnx-mlir/build/Debug/lib/')


@kappa.env(infer_pip_packages=True)
@kappa.artifacts([OnnxMlirModelArtifact('model')])
class OnnxMlirClassifier(kappa.BentoService):
    @kappa.api(input=DataframeInput(), batch=True)
    def predict(self, df):
        input_data = df.to_numpy().astype(numpy.float64)
        return self.artifacts.model.run(input_data)
