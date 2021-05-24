set -x

# Set err to 1 if pytest failed.
error=0
trap 'error=1' ERR

GIT_ROOT=$(git rev-parse --show-toplevel)

cd "$GIT_ROOT" || exit

python -m pip uninstall kappa -y
python -m pip install kappa
mkdir tempdir
cd tempdir
export BUNDLE_BENTOML_VERSION=$(python -c "import kappa;print(kappa.__version__)")

# Run test
PROJECT_PATH="$GIT_ROOT/tests/integration/projects/general"
BUILD_PATH="$PROJECT_PATH/build"
python "$PROJECT_PATH/model/model.py" "$BUILD_PATH/artifacts"
python "$PROJECT_PATH/service.py" "$BUILD_PATH/artifacts" "$BUILD_PATH/dist"

PROJECT_PATH="$GIT_ROOT/tests/integration/projects/general_non_batch"
BUILD_PATH="$PROJECT_PATH/build"
python "$PROJECT_PATH/model/model.py" "$BUILD_PATH/artifacts"
python "$PROJECT_PATH/service.py" "$BUILD_PATH/artifacts" "$BUILD_PATH/dist"

cd "$GIT_ROOT"
python -m pip uninstall kappa -y
python -m pip install --editable .

PROJECT_PATH="$GIT_ROOT/tests/integration/projects/general"
BUILD_PATH="$PROJECT_PATH/build"
python -m pytest -s "$PROJECT_PATH" --bento-dist "$BUILD_PATH/dist"
rm -r $BUILD_PATH

PROJECT_PATH="$GIT_ROOT/tests/integration/projects/general_non_batch"
BUILD_PATH="$PROJECT_PATH/build"
python -m pytest -s "$PROJECT_PATH" --bento-dist "$BUILD_PATH/dist"
rm -r $BUILD_PATH

test $error = 0 # Return non-zero if pytest failed
