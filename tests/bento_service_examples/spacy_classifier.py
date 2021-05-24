import kappa
from kappa.adapters import JsonInput
from kappa.frameworks.spacy import SpacyModelArtifact


@kappa.env(infer_pip_packages=True)
@kappa.artifacts([SpacyModelArtifact('nlp')])
class SpacyModelService(kappa.BentoService):
    @kappa.api(input=JsonInput(), batch=False)
    def predict(self, parsed_json):
        output = self.artifacts.nlp(parsed_json['text'])
        return output
