#!/usr/bin/env bash
set -e

GIT_ROOT=$(git rev-parse --show-toplevel)

if [[ "$(docker images -q kappa/gamma-service:dev 2> /dev/null)" == "" ]]; then
  source $GIT_ROOT/docker/gamma-service/build_dev.sh
fi

if [[ "$(docker ps -a -q --filter ancestor=kappa/gamma-service:dev 2> /dev/null)" != "" ]]; then
  docker stop $(docker ps -a -q --filter ancestor=kappa/gamma-service:dev)
fi

docker run \
  --rm \
  --label gamma-dev \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v $GIT_ROOT:/usr/local/kappa-dev \
  -v ~/kappa:/kappa \
  -p 3000:3000 \
  -p 50051:50051 \
  -e KAPPA_HOME=/kappa \
  kappa/gamma-service:dev "$@"
