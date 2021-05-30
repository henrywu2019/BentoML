#!/usr/bin/env bash
set -e

if [ "$#" -eq 1 ]; then
  KAPPA_VERSION=$1
else
  echo "Must provide target Kappa version, e.g. ./script/release_gamma_service_docker_image.sh 0.7.0"
  exit 1
fi

GIT_ROOT=$(git rev-parse --show-toplevel)
cd "$GIT_ROOT"

./docker/gamma-service/release.sh "$KAPPA_VERSION"
./docker/model-server/release.sh "$KAPPA_VERSION"
./docker/azure-functions/release.sh "$KAPPA_VERSION"
