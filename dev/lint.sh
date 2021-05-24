#!/usr/bin/env bash

GIT_ROOT=$(git rev-parse --show-toplevel)
cd "$GIT_ROOT" || exit

echo "Running flake8 on kappa module.."
flake8 --config=.flake8 kappa

echo "Running flake8 on test module.."
flake8 --config=.flake8 tests e2e_tests

echo "Running pylint on kappa module.."
pylint --rcfile="./pylintrc" kappa

echo "Running pylint on test module.."
pylint --rcfile="./pylintrc" tests e2e_tests

echo "Done"
