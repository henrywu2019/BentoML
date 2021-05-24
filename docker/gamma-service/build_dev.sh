#!/usr/bin/env bash
set -e

GIT_ROOT=$(git rev-parse --show-toplevel)

if [[ "$(docker images -q kappa/gamma-service:dev 2> /dev/null)" != "" ]]; then
  echo "There is no need to rebuild gamma dev docker image. Kappa is installed in editable mode in
  this docker image and local git repo is mounted in the Gamma dev container started with
  'start_dev.sh' script. To try out new changes in Gamma server, simply re-run 'start_dev.sh'
  script."
  echo "To rebuild the gamma server dev image, run 'docker rmi kappa/gamma-service:dev' and run this script again."
  exit 0
fi

docker build -t kappa/gamma-service:dev -f- $GIT_ROOT <<EOF
FROM kappa/gamma-service:latest
WORKDIR /usr/local/kappa-dev
COPY . .
RUN npm install --global yarn && make install-web-deps && make build-gamma-web-ui
RUN pip install -U -e /usr/local/kappa-dev
EOF
