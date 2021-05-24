#!/usr/bin/env bash

latest_version=$(kappa get -q IrisClassifier:latest | jq -r '.bentoServiceMetadata.version')
kappa lambda deploy iris-classifier-dev -b IrisClassifier:"$latest_version"
