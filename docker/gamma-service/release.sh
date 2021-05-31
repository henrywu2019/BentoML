#!/usr/bin/env bash
set -e

if [ "$#" -eq 1 ]; then
  KAPPA_VERSION=$1
else
  echo "Must provide target Kappa version, e.g. ./release.sh 0.7.0"
  exit 1
fi


GIT_ROOT=$(git rev-parse --show-toplevel)
cd "$GIT_ROOT"/docker/gamma-service

docker build --pull \
    --build-arg KAPPA_VERSION="$KAPPA_VERSION" \
    -t iad.ocir.io/axhheqi2ofpb/kappa/gamma-service:"$KAPPA_VERSION" \
    -t iad.ocir.io/axhheqi2ofpb/kappa/gamma-service:latest \
    .

docker push iad.ocir.io/axhheqi2ofpb/kappa/gamma-service:"$KAPPA_VERSION"
docker push iad.ocir.io/axhheqi2ofpb/kappa/gamma-service:latest
