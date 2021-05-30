#!/usr/bin/env bash
set -e

if [ "$#" -eq 1 ]; then
  KAPPA_VERSION=$1
else
  echo "Must provide target Kappa version, e.g. ./release.sh 0.7.0"
  exit 1
fi


GIT_ROOT=$(git rev-parse --show-toplevel)
cd "$GIT_ROOT"/docker/azure-functions

PYTHON_MAJOR_VERSIONS=(3.6 3.7 3.8)

for version in "${PYTHON_MAJOR_VERSIONS[@]}"
do
    echo "Releasing Kappa docker image for Azure Functions with Python $version.."

    docker build --pull \
        --build-arg KAPPA_VERSION="$KAPPA_VERSION" \
        --build-arg PYTHON_VERSION=$version \
        -t kappa/azure-functions:$KAPPA_VERSION-py${version//.} \
        .
    docker push kappa/azure-functions:$KAPPA_VERSION-py${version//.}
done

echo "Done"
