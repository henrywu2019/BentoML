# Copyright 2019 Atalaya Tech, Inc.

# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at

# http://www.apache.org/licenses/LICENSE-2.0

# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from kappa.adapters.annotated_image_input import AnnotatedImageInput
from kappa.adapters.base_input import BaseInputAdapter
from kappa.adapters.base_output import BaseOutputAdapter
from kappa.adapters.clipper_input import (
    ClipperBytesInput,
    ClipperDoublesInput,
    ClipperFloatsInput,
    ClipperIntsInput,
    ClipperStringsInput,
)
from kappa.adapters.dataframe_input import DataframeInput
from kappa.adapters.dataframe_output import DataframeOutput
from kappa.adapters.default_output import DefaultOutput
from kappa.adapters.file_input import FileInput
from kappa.adapters.image_input_cv2 import ImageInputCV2
from kappa.adapters.image_input import ImageInput
from kappa.adapters.binary_file_input import BinaryFileInput
from kappa.adapters.json_input import JsonInput
from kappa.adapters.json_output import JsonOutput
from kappa.adapters.multi_file_input import MultiFileInput
from kappa.adapters.multi_image_input import MultiImageInput
from kappa.adapters.string_input import StringInput
from kappa.adapters.tensorflow_tensor_input import TfTensorInput
from kappa.adapters.tensorflow_tensor_output import TfTensorOutput

__all__ = [
    "BaseInputAdapter",
    'BaseOutputAdapter',
    "DataframeInput",
    'DataframeOutput',
    "TfTensorInput",
    'TfTensorOutput',
    "JsonInput",
    "StringInput",
    'JsonOutput',
    "ImageInput",  # PIL
    "ImageInputCV2",  # CV2
    "BinaryFileInput",
    "MultiImageInput",
    "FileInput",
    "MultiFileInput",
    "AnnotatedImageInput",
    "ClipperBytesInput",
    "ClipperDoublesInput",
    "ClipperFloatsInput",
    "ClipperIntsInput",
    "ClipperStringsInput",
    'DefaultOutput',
]
