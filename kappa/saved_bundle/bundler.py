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

import datetime
import glob
import gzip
import importlib
import io
import logging
import os
import shutil
import stat
import tarfile
from urllib.parse import urlparse

import requests

from kappa.configuration import _is_pip_installed_kappa
from kappa.exceptions import KappaException
from kappa.saved_bundle.local_py_modules import (
    copy_local_py_modules,
    copy_zip_import_archives,
)
from kappa.saved_bundle.loader import _is_remote_path
from kappa.saved_bundle.templates import (
    BENTO_SERVICE_BUNDLE_SETUP_PY_TEMPLATE,
    INIT_PY_TEMPLATE,
    MANIFEST_IN_TEMPLATE,
    MODEL_SERVER_DOCKERFILE_CPU,
    MODEL_SERVER_DOCKERFILE_TRITON,
)
from kappa.utils import is_gcs_url, is_s3_url
from kappa.utils.tempdir import TempDirectory
from kappa.utils.usage_stats import track_save
from kappa.saved_bundle.config import SavedBundleConfig
from kappa.saved_bundle.pip_pkg import get_zipmodules, ZIPIMPORT_DIR


DEFAULT_SAVED_BUNDLE_README = """\
# Generated MyModel - {}:{}

This is a ML Service bundle created with Kappa, it is not recommended to edit
code or files contained in this directory. Instead, edit the code that uses Kappa
to create this bundle, and save a new MyModel.

Contact: Henry Fuheng Wu(fuheng.wu@oracle.com)
"""

logger = logging.getLogger(__name__)


def _write_bento_content_to_dir(bento_service, path):
    if not os.path.exists(path):
        raise KappaException("Directory '{}' not found".format(path))

    for artifact in bento_service.artifacts.get_artifact_list():
        if not artifact.packed:
            logger.warning(
                "Missing declared artifact '%s' for MyModel '%s'",
                artifact.name,
                bento_service.name,
            )
    module_base_path = os.path.join(path, bento_service.name)
    try:
        os.mkdir(module_base_path)
    except FileExistsError:
        raise KappaException(
            f"Existing module file found for MyModel {bento_service.name}"
        )

    # write README.md with custom MyModel's docstring if presented
    saved_bundle_readme = DEFAULT_SAVED_BUNDLE_README.format(
        bento_service.name, bento_service.version
    )
    if bento_service.__class__.__doc__:
        saved_bundle_readme += "\n"
        saved_bundle_readme += bento_service.__class__.__doc__.strip()

    with open(os.path.join(path, "README.md"), "w") as f:
        f.write(saved_bundle_readme)

    # save all model artifacts to 'base_path/name/artifacts/' directory
    bento_service.artifacts.save(module_base_path)

    # write conda environment, requirement.txt
    bento_service.env.infer_pip_packages(bento_service)
    bento_service.env.save(path)

    # Copy all local python modules used by the module containing the `bento_service`'s
    # class definition to saved bundle directory
    module_name, module_file = copy_local_py_modules(
        bento_service.__class__.__module__, os.path.join(path, bento_service.name)
    )

    # create __init__.py
    with open(os.path.join(path, bento_service.name, "__init__.py"), "w") as f:
        f.write(
            INIT_PY_TEMPLATE.format(
                service_name=bento_service.name,
                module_name=module_name,
                pypi_package_version=bento_service.version,
            )
        )

    # write setup.py, this make saved MyModel pip installable
    setup_py_content = BENTO_SERVICE_BUNDLE_SETUP_PY_TEMPLATE.format(
        name=bento_service.name,
        pypi_package_version=bento_service.version,
        long_description=saved_bundle_readme,
    )
    with open(os.path.join(path, "setup.py"), "w") as f:
        f.write(setup_py_content)

    with open(os.path.join(path, "MANIFEST.in"), "w") as f:
        f.write(MANIFEST_IN_TEMPLATE.format(service_name=bento_service.name))

    # write Dockerfile
    logger.debug("Using Docker Base Image %s", bento_service._env._docker_base_image)
    with open(os.path.join(path, "Dockerfile"), "w") as f:
        f.write(
            MODEL_SERVER_DOCKERFILE_CPU.format(
                # MODEL_SERVER_DOCKERFILE_TRITON.format(
                docker_base_image=bento_service._env._docker_base_image
            )
        )

    # copy custom web_static_content if enabled
    if bento_service.web_static_content:
        src_web_static_content_dir = os.path.join(
            os.getcwd(), bento_service.web_static_content
        )
        if not os.path.isdir(src_web_static_content_dir):
            raise KappaException(
                f'web_static_content directory {src_web_static_content_dir} not found'
            )
        dest_web_static_content_dir = os.path.join(
            module_base_path, 'web_static_content'
        )
        shutil.copytree(src_web_static_content_dir, dest_web_static_content_dir)

    # Copy docker-entrypoint.sh
    docker_entrypoint_sh_file_src = os.path.join(
        os.path.dirname(__file__), "docker-entrypoint.sh"
    )
    docker_entrypoint_sh_file_dst = os.path.join(path, "docker-entrypoint.sh")
    shutil.copyfile(docker_entrypoint_sh_file_src, docker_entrypoint_sh_file_dst)
    # chmod +x docker-entrypoint.sh
    st = os.stat(docker_entrypoint_sh_file_dst)
    os.chmod(docker_entrypoint_sh_file_dst, st.st_mode | stat.S_IEXEC)

    # copy kappa-init.sh for install targz bundles
    kappa_init_sh_file_src = os.path.join(os.path.dirname(__file__), "kappa-init.sh")
    kappa_init_sh_file_dst = os.path.join(path, "kappa-init.sh")
    shutil.copyfile(kappa_init_sh_file_src, kappa_init_sh_file_dst)
    # chmod +x kappa_init_script file
    st = os.stat(kappa_init_sh_file_dst)
    os.chmod(kappa_init_sh_file_dst, st.st_mode | stat.S_IEXEC)

    # write kappa.yml
    config = SavedBundleConfig(bento_service)
    config["metadata"].update({"module_name": module_name, "module_file": module_file})

    config.write_to_path(path)
    # Also write kappa.yml to module base path to make it accessible
    # as package data after pip installed as a python package
    config.write_to_path(module_base_path)

    bundled_pip_dependencies_path = os.path.join(path, 'bundled_pip_dependencies')
    _bundle_local_kappa_if_installed_from_source(bundled_pip_dependencies_path)
    # delete mtime and sort file in tarballs to normalize the checksums
    for tarball_file_path in glob.glob(
        os.path.join(bundled_pip_dependencies_path, '*.tar.gz')
    ):
        normalize_gztarball(tarball_file_path)


def save_to_dir(bento_service, path, version=None, silent=False):
    """Save given MyModel along with all its artifacts, source code and
    dependencies to target file path, assuming path exist and empty. If target path
    is not empty, this call may override existing files in the given path.

    :param bento_service (kappa.service.MyModel): a Bento Service instance
    :param path (str): Destination of where the bento service will be saved. The
        destination can be local path or remote path. The remote path supports both
        AWS S3('s3://bucket/path') and Google Cloud Storage('gs://bucket/path').
    :param version (str): Override the service version with given version string
    :param silent (boolean): whether to hide the log message showing target save path
    """
    track_save(bento_service)

    from kappa.service import MyModel

    if not isinstance(bento_service, MyModel):
        raise KappaException(
            "save_to_dir only works with instances of custom MyModel class"
        )

    if version is not None:
        # If parameter version provided, set bento_service version
        # Otherwise it will bet set the first time the `version` property get accessed
        bento_service.set_version(version)

    if _is_remote_path(path):
        # If user provided path is an remote location, the bundle will first save to
        # a temporary directory and then upload to the remote location
        logger.info(
            'Saving bento to an remote path. Kappa will first save the bento '
            'to a local temporary directory and then upload to the remote path.'
        )
        with TempDirectory() as temp_dir:
            _write_bento_content_to_dir(bento_service, temp_dir)
            with TempDirectory() as tarfile_dir:
                file_name = f'{bento_service.name}.tar'
                tarfile_path = f'{tarfile_dir}/{file_name}'
                with tarfile.open(tarfile_path, mode="w:gz") as tar:
                    tar.add(temp_dir, arcname=bento_service.name)
                _upload_file_to_remote_path(path, tarfile_path, file_name)
    else:
        _write_bento_content_to_dir(bento_service, path)

    copy_zip_import_archives(
        os.path.join(path, bento_service.name, ZIPIMPORT_DIR),
        bento_service.__class__.__module__,
        list(get_zipmodules().keys()),
        bento_service.env._zipimport_archives or [],
    )

    if not silent:
        logger.info(
            "MyModel '%s:%s' created at: %s",
            bento_service.name,
            bento_service.version,
            path,
        )


def normalize_gztarball(file_path):
    MTIME = datetime.datetime(2000, 1, 1).timestamp()
    tar_io = io.BytesIO()

    with tarfile.open(file_path, "r:gz") as f:
        with tarfile.TarFile("bundle.tar", mode='w', fileobj=tar_io) as nf:
            names = sorted(f.getnames())
            for name in names:
                info = f.getmember(name)
                info.mtime = MTIME
                nf.addfile(info, f.extractfile(name))

    with open(file_path, "wb") as nf:
        with gzip.GzipFile("bundle.tar.gz", mode="w", fileobj=nf, mtime=MTIME) as gf:
            gf.write(tar_io.getvalue())


def _bundle_local_kappa_if_installed_from_source(target_path):
    """
    if kappa is installed in editor mode(pip install -e), this will build a source
    distribution with the local kappa fork and add it to saved MyModel
    path under bundled_pip_dependencies directory
    """

    # Find kappa module path
    (module_location,) = importlib.util.find_spec('kappa').submodule_search_locations

    kappa_setup_py = os.path.abspath(os.path.join(module_location, '..', 'setup.py'))

    # this is for Kappa developer to create MyModel containing custom develop
    # branches of Kappa library, it is True only when Kappa module is installed in
    # development mode via "pip install --editable ."
    if not _is_pip_installed_kappa() and os.path.isfile(kappa_setup_py):
        logger.info(
            "Detected non-PyPI-released Kappa installed, copying local Kappa module"
            "files to target saved bundle path.."
        )

        # Create tmp directory inside kappa module for storing the bundled
        # targz file. Since dist-dir can only be inside of the module directory
        bundle_dir_name = '__kappa_tmp_sdist_build'
        source_dir = os.path.abspath(
            os.path.join(module_location, '..', bundle_dir_name)
        )

        if os.path.isdir(source_dir):
            shutil.rmtree(source_dir, ignore_errors=True)
        os.mkdir(source_dir)

        from setuptools import sandbox

        sandbox.run_setup(
            kappa_setup_py,
            ['-q', 'sdist', '--format', 'gztar', '--dist-dir', bundle_dir_name],
        )

        # copy the generated targz to saved bundle directory and remove it from
        # kappa module directory
        shutil.copytree(source_dir, target_path)

        # clean up sdist build files
        shutil.rmtree(source_dir)


def _upload_file_to_remote_path(remote_path, file_path, file_name):
    """Upload file to remote path
    """
    parsed_url = urlparse(remote_path)
    bucket_name = parsed_url.netloc
    object_prefix_path = parsed_url.path.lstrip('/')
    object_path = f'{object_prefix_path}/{file_name}'
    if is_s3_url(remote_path):
        try:
            import boto3
        except ImportError:
            raise KappaException(
                '"boto3" package is required for saving bento to AWS S3 bucket'
            )
        s3_client = boto3.client('s3')
        with open(file_path, 'rb') as f:
            s3_client.upload_fileobj(f, bucket_name, object_path)
    elif is_gcs_url(remote_path):
        try:
            from google.cloud import storage
        except ImportError:
            raise KappaException(
                '"google.cloud" package is required for saving bento to Google '
                'Cloud Storage'
            )
        gcs_client = storage.Client()
        bucket = gcs_client.bucket(bucket_name)
        blob = bucket.blob(object_path)
        blob.upload_from_filename(file_path)
    else:
        http_response = requests.put(remote_path)
        if http_response.status_code != 200:
            raise KappaException(
                f'Error uploading MyModel to {remote_path} '
                f'{http_response.status_code}'
            )
