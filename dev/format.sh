#!/usr/bin/env bash

GIT_ROOT=$(git rev-parse --show-toplevel)
# format gamma webui
WEB_UI_DIR=$GIT_ROOT/bentoml/gamma/web

black -S "$GIT_ROOT"

cd "$WEB_UI_DIR" && yarn format
