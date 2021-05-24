from typing import List, BinaryIO

from PIL import Image
import torch  # pylint: disable=import-error
from torch.autograd import Variable  # pylint: disable=import-error
from torchvision import transforms  # pylint: disable=import-error

import kappa
from kappa.frameworks.pytorch import PytorchModelArtifact
from kappa.adapters import FileInput


classes = (
    'plane',
    'car',
    'bird',
    'cat',
    'deer',
    'dog',
    'frog',
    'horse',
    'ship',
    'truck',
)


@kappa.env(pip_packages=['torch', 'numpy', 'torchvision', 'scikit-learn'])
@kappa.artifacts([PytorchModelArtifact('net')])
class PytorchImageClassifier(kappa.MyModel):
    @kappa.utils.cached_property
    def transform(self):
        return transforms.Compose(
            [
                transforms.ToTensor(),
                transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5)),
            ]
        )

    @kappa.api(input=FileInput(), batch=True)
    def predict(self, file_streams: List[BinaryIO]) -> List[str]:
        input_datas = []
        for fs in file_streams:
            img = Image.open(fs).resize((32, 32))
            input_datas.append(self.transform(img))

        outputs = self.artifacts.net(Variable(torch.stack(input_datas)))
        _, output_classes = outputs.max(dim=1)

        return [classes[output_class] for output_class in output_classes]
