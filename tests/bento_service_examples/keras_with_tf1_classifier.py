import numpy as np

import kappa
from kappa.adapters import JsonInput
from kappa.frameworks.keras import KerasModelArtifact


@kappa.env(pip_packages=["keras==2.3.1", "tensorflow==1.14", "h5py==2.10.0"])
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
