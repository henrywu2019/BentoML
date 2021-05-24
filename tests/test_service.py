import pytest

import kappa
from kappa.adapters import DataframeInput, ImageInput
from kappa.exceptions import InvalidArgument
from kappa.service import validate_version_str
from kappa.service.artifacts.pickle import PickleArtifact


def test_custom_api_name():
    # these names should work:
    kappa.api(input=DataframeInput(), api_name="a_valid_name", batch=True)(
        lambda x: x
    )
    kappa.api(input=DataframeInput(), api_name="AValidName", batch=True)(lambda x: x)
    kappa.api(input=DataframeInput(), api_name="_AValidName", batch=True)(lambda x: x)
    kappa.api(input=DataframeInput(), api_name="a_valid_name_123", batch=True)(
        lambda x: x
    )

    with pytest.raises(InvalidArgument) as e:
        kappa.api(input=DataframeInput(), api_name="a invalid name", batch=True)(
            lambda x: x
        )
    assert str(e.value).startswith("Invalid API name")

    with pytest.raises(InvalidArgument) as e:
        kappa.api(input=DataframeInput(), api_name="123_a_invalid_name", batch=True)(
            lambda x: x
        )
    assert str(e.value).startswith("Invalid API name")

    with pytest.raises(InvalidArgument) as e:
        kappa.api(input=DataframeInput(), api_name="a-invalid-name", batch=True)(
            lambda x: x
        )
    assert str(e.value).startswith("Invalid API name")


# noinspection PyUnusedLocal
def test_invalid_artifact_type():
    with pytest.raises(InvalidArgument) as e:

        @kappa.artifacts(["Not A Artifact"])
        class ExampleMyModel(  # pylint: disable=unused-variable
            kappa.MyModel
        ):
            pass

    assert "only accept list of MyModelArtifact" in str(e.value)


# noinspection PyUnusedLocal
def test_duplicated_artifact_name():
    with pytest.raises(InvalidArgument) as e:

        @kappa.artifacts([PickleArtifact("model"), PickleArtifact("model")])
        class ExampleMyModel(  # pylint: disable=unused-variable
            kappa.MyModel
        ):
            pass

    assert "Duplicated artifact name `model` detected" in str(e.value)


# noinspection PyUnusedLocal
def test_invalid_api_input():
    with pytest.raises(InvalidArgument) as e:

        class ExampleMyModel(  # pylint: disable=unused-variable
            kappa.MyModel
        ):
            @kappa.api("Not A InputAdapter")
            def test(self):
                pass

    assert (
        "must be an instance of a class derived from "
        "kappa.adapters.BaseInputAdapter" in str(e.value)
    )


def test_image_input_pip_dependencies():
    class TestImageService(kappa.MyModel):
        @kappa.api(input=ImageInput(), batch=True)
        def test(self, images):
            return images

    service = TestImageService()
    assert 'imageio' in service.env._pip_packages


def test_validate_version_str_fails():
    with pytest.raises(InvalidArgument):
        validate_version_str("44&")

    with pytest.raises(InvalidArgument):
        validate_version_str("44 123")

    with pytest.raises(InvalidArgument):
        validate_version_str("")


def test_validate_version_str_pass():
    validate_version_str("abc_123")
    validate_version_str("1")
    validate_version_str("a_valid_version")
    validate_version_str("AValidVersion")
    validate_version_str("_AValidVersion")
    validate_version_str("1.3.4")
    validate_version_str("1.3.4-g375a71b")
