import numpy as np

import kappa
import xgboost as xgb  # pylint: disable=import-error
from kappa.adapters import DataframeInput
from kappa.frameworks.xgboost import XgboostModelArtifact


@kappa.env(infer_pip_packages=True)
@kappa.artifacts([XgboostModelArtifact('model')])
class XgboostModelClassifier(kappa.BentoService):
    @kappa.api(input=DataframeInput(), batch=True)
    def predict(self, df):
        dmatrix = xgb.DMatrix(df)
        result = self.artifacts.model.predict(dmatrix)
        preds = np.asarray([np.argmax(line) for line in result])
        return preds
