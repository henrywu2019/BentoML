import kappa
from kappa.adapters import DataframeInput
from kappa.frameworks.evalml import EvalMLModelArtifact


@kappa.env(infer_pip_packages=True)
@kappa.artifacts([EvalMLModelArtifact('model')])
class EvalMLClassifier(kappa.BentoService):
    @kappa.api(input=DataframeInput(), batch=True)
    def predict(self, df):
        return self.artifacts.model.predict(df).to_series().to_numpy()
