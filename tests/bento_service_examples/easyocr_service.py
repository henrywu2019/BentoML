import kappa
from kappa.adapters import ImageInput
from kappa.frameworks.easyocr import EasyOCRArtifact

import numpy as np


@kappa.env(pip_packages=["easyocr>=1.3.0"])
@kappa.artifacts([EasyOCRArtifact("chinese_small")])
class EasyOCRService(kappa.BentoService):
    @kappa.api(input=ImageInput(), batch=False)
    def predict(self, image):
        reader = self.artifacts.chinese_small
        raw_results = reader.readtext(np.array(image))
        text_instances = [x[1] for x in raw_results]
        return {"text": text_instances}
