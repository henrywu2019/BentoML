## Install Kappa from source

Ensure you have git, python and pip installed, Kappa supports python 3.6, 3.7, and 3.8

```bash
$ python --version
```

```bash
$ pip --version
```


Download the source code from Kappa's Github repository:
```bash
$ git clone https://github.com/kappa/Kappa.git
$ cd Kappa
```

Install Kappa with pip in `editable` mode:
```
pip install --editable .
```

This will make `kappa` available on your system which links to the sources of
your local clone and pick up changes you made locally.

Test the Kappa installation:
```bash
$ kappa --version
```
```python
import kappa
print(kappa.__version__)
```

#### Install Kappa from other forks or branches

The `pip` command support installing directly from remote git repository. This makes it
easy to try out new Kappa feature that has not been released, test changes in a pull 
request. For example, to install Kappa from its master branch:

```
pip install git+https://github.com/kappa/Kappa.git
```

Or to install from your own fork of Kappa:
```
pip install git+https://github.com/{your_github_username}/Kappa.git
```

You can also specify what branch to install from:
```
pip install git+https://github.com/{your_github_username}/Kappa.git@{branch_name}
```



## How to run unit tests

1. Install all test dependencies:
```
$ pip install -e ".[test]"
```

2. Run all unit tests with current python version and environment
```bash
$ ./ci/unit_tests.sh
```

## Optional: Run unit test with all supported python versions

Make sure you [have conda installed](https://docs.conda.io/projects/conda/en/latest/user-guide/install/):
```bash
$ conda --version
```

kappa tox file is configured to run in muiltple python versions:
```bash
$ tox
```

If you want to run tests under conda for specific version, use `-e` option:
```bash
$ tox -e py37
// or
$ tox -e py36
```

## Run Kappa with verbose/debug logging

Add the following lines to the Python code that invokes Kappa:

```python
from kappa.configuration import set_debug_mode
set_debug_mode(True)
```

And/or set the `KAPPA_DEBUG` environment variable to `TRUE`:
```bash
export KAPPA_DEBUG=TRUE
```

And/or use the `--verbose` option when running `kappa` CLI command, e.g.:
```bash
kappa get IrisClassifier --verbose
```

## Style check and auto-formatting your code

Make sure to install all dev dependencies:
```bash
$ pip install -e ".[dev]"
```

Run linter/format script:
```bash
./dev/format.sh

./dev/lint.sh
```

## How to edit, run, build documentation site

Install all dev dependencies:
```bash
$ pip install -e ".[dev]"
```

To build documentation for locally:
```bash
$ ./docs/build.sh
```

Modify \*.rst files inside the `docs` folder to update content, and to
view your changes, run the following command:

```
$ python -m http.server --directory ./docs/build/html
```

And go to your browser at `http://localhost:8000`

If you are developing under macOS or linux, we also made a script that watches docs
file changes, automatically rebuild the docs, and refreshes the browser
tab to show the change (macOS only):

## How to run spell check for documentation site

Install all dev dependencies:
```bash
$ pip install -e ".[dev]"
```

Install spellchecker dependencies:
```
$ make install-spellchecker-deps
```

To run spellchecker locally:
```bash
$ make spellcheck-doc
```


### macOS

Make sure you have fswatch command installed:
```
brew install fswatch
```

Run the `watch.sh` script to start watching docs changes:
```
$ ./docs/watch.sh
```

### Linux
Make sure you have `inotifywait` installed
```shell script
sudo apt install inotify-tools
``` 

Run the `watch.sh` script to start watching docs changes:
```
$ ./docs/watch.sh
```

## How to debug GammaService GRPC server

Install all dev dependencies:
```bash
$ pip install -e ".[dev]"
```

Install grpcui:
```bash
$ go get github.com/fullstorydev/grpcui
$ go install github.com/fullstorydev/grpcui/cmd/grpcui
```

Start Gamma server in debug mode:
```bash
$ kappa gamma-service-start --debug
```

In another terminal session run grpcui:
```bash
$ grpcui -plain text localhost:50051

gRPC Web UI available at http://0.0.0.0:60551/...
```
Navigate to the URL from above


## How to run and develop Kappa Web UI

Make sure you have `yarn` installed: https://classic.yarnpkg.com/en/docs/install 

Install all npm packages required by Kappa Web UI:

```bash
# install npm packages required by Kappa's Node.js Web Server
cd {PROJECT_ROOT}/kappa/gamma/web/
yarn

# install npm packages required by Kappa web frontend
cd {PROJECT_ROOT}/kappa/gamma/web/client/
yarn
```

Build the Web Server and frontend UI code:
```bash
cd {PROJECT_ROOT}/kappa/gamma/web/
npm run build
```


## Creating Pull Request on Github


1. [Fork Kappa project](https://github.com/kappa/Kappa/fork) on github and
add upstream to local Kappa clone:

```bash
$ git remote add upstream git@github.com:YOUR_USER_NAME/Kappa.git
```

2. Make the changes either to fix a known issue or adding new feature

3. Push changes to your fork and follow [this
   article](https://help.github.com/en/articles/creating-a-pull-request)
   on how to create a pull request on github

4. Once your pull request created, an automated test run will be triggered on
   your branch and the Kappa authors will be notified to review your code
   changes. Once tests are passed and reviewer has signed off, we will merge
   your pull request.
