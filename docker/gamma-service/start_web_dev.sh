#!/usr/bin/env bash
set -e

GIT_ROOT=$(git rev-parse --show-toplevel)

if [[ "$(docker images -q bentoml/gamma-service:dev 2> /dev/null)" == "" ]]; then
  source $GIT_ROOT/docker/gamma-service/build_dev.sh
fi

if [[ "$(docker ps -a -q --filter ancestor=bentoml/gamma-service:dev 2> /dev/null)" != "" ]]; then
  docker stop $(docker ps -a -q --filter ancestor=bentoml/gamma-service:dev)
fi

docker run \
  --rm \
  --label gamma-dev \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v $GIT_ROOT:/usr/local/bentoml-dev \
  -v ~/bentoml:/bentoml \
  -p 3000:3000 \
  -p 50051:50051 \
  -p 8080:8080 \
  -e BENTOML_HOME=/bentoml \
  bentoml/gamma-service:dev make watch-gamma-web-ui
