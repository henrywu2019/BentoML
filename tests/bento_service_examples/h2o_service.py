import kappa
import h2o  # pylint: disable=import-error
from kappa.adapters import DataframeInput
from kappa.frameworks.h2o import H2oModelArtifact


@kappa.env(infer_pip_packages=True)
@kappa.artifacts([H2oModelArtifact('model')])
class H2oExampleBentoService(kappa.BentoService):
    @kappa.api(input=DataframeInput(), batch=True)
    def predict(self, df):
        hf = h2o.H2OFrame(df)
        predictions = self.artifacts.model.predict(hf)
        result = predictions.as_data_frame().to_json(orient='records')
        return result
