import logging

logger = logging.getLogger(__name__)
logger.warning(
    """\
Importing from "kappa.artifact.*" has been deprecated. Instead, use\
`kappa.frameworks.*` and `kappa.service.*`. e.g.:, \
`from kappa.frameworks.sklearn import SklearnModelArtifact`, \
`from kappa.service.artifacts import BentoServiceArtifact`, \
`from kappa.service.artifacts.common import PickleArtifact`"""
)

from kappa.service.artifacts import (
    BentoServiceArtifact,
    BentoServiceArtifactWrapper,
    ArtifactCollection,
)

from kappa.service.artifacts.common import TextFileArtifact
from kappa.service.artifacts.common import JSONArtifact
from kappa.service.artifacts.common import PickleArtifact

from kappa.frameworks.coreml import CoreMLModelArtifact
from kappa.frameworks.detectron import DetectronModelArtifact
from kappa.frameworks.evalml import EvalMLModelArtifact  # noqa: E402
from kappa.frameworks.fastai import (  # noqa: E402
    FastaiModelArtifact as Fastai2ModelArtifact,
)  # noqa: E402
from kappa.frameworks.fastai import (  # noqa: E402
    Fastai1ModelArtifact as FastaiModelArtifact,
)  # noqa: E402
from kappa.frameworks.fasttext import FasttextModelArtifact
from kappa.frameworks.h2o import H2oModelArtifact
from kappa.frameworks.keras import KerasModelArtifact
from kappa.frameworks.lightgbm import LightGBMModelArtifact
from kappa.frameworks.onnx import OnnxModelArtifact
from kappa.frameworks.onnxmlir import OnnxMlirModelArtifact
from kappa.frameworks.pytorch import (  # noqa: E402
    PytorchModelArtifact,
    PytorchLightningModelArtifact,
)  # noqa: E402
from kappa.frameworks.sklearn import SklearnModelArtifact
from kappa.frameworks.spacy import SpacyModelArtifact
from kappa.frameworks.tensorflow import TensorflowSavedModelArtifact
from kappa.frameworks.xgboost import XgboostModelArtifact
from kappa.frameworks.paddle import PaddlePaddleModelArtifact  # noqa: E402
from kappa.frameworks.easyocr import EasyOCRArtifact  # noqa: E402

__all__ = [
    "ArtifactCollection",
    "BentoServiceArtifact",
    "BentoServiceArtifactWrapper",
    "CoreMLModelArtifact",
    "DetectronModelArtifact",
    "EvalMLModelArtifact",
    "Fastai2ModelArtifact",
    "FastaiModelArtifact",
    "FasttextModelArtifact",
    "H2oModelArtifact",
    "JSONArtifact",
    "KerasModelArtifact",
    "LightGBMModelArtifact",
    "OnnxModelArtifact",
    "OnnxMlirModelArtifact",
    "PickleArtifact",
    "PytorchModelArtifact",
    "SklearnModelArtifact",
    "SpacyModelArtifact",
    "TensorflowSavedModelArtifact",
    "TextFileArtifact",
    "XgboostModelArtifact",
    "PytorchLightningModelArtifact",
    "PaddlePaddleModelArtifact",
    "EasyOCRArtifact",
]
