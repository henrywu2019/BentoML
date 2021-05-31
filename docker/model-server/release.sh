#!/usr/bin/env bash
set -ex

if [ "$#" -eq 1 ]; then
  KAPPA_VERSION=$1
else
  echo "Must provide target Kappa version, e.g. ./release.sh 0.7.0"
  exit 1
fi

GIT_ROOT=$(git rev-parse --show-toplevel)
cd "$GIT_ROOT"/docker/model-server

PYTHON_MAJOR_VERSIONS=(3.6 3.7 3.8 3.9)
#which version to tag with latest tag
PYTHON_LATEST_VERSION=3.9


docker login -u 'bmc_operator_access/fuhwu' iad.ocir.io -p $OCASTESTTOKEN

echo "Building debian based docker base images for ${PYTHON_MAJOR_VERSIONS[*]}"
for version in "${PYTHON_MAJOR_VERSIONS[@]}"
do
    echo "Releasing debian based docker base image for Python $version .."
    docker build --pull \
        --build-arg KAPPA_VERSION="$KAPPA_VERSION" \
        --build-arg PYTHON_VERSION="$version" \
        -t iad.ocir.io/axhheqi2ofpb/kappa/model-server:"$KAPPA_VERSION"-py"${version//.}" \
        -t iad.ocir.io/axhheqi2ofpb/kappa/model-server:latest-py"${version//.}" \
        .

    docker push iad.ocir.io/axhheqi2ofpb/kappa/model-server:"$KAPPA_VERSION"-py"${version//.}"
    docker push iad.ocir.io/axhheqi2ofpb/kappa/model-server:latest-py"${version//.}"

done

# tag the default version as both latest and unspecified python version
docker tag iad.ocir.io/axhheqi2ofpb/kappa/model-server:latest-py${PYTHON_LATEST_VERSION//.} iad.ocir.io/axhheqi2ofpb/kappa/model-server:latest
docker push iad.ocir.io/axhheqi2ofpb/kappa/model-server:latest

docker tag iad.ocir.io/axhheqi2ofpb/kappa/model-server:$KAPPA_VERSION-py${PYTHON_LATEST_VERSION//.} iad.ocir.io/axhheqi2ofpb/kappa/model-server:$KAPPA_VERSION
docker push iad.ocir.io/axhheqi2ofpb/kappa/model-server:$KAPPA_VERSION

echo "Building slim docker base images for ${PYTHON_MAJOR_VERSIONS[*]}"
for version in "${PYTHON_MAJOR_VERSIONS[@]}"
do
    echo "Releasing slim docker base image for Python $version.."
    docker build --pull \
    --build-arg KAPPA_VERSION=$KAPPA_VERSION \
    --build-arg PYTHON_VERSION=$version \
    -t iad.ocir.io/axhheqi2ofpb/kappa/model-server:$KAPPA_VERSION-slim-py${version//.} \
    -t iad.ocir.io/axhheqi2ofpb/kappa/model-server:latest-slim-py${version//.} \
    -f Dockerfile-slim \
    --network=host \
    .

    docker push iad.ocir.io/axhheqi2ofpb/kappa/model-server:$KAPPA_VERSION-slim-py${version//.}
    docker push iad.ocir.io/axhheqi2ofpb/kappa/model-server:latest-slim-py${version//.}

done
echo "Done"
