import kappa
from kappa.adapters import DataframeInput, ImageInput, JsonInput, MultiImageInput
from kappa.handlers import DataframeHandler  # deprecated
from kappa.service.artifacts.pickle import PickleArtifact


@kappa.artifacts([PickleArtifact("model")])
@kappa.env(infer_pip_packages=True)
class ExampleMyModel(kappa.MyModel):
    """
    Example MyModel class made for testing purpose
    """

    @kappa.api(
        input=DataframeInput(), mb_max_latency=1000, mb_max_batch_size=2000, batch=True
    )
    def predict(self, df):
        """An API for testing simple bento model service
        """
        return self.artifacts.model.predict(df)

    @kappa.api(input=DataframeInput(dtype={"col1": "int"}), batch=True)
    def predict_dataframe(self, df):
        """predict_dataframe expects dataframe as input
        """
        return self.artifacts.model.predict_dataframe(df)

    @kappa.api(DataframeHandler, dtype={"col1": "int"}, batch=True)  # deprecated
    def predict_dataframe_v1(self, df):
        """predict_dataframe expects dataframe as input
        """
        return self.artifacts.model.predict_dataframe(df)

    @kappa.api(input=ImageInput(), batch=True)
    def predict_image(self, images):
        return self.artifacts.model.predict_image(images)

    @kappa.api(input=MultiImageInput(input_names=('original', 'compared')), batch=False)
    def predict_multi_images(self, original, compared):
        return self.artifacts.model.predict_multi_images(original, compared)

    @kappa.api(input=JsonInput(), batch=True)
    def predict_json(self, input_data):
        return self.artifacts.model.predict_json(input_data)

    CUSTOM_ROUTE = "$~!@%^&*()_-+=[]\\|;:,./predict"

    @kappa.api(
        route=CUSTOM_ROUTE, input=JsonInput(), batch=True,
    )
    def customize_route(self, input_data):
        return input_data
