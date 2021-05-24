from kappa import MyModel, api, artifacts, env
from kappa.adapters import DataframeInput
from kappa.frameworks.sklearn import SklearnModelArtifact


@env(infer_pip_packages=True)
@artifacts([SklearnModelArtifact('clf')])
class IrisClassifier(MyModel):
    @api(input=DataframeInput(), batch=True)
    def predict(self, df):
        return self.artifacts.clf.predict(df)
