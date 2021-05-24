#!/usr/bin/env bash
set -e

if [ "$#" -eq 1 ]; then
  BENTOML_VERSION=$1
else
  echo "Must provide target Kappa version, e.g. ./release.sh 0.7.0"
  exit 1
fi

GIT_ROOT=$(git rev-parse --show-toplevel)
cd "$GIT_ROOT"/docker/model-server

PYTHON_MAJOR_VERSIONS=(3.6 3.7 3.8)
#which version to tag with latest tag
PYTHON_LATEST_VERSION=3.7


echo "Building debian based docker base images for ${PYTHON_MAJOR_VERSIONS[*]}"
for version in "${PYTHON_MAJOR_VERSIONS[@]}"
do
    echo "Releasing debian based docker base image for Python $version .."
    docker build --pull \
        --build-arg BENTOML_VERSION="$BENTOML_VERSION" \
        --build-arg PYTHON_VERSION="$version" \
        -t kappa/model-server:"$BENTOML_VERSION"-py"${version//.}" \
        -t kappa/model-server:latest-py"${version//.}" \
        .

    docker push kappa/model-server:"$BENTOML_VERSION"-py"${version//.}"
    docker push kappa/model-server:latest-py"${version//.}"

done

# tag the default version as both latest and unspecified python version
docker tag kappa/model-server:latest-py${PYTHON_LATEST_VERSION//.} kappa/model-server:latest
docker push kappa/model-server:latest

docker tag kappa/model-server:$BENTOML_VERSION-py${PYTHON_LATEST_VERSION//.} kappa/model-server:$BENTOML_VERSION
docker push kappa/model-server:$BENTOML_VERSION

echo "Building slim docker base images for ${PYTHON_MAJOR_VERSIONS[*]}"
for version in "${PYTHON_MAJOR_VERSIONS[@]}"
do
    echo "Releasing slim docker base image for Python $version.."
    docker build --pull \
    --build-arg BENTOML_VERSION=$BENTOML_VERSION \
    --build-arg PYTHON_VERSION=$version \
    -t kappa/model-server:$BENTOML_VERSION-slim-py${version//.} \
    -t kappa/model-server:latest-slim-py${version//.} \
    -f Dockerfile-slim \
    --network=host \
    .

    docker push kappa/model-server:$BENTOML_VERSION-slim-py${version//.}
    docker push kappa/model-server:latest-slim-py${version//.}

done
echo "Done"
