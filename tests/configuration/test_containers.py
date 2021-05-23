import pytest
import tempfile
import os

from bentoml.configuration.containers import BentoMLConfiguration, BentoMLContainer
from bentoml.exceptions import BentoMLConfigException


def test_override():
    config = BentoMLConfiguration()
    config.override(["bento_server", "port"], 6000)
    config_dict = config.as_dict()
    assert config_dict is not None
    assert config_dict["bento_server"]["port"] == 6000


def test_override_schema_violation():
    config = BentoMLConfiguration()
    with pytest.raises(BentoMLConfigException) as e:
        config.override(["api_server", "port"], "non-integer")
    assert e is not None


def test_override_nonexist_key():
    config = BentoMLConfiguration()
    with pytest.raises(BentoMLConfigException) as e:
        config.override(["non-existent", "non-existent"], 6000)
    assert e is not None


def test_override_none_value():
    config = BentoMLConfiguration()
    config.override(["bento_server", "port"], None)
    config_dict = config.as_dict()
    assert config_dict is not None
    assert config_dict["bento_server"]["port"] == 5000


def test_override_none_key():
    config = BentoMLConfiguration()
    with pytest.raises(BentoMLConfigException) as e:
        config.override(None, 6000)
    assert e is not None


def test_override_empty_key():
    config = BentoMLConfiguration()
    with pytest.raises(BentoMLConfigException) as e:
        config.override([], 6000)
    assert e is not None


def test_validate_schema():
    config = tempfile.NamedTemporaryFile(delete=False)
    config.write(
        b"""
invalid_key1:
  invalid_key2: Null
"""
    )
    config.close()

    with pytest.raises(BentoMLConfigException) as e:
        BentoMLConfiguration(
            default_config_file=config.name, validate_schema=True,
        )

    assert e is not None
    os.remove(config.name)


def test_api_server_workers():
    container = BentoMLContainer()

    config_auto_workers = tempfile.NamedTemporaryFile(delete=False)
    config_auto_workers.write(
        b"""
bento_server:
  workers: Null
"""
    )
    config_auto_workers.close()

    container.config.from_dict(
        BentoMLConfiguration(
            default_config_file=config_auto_workers.name, validate_schema=False,
        ).as_dict(),
    )
    os.remove(config_auto_workers.name)
    workers = container.api_server_workers()
    assert workers is not None
    assert workers > 0

    config_manual_workers = tempfile.NamedTemporaryFile(delete=False)
    config_manual_workers.write(
        b"""
bento_server:
  workers: 42
"""
    )
    config_manual_workers.close()

    container.config.from_dict(
        BentoMLConfiguration(
            default_config_file=config_manual_workers.name, validate_schema=False,
        ).as_dict(),
    )
    os.remove(config_manual_workers.name)
    workers = container.api_server_workers()
    assert workers is not None
    assert workers == 42


def test_config_file_override():
    default_config_file = tempfile.NamedTemporaryFile(delete=False)
    default_config_file.write(
        b"""
key1:
  key2:
    key3: value3
    key4: value4
    key5: value5
"""
    )
    default_config_file.close()

    override_config_file = tempfile.NamedTemporaryFile(delete=False)
    override_config_file.write(
        b"""
key1:
  key2:
    key3: override3
    key5: override5
"""
    )
    override_config_file.close()

    config = BentoMLConfiguration(
        default_config_file=default_config_file.name,
        override_config_file=override_config_file.name,
        validate_schema=False,
    ).as_dict()

    os.remove(default_config_file.name)
    os.remove(override_config_file.name)
    print(default_config_file.name)

    assert config is not None
    assert config["key1"] is not None
    assert config["key1"]["key2"] is not None
    assert config["key1"]["key2"]["key3"] == "override3"
    assert config["key1"]["key2"]["key4"] == "value4"
    assert config["key1"]["key2"]["key5"] == "override5"


def mock_bentoml_home():
    return os.path.expanduser(os.path.join("~", "bentoml"))


def test_bentoml_home():
    container = BentoMLContainer()
    assert container.bentoml_home() == mock_bentoml_home()

    os.environ["BENTOML_HOME"] = "/tmp/bentoml"
    assert container.bentoml_home() == "/tmp/bentoml"

    del os.environ["BENTOML_HOME"]


def test_prometheus_multiproc_dir():
    container = BentoMLContainer()
    config = BentoMLConfiguration().as_dict()
    container.config.from_dict(config)

    assert container.prometheus_multiproc_dir() == os.path.join(
        mock_bentoml_home(), "prometheus_multiproc_dir"
    )


def test_default_bento_bundle_deployment_version():
    container = BentoMLContainer()
    config = BentoMLConfiguration().as_dict()
    container.config.from_dict(config)

    assert container.bento_bundle_deployment_version() is not None


def test_customized_bento_bundle_deployment_version():
    override_config = tempfile.NamedTemporaryFile(delete=False)
    override_config.write(
        b"""
bento_bundle:
  deployment_version: 0.0.1
"""
    )
    override_config.close()

    container = BentoMLContainer()
    config = BentoMLConfiguration(override_config_file=override_config.name).as_dict()
    container.config.from_dict(config)

    assert container.bento_bundle_deployment_version() == "0.0.1"
    os.remove(override_config.name)


def test_yatai_database_url():
    container = BentoMLContainer()
    config = BentoMLConfiguration().as_dict()
    container.config.from_dict(config)

    assert container.yatai_database_url() == "{}:///{}".format(
        "sqlite", os.path.join(mock_bentoml_home(), "storage.db")
    )

    override_config = tempfile.NamedTemporaryFile(delete=False)
    override_config.write(
        b"""
gamma:
  database:
    url: customized_url
"""
    )
    override_config.close()

    config = BentoMLConfiguration(override_config_file=override_config.name).as_dict()
    container.config.from_dict(config)

    assert container.yatai_database_url() == "customized_url"

    os.remove(override_config.name)


def test_yatai_tls_root_ca_cert():
    container = BentoMLContainer()
    config = BentoMLConfiguration().as_dict()
    container.config.from_dict(config)

    assert container.yatai_tls_root_ca_cert() is None

    override_config = tempfile.NamedTemporaryFile(delete=False)
    override_config.write(
        b"""
gamma:
  remote:
    tls:
      client_certificate_file: value1
"""
    )
    override_config.close()

    config = BentoMLConfiguration(override_config_file=override_config.name).as_dict()
    container.config.from_dict(config)

    assert container.yatai_tls_root_ca_cert() == "value1"

    os.remove(override_config.name)

    override_config = tempfile.NamedTemporaryFile(delete=False)
    override_config.write(
        b"""
gamma:
  remote:
    tls:
      root_ca_cert: value1
      client_certificate_file: value2
"""
    )
    override_config.close()

    config = BentoMLConfiguration(override_config_file=override_config.name).as_dict()
    container.config.from_dict(config)

    assert container.yatai_tls_root_ca_cert() == "value1"

    os.remove(override_config.name)


def test_yatai_logging_path():
    container = BentoMLContainer()
    config = BentoMLConfiguration().as_dict()
    container.config.from_dict(config)

    assert container.yatai_logging_path() == os.path.join(
        mock_bentoml_home(), "logs", "yatai_web_server.log"
    )

    override_config = tempfile.NamedTemporaryFile(delete=False)
    override_config.write(
        b"""
gamma:
  logging:
    path: /tmp/customized.log
"""
    )
    override_config.close()

    config = BentoMLConfiguration(override_config_file=override_config.name).as_dict()
    container.config.from_dict(config)

    assert container.yatai_logging_path() == "/tmp/customized.log"

    os.remove(override_config.name)


def test_logging_file_directory():
    container = BentoMLContainer()
    config = BentoMLConfiguration().as_dict()
    container.config.from_dict(config)

    assert container.logging_file_directory() == os.path.join(
        mock_bentoml_home(), "logs"
    )

    override_config = tempfile.NamedTemporaryFile(delete=False)
    override_config.write(
        b"""
logging:
  file:
    directory: /tmp/logs
"""
    )
    override_config.close()

    config = BentoMLConfiguration(override_config_file=override_config.name).as_dict()
    container.config.from_dict(config)

    assert container.logging_file_directory() == "/tmp/logs"

    os.remove(override_config.name)
