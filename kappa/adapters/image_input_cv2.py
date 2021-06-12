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

from typing import BinaryIO, Iterable, Sequence, Tuple

from kappa.adapters.file_input import FileInput
from kappa.adapters.utils import (
    check_file_extension,
    get_default_accept_image_formats,
)
from kappa.types import InferenceTask
from kappa.utils.lazy_loader import LazyLoader

# Kappa optional dependencies, using lazy load to avoid ImportError
cv2 = LazyLoader('cv2', globals(), 'cv2')
numpy = LazyLoader('numpy', globals(), 'numpy')


ApiFuncArgs = Tuple[
    Sequence['numpy.ndarray'],
]


class ImageInputCV2(FileInput):
    """Convert incoming image data from http request, cli or lambda event into numpy.ndarray
    and pass down to user defined API functions.

    ** To operate raw files or PIL.Image obj, use the low-level :class:`.FileInput`. **

    Parameters
    ----------
    accept_image_formats : List[str]
        A list of acceptable image formats.
        Default value is loaded from kappa config
        'apiserver/default_image_input_accept_file_extensions', which is
        set to ['.jpg', '.png', '.jpeg', '.tiff', '.webp', '.bmp'] by default.

    Raises
    ----------
    ImportError: cv2 package is required to use ImageInputCV2

    Examples
    ----------

    Service using ImageInputCV2:

    .. code-block:: python

        from typing import List

        import numpy as np
        from kappa import MyModel, api, artifacts
        from kappa.frameworks.tensorflow import TensorflowSavedModelArtifact
        from kappa.adapters import ImageInputCV2

        CLASS_NAMES = ['cat', 'dog']

        @artifacts([TensorflowSavedModelArtifact('classifier')])
        class PetClassification(MyModel):
            @api(input=ImageInputCV2(), batch=True)
            def predict(
                self, image_arrays: List[nump]
            ) -> List[str]:
                results = self.artifacts.classifer.predict(image_arrays)
                return [CLASS_NAMES[r] for r in results]

    OR use ImageInputCV2 with ``batch=False`` (the default):

    .. code-block:: python

        @api(input=ImageInputCV2(), batch=False)
        def predict(self, image_array: cv2.core.utils.Array) -> str:
            results = self.artifacts.classifer.predict([image_array])
            return CLASS_NAMES[results[0]]

    Query with HTTP request::

        curl -i \\
          --header "Content-Type: image/jpeg" \\
          --request POST \\
          --data-binary @test.jpg \\
          localhost:5000/predict

    OR::

        curl -i \\
          -F image=@test.jpg \\
          localhost:5000/predict

    OR by an HTML form that sends multipart data:

    .. code-block:: html

        <form action="http://localhost:8000" method="POST"
              enctype="multipart/form-data">
            <input name="image" type="file">
            <input type="submit">
        </form>

    OR by python requests:

    .. code-block:: python

        import requests

        with open("test.jpg", "rb") as f:
            image_bytes = f.read()  # from file path

        files = {
            "image": ("test.jpg", image_bytes),
        }
        response = requests.post(your_url, files=files)

    .. code-block:: python

        import requests
        import PIL

        pil_image = PIL.Image.open('test.jpg')

        image_bytes = pil_image.tobytes()  # from PIL.Image

        files = {
            "image": ("test.jpg", image_bytes),
        }
        response = requests.post(your_url, files=files)

    Query with CLI command::

        kappa run PyTorchFashionClassifier:latest predict --input-file test.jpg

    OR infer all images under a folder with ten images each batch::

        kappa run PyTorchFashionClassifier:latest predict \\
          --input-file folder/*.jpg --max-batch-size 10
    """

    def __init__(
        self, accept_image_formats=None, **base_kwargs,
    ):
        assert cv2, "`cv2` dependency can be imported"

        super().__init__(**base_kwargs)
        if 'input_names' in base_kwargs:
            raise TypeError(
                "ImageInputCV2 doesn't take input_names as parameters since kappa 0.8."
                "Update your Service definition "
                "or use MultiImageInput instead."
            )

        self.accept_image_formats = set(
            accept_image_formats or get_default_accept_image_formats()
        )

    @property
    def config(self):
        return {
            # Converting to list, google.protobuf.Struct does not work with tuple type
            "accept_image_formats": list(self.accept_image_formats),
        }

    @property
    def request_schema(self):
        return {
            "image/*": {"schema": {"type": "string", "format": "binary"}},
            "multipart/form-data": {
                "schema": {
                    "type": "object",
                    "properties": {
                        "image_file": {"type": "string", "format": "binary"}
                    },
                }
            },
        }

    @property
    def pip_dependencies(self):
        return ["cv2"]

    def extract_user_func_args(
        self, tasks: Iterable[InferenceTask[BinaryIO]]
    ) -> ApiFuncArgs:
        img_list = []
        for task in tasks:
            if getattr(task.data, "name", None) and not check_file_extension(
                task.data.name, self.accept_image_formats
            ):
                task.discard(
                    http_status=400,
                    err_msg=f"Current service only accepts "
                    f"{self.accept_image_formats} formats",
                )
                continue
            try:
                data = numpy.asarray(bytearray(task.data.read()), dtype=numpy.uint8)
                img_list.append(data)
            except ValueError as e:
                task.discard(http_status=400, err_msg=str(e))

        return (img_list,)
