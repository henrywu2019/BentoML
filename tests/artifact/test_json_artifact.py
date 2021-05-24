import kappa
from kappa.service.artifacts.json_file import JSONArtifact


@kappa.artifacts([JSONArtifact("hparams")])
class ExampleServiceWithJSONArtifact(kappa.MyModel):
    pass


def test_json_artifact_simple_service_round_trip(tmp_path):
    service = ExampleServiceWithJSONArtifact()
    # 'hparams' = hyperparameters used at training time.
    hparams = {"lr": 1e-3, "patience": 10, "decay": 0.1, "batch_size": 16}
    service.pack("hparams", hparams)
    service.save_to_dir(str(tmp_path))
    del service
    new_service = kappa.load(str(tmp_path))
    assert new_service.artifacts.hparams == hparams
