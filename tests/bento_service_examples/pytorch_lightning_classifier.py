import torch  # pylint: disable=import-error

import kappa
from kappa.frameworks.pytorch import PytorchLightningModelArtifact
from kappa.adapters import DataframeInput


@kappa.env(infer_pip_packages=True)
@kappa.artifacts([PytorchLightningModelArtifact('model')])
class PytorchLightningService(kappa.MyModel):
    @kappa.api(input=DataframeInput(), batch=True)
    def predict(self, df):
        input_tensor = torch.from_numpy(df.to_numpy())
        return self.artifacts.model(input_tensor).numpy()
