set -x

# Set err to 1 if pytest failed.
error=0
trap 'error=1' ERR

GIT_ROOT=$(git rev-parse --show-toplevel)

cd "$GIT_ROOT" || exit

python -m pip install -e .

# Install Gamma dependencies
pip install psycopg2 psycopg2-binary

# Run Gamma server tests
python -m pytest -s "$GIT_ROOT"/tests/integration/gamma_server/test_local_fs.py
python -m pytest -s "$GIT_ROOT"/tests/integration/gamma_server/test_containerize.py

test $error = 0 # Return non-zero if pytest failed
