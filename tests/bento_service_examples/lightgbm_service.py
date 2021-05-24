import kappa
from kappa.frameworks.lightgbm import LightGBMModelArtifact
from kappa.adapters import DataframeInput


@kappa.artifacts([LightGBMModelArtifact('model')])
@kappa.env(infer_pip_packages=True)
class LgbModelService(kappa.MyModel):
    @kappa.api(input=DataframeInput(), batch=True)
    def predict(self, df):
        return self.artifacts.model.predict(df)
