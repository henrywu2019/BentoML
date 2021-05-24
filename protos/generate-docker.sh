#!/usr/bin/env bash
set -e

GIT_ROOT=$(git rev-parse --show-toplevel)

echo "Building Kappa proto generator docker image.."
# Avoid using source code directory as docker build context to have a faster build
docker build -t kappa-proto-generator - <<EOF
FROM python:3.7

RUN pip install grpcio-tools~=1.34.0

RUN apt-get update && apt-get install -y nodejs npm
RUN node --version
RUN npm config set strict-ssl false
RUN npm install -g npm@latest
RUN npm install -g protobufjs@6.9.0
EOF

echo "Starting Kappa proto generator docker container.."
docker run --rm -v $GIT_ROOT:/home/kappa kappa-proto-generator \
    bash -c "BENTOML_REPO=/home/kappa /home/kappa/protos/generate.sh"

#docker run --rm -v $GIT_ROOT:/home/kappa kappa-proto-generator -it \
#    bash -c "bash"

