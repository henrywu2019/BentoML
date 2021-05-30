#!/usr/bin/env bash
set -Eeuo pipefail

# check to see if this file is being run or sourced from another script
_is_sourced() {
  # https://unix.stackexchange.com/a/215279
  [ "${#FUNCNAME[@]}" -ge 2 ] \
    && [ "${FUNCNAME[0]}" = '_is_sourced' ] \
    && [ "${FUNCNAME[1]}" = 'source' ]
}

_main() {
  # if first arg looks like a flag, assume we want to start kappa GammaService
  if [ "${1:0:1}" = '-' ]; then
    set -- kappa serve-gunicorn "$@" /bento
  fi

  if [ -n "${PORT:-}" ]; then
    # Set Kappa API server port via env var
    export KAPPA_PORT=$PORT \
    # Backward compatibility for Kappa prior to 0.7.5
    export KAPPA__APISERVER__DEFAULT_PORT=$PORT
  fi

  exec "$@"
}

if ! _is_sourced; then
  _main "$@"
fi
