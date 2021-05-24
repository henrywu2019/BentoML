import numpy as np

import kappa
from kappa.adapters import JsonInput
from kappa.frameworks.keras import KerasModelArtifact


@kappa.env(infer_pip_packages=True)
@kappa.artifacts(
    [
        KerasModelArtifact('model'),
        KerasModelArtifact('model2', store_as_json_and_weights=True),
    ]
)
class KerasClassifier(kappa.BentoService):
    @kappa.api(input=JsonInput(), batch=True)
    def predict(self, jsons):
        return self.artifacts.model.predict(np.array(jsons))

    @kappa.api(input=JsonInput(), batch=True)
    def predict2(self, jsons):
        return self.artifacts.model2.predict(np.array(jsons))
