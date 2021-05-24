import json
import pathlib
import sys
import time

import kappa
from kappa.adapters import FileInput, ImageInput, JsonInput, MultiImageInput
from kappa.frameworks.sklearn import SklearnModelArtifact
from kappa.service.artifacts.pickle import PickleArtifact
from kappa.types import InferenceError, InferenceResult, InferenceTask


# pylint: disable=arguments-differ
@kappa.env(infer_pip_packages=True)
@kappa.artifacts([PickleArtifact("model"), SklearnModelArtifact('sk_model')])
class NonBatchExampleService(kappa.MyModel):
    """
    Example MyModel class made for testing purpose
    """

    @kappa.api(
        input=MultiImageInput(input_names=('original', 'compared')), batch=False
    )
    def predict_multi_images(self, original, compared):
        return self.artifacts.model.predict_multi_images([original], [compared])[0]

    @kappa.api(input=ImageInput(), batch=False)
    def predict_image(self, image):
        return self.artifacts.model.predict_image([image])[0]

    @kappa.api(
        input=JsonInput(), mb_max_latency=1000, mb_max_batch_size=2000, batch=False
    )
    def predict_with_sklearn(self, json_value):
        return self.artifacts.sk_model.predict([json_value])[0]

    @kappa.api(input=FileInput(), batch=False)
    def predict_file(self, file_):
        return self.artifacts.model.predict_file([file_])[0]

    @kappa.api(input=JsonInput(), batch=False)
    def predict_json(self, input_data):
        return self.artifacts.model.predict_json([input_data])[0]

    @kappa.api(input=JsonInput(), batch=False)
    def predict_strict_json(self, input_data, task: InferenceTask = None):
        if task.http_headers.content_type != "application/json":
            task.discard(http_status=400, err_msg="application/json only")
            return
        result = self.artifacts.model.predict_json([input_data])[0]
        return result

    @kappa.api(input=JsonInput(), batch=False)
    def predict_direct_json(self, input_data, task: InferenceTask = None):
        if task.http_headers.content_type != "application/json":
            return InferenceError(http_status=400, err_msg="application/json only")
        result = self.artifacts.model.predict_json([input_data])[0]
        return InferenceResult(http_status=200, data=json.dumps(result))

    @kappa.api(input=JsonInput(), mb_max_latency=10000 * 1000, batch=True)
    def echo_with_delay(self, input_datas):
        data = input_datas[0]
        time.sleep(data['b'] + data['a'] * len(input_datas))
        return input_datas


if __name__ == "__main__":
    artifacts_path = sys.argv[1]
    bento_dist_path = sys.argv[2]
    service = NonBatchExampleService()
    service.artifacts.load_all(artifacts_path)

    pathlib.Path(bento_dist_path).mkdir(parents=True, exist_ok=True)
    service.save_to_dir(bento_dist_path)
