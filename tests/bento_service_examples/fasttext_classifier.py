import kappa

from kappa.adapters import JsonInput
from kappa.frameworks.fasttext import FasttextModelArtifact


@kappa.env(infer_pip_packages=True)
@kappa.artifacts([FasttextModelArtifact('model')])
class FasttextClassifier(kappa.MyModel):
    @kappa.api(input=JsonInput(), batch=False)
    def predict(self, parsed_json):
        return self.artifacts.model.predict(parsed_json['text'])
