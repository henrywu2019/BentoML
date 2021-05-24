import numpy

import kappa
import torch  # pylint: disable=import-error
from kappa.adapters import DataframeInput
from kappa.frameworks.pytorch import PytorchModelArtifact


@kappa.env(infer_pip_packages=True)
@kappa.artifacts([PytorchModelArtifact('model')])
class PytorchClassifier(kappa.MyModel):
    @kappa.api(input=DataframeInput(), batch=True)
    def predict(self, df):
        input_data = df.to_numpy().astype(numpy.float32)
        input_tensor = torch.from_numpy(input_data)
        output = self.artifacts.model(input_tensor)

        return output.unsqueeze(dim=0).item()
