import logging

from kappa.utils.log import configure_logging


def test_configure_logging_default():
    configure_logging()

    kappa_logger = logging.getLogger("kappa")
    assert kappa_logger.level == logging.INFO
    assert kappa_logger.propagate is False
    assert len(kappa_logger.handlers) == 2
    assert kappa_logger.handlers[0].name == "console"
    assert kappa_logger.handlers[1].name == "local"

    prediction_logger = logging.getLogger("kappa.prediction")
    assert prediction_logger.level == logging.INFO
    assert prediction_logger.propagate is False
    assert len(prediction_logger.handlers) == 2
    assert prediction_logger.handlers[0].name == "console"
    assert prediction_logger.handlers[1].name == "prediction"

    feedback_logger = logging.getLogger("kappa.feedback")
    assert feedback_logger.level == logging.INFO
    assert feedback_logger.propagate is False
    assert len(feedback_logger.handlers) == 2
    assert feedback_logger.handlers[0].name == "console"
    assert feedback_logger.handlers[1].name == "feedback"


def test_configure_logging_custom_level():
    configure_logging(logging_level=logging.ERROR)

    kappa_logger = logging.getLogger("kappa")
    assert kappa_logger.level == logging.ERROR
    assert kappa_logger.propagate is False
    assert len(kappa_logger.handlers) == 2
    assert kappa_logger.handlers[0].name == "console"
    assert kappa_logger.handlers[1].name == "local"

    prediction_logger = logging.getLogger("kappa.prediction")
    assert prediction_logger.level == logging.INFO
    assert prediction_logger.propagate is False
    assert len(prediction_logger.handlers) == 2
    assert prediction_logger.handlers[0].name == "console"
    assert prediction_logger.handlers[1].name == "prediction"

    feedback_logger = logging.getLogger("kappa.feedback")
    assert feedback_logger.level == logging.INFO
    assert feedback_logger.propagate is False
    assert len(feedback_logger.handlers) == 2
    assert feedback_logger.handlers[0].name == "console"
    assert feedback_logger.handlers[1].name == "feedback"


def test_configure_logging_console_disabled():
    configure_logging(console_logging_enabled=False)

    kappa_logger = logging.getLogger("kappa")
    assert kappa_logger.level == logging.INFO
    assert kappa_logger.propagate is False
    assert len(kappa_logger.handlers) == 1
    assert kappa_logger.handlers[0].name == "local"

    prediction_logger = logging.getLogger("kappa.prediction")
    assert prediction_logger.level == logging.INFO
    assert prediction_logger.propagate is False
    assert len(prediction_logger.handlers) == 1
    assert prediction_logger.handlers[0].name == "prediction"

    feedback_logger = logging.getLogger("kappa.feedback")
    assert feedback_logger.level == logging.INFO
    assert feedback_logger.propagate is False
    assert len(feedback_logger.handlers) == 1
    assert feedback_logger.handlers[0].name == "feedback"


def test_configure_logging_file_disabled():
    configure_logging(file_logging_enabled=False)

    kappa_logger = logging.getLogger("kappa")
    assert kappa_logger.level == logging.INFO
    assert kappa_logger.propagate is False
    assert len(kappa_logger.handlers) == 1
    assert kappa_logger.handlers[0].name == "console"

    prediction_logger = logging.getLogger("kappa.prediction")
    assert prediction_logger.level == logging.INFO
    assert prediction_logger.propagate is False
    assert len(prediction_logger.handlers) == 1
    assert prediction_logger.handlers[0].name == "console"

    feedback_logger = logging.getLogger("kappa.feedback")
    assert feedback_logger.level == logging.INFO
    assert feedback_logger.propagate is False
    assert len(feedback_logger.handlers) == 1
    assert feedback_logger.handlers[0].name == "console"


def test_configure_logging_advanced():
    advanced_config = {
        "version": 1,
        "disable_existing_loggers": False,
        "formatters": {
            "test_formatter": {"format": "[%(asctime)s] %(levelname)s - %(message)s"}
        },
        "handlers": {
            "test_handler": {
                "level": "WARN",
                "formatter": "test_formatter",
                "class": "logging.StreamHandler",
                "stream": "ext://sys.stdout",
            }
        },
        "loggers": {
            "test_logger": {
                "handlers": ["test_handler"],
                "level": "WARN",
                "propagate": False,
            }
        },
    }

    configure_logging(advanced_enabled=True, advanced_config=advanced_config)

    kappa_logger = logging.getLogger("test_logger")
    assert kappa_logger.level == logging.WARN
    assert kappa_logger.propagate is False
    assert len(kappa_logger.handlers) == 1
    assert kappa_logger.handlers[0].name == "test_handler"
