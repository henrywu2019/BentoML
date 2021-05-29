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

import os
import logging
from functools import lru_cache

from kappa import __version__, _version as version_mod


# Note this file is loaded prior to logging being configured, thus logger is only
# used within functions in this file
logger = logging.getLogger(__name__)


DEBUG_ENV_VAR = "BENTOML_DEBUG"


def expand_env_var(env_var):
    """Expands potentially nested env var by repeatedly applying `expandvars` and
    `expanduser` until interpolation stops having any effect.
    """
    if not env_var:
        return env_var
    while True:
        interpolated = os.path.expanduser(os.path.expandvars(str(env_var)))
        if interpolated == env_var:
            return interpolated
        else:
            env_var = interpolated


# This is used as default for config('core', 'kappa_deploy_version') - which is used
# for getting the Kappa PyPI version string or the URL to a Kappa sdist, indicating
# the Kappa module to be used when loading and using a saved MyModel.
# This is useful when using customized Kappa fork/branch or when working with
# development branches of Kappa
BENTOML_VERSION = __version__
# e.g. from '0.4.2+5.g6cac97f.dirty' to '0.4.2'
LAST_PYPI_RELEASE_VERSION = __version__.split('+')[0]


def _is_pip_installed_kappa():
    is_installed_package = hasattr(version_mod, 'version_json')
    is_tagged = not __version__.startswith('0+untagged')
    is_clean = not version_mod.get_versions()['dirty']
    return is_installed_package and is_tagged and is_clean


def get_local_config_file():
    if "BENTOML_CONFIG" in os.environ:
        # User local config file for customizing kappa
        return expand_env_var(os.environ.get("BENTOML_CONFIG"))
    return None


@lru_cache(maxsize=1)
def get_kappa_deploy_version(kappa_deploy_version: str):
    """
    Kappa version to use for generated docker image or serverless function bundle to
    be deployed, this can be changed to an url to your fork of Kappa on github, or an
    url to your custom Kappa build, for example:

    kappa_deploy_version = git+https://github.com/{username}/kappa.git@{branch}
    """

    if kappa_deploy_version != LAST_PYPI_RELEASE_VERSION:
        logger.info(f"Setting Kappa deploy version to '{kappa_deploy_version}'")

    if LAST_PYPI_RELEASE_VERSION != BENTOML_VERSION:
        if _is_pip_installed_kappa():
            logger.warning(
                "Using Kappa not from official PyPI release. In order to find the "
                "same version of Kappa when deploying your MyModel, you must "
                "set the 'core/kappa_deploy_version' config to a http/git location "
                "of your Kappa fork, e.g.: 'kappa_deploy_version = "
                "git+https://github.com/{username}/kappa.git@{branch}'"
            )
        else:
            logger.warning(
                "Using Kappa installed in `editable` model, the local Kappa "
                "repository including all code changes will be packaged together with "
                "saved bundle created, under the './bundled_pip_dependencies' "
                "directory of the saved bundle."
            )
    return kappa_deploy_version


def set_debug_mode(enabled: bool):
    os.environ[DEBUG_ENV_VAR] = str(enabled)

    # reconfigure logging
    from kappa.utils.log import configure_logging

    configure_logging()

    logger.debug(
        f"Setting debug mode: {'ON' if enabled else 'OFF'} for current session"
    )


def get_debug_mode():
    if DEBUG_ENV_VAR in os.environ:
        return os.environ[DEBUG_ENV_VAR].lower() == "true"
    return False


def inject_dependencies():
    """Inject dependencies and configuration to Kappa packages"""

    from timeit import default_timer as timer

    start = timer()

    logger.warning("Start dependency injection")

    from kappa.configuration.containers import BentoMLContainer, BentoMLConfiguration

    config_file = get_local_config_file()
    if config_file and config_file.endswith(".yml"):
        configuration = BentoMLConfiguration(override_config_file=config_file)
    else:
        configuration = BentoMLConfiguration()

    container = BentoMLContainer()
    container.config.from_dict(configuration.as_dict())

    from kappa import (
        marshal,
        server,
        tracing,
        cli,
        adapters,
        saved_bundle,
        service,
    )
    from kappa.gamma import gamma_service
    from kappa.gamma import gamma_service_impl
    from kappa.gamma.repository import s3_repository, gcs_repository, oci_repository

    container.wire(
        modules=[
            gamma_service,
            s3_repository,
            gcs_repository,
            oci_repository,
            gamma_service_impl,
        ],
        packages=[marshal, server, tracing, cli, adapters, saved_bundle, service],
    )

    end = timer()

    logger.debug("Dependency injection completed in %.3f seconds", end - start)
