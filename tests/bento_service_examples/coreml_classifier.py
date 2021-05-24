import numpy
import pandas as pd

import kappa
from kappa.adapters import DataframeInput
from kappa.frameworks.coreml import CoreMLModelArtifact
from coremltools.models import MLModel  # pylint: disable=import-error


@kappa.env(infer_pip_packages=True)
@kappa.artifacts([CoreMLModelArtifact('model')])
class CoreMLClassifier(kappa.MyModel):
    @kappa.api(input=DataframeInput(), batch=True)
    def predict(self, df: pd.DataFrame) -> float:
        model: MLModel = self.artifacts.model
        input_data = df.to_numpy().astype(numpy.float32)
        output = model.predict({"input": input_data})
        return next(iter(output.values())).item()
