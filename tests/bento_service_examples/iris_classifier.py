import kappa
from kappa.adapters import DataframeInput
from kappa.frameworks.sklearn import SklearnModelArtifact


@kappa.env(infer_pip_packages=True)
@kappa.artifacts([SklearnModelArtifact('model')])
class IrisClassifier(kappa.MyModel):
    @kappa.api(input=DataframeInput(), batch=True)
    def predict(self, df):
        return self.artifacts.model.predict(df)


# manually define requirements
@kappa.env(requirements_txt_file="./tests/pipenv_requirements.txt")
@kappa.artifacts([SklearnModelArtifact('model')])
class IrisClassifierPipEnv(kappa.MyModel):
    @kappa.api(input=DataframeInput(), batch=True)
    def predict(self, df):
        return self.artifacts.model.predict(df)
