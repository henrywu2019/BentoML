.. _core-concepts-page:

Core Concepts
=============

The main idea of Kappa is that the Data Science team should be able to ship their
models in a way that is easy to test, easy to deploy, and easy to integrate with.
And to do so, Data Scientists need tools that help them build and ship prediction
services, instead of uploading pickled model files or Protobuf files to a server and
hoping things work out.

:ref:`kappa.BentoService <kappa-bentoservice-label>` is the base class for building
such prediction services using Kappa. And here's the minimal BentoService example from
the :doc:`Getting Started Guide <quickstart>`:

.. code-block:: python

  import kappa
  from kappa.adapters import DataframeInput
  from kappa.frameworks.sklearn import SklearnModelArtifact

  @kappa.env(infer_pip_packages=True)
  @kappa.artifacts([SklearnModelArtifact('model')])
  class IrisClassifier(kappa.BentoService):

      @kappa.api(input=DataframeInput(), batch=True)
      def predict(self, df):
          return self.artifacts.model.predict(df)


Each BentoService class can contain multiple ML models through the
:code:`@kappa.artifact` decorator. And multiple inference APIs can be defined for
client to access this service. Each inference API requires a input type specified via an
:code:`InputAdapter` instance, which defines the expected input data type and data
format of this API. Kappa provides API input adapters that covers most model serving
use cases including :code:`DataframeInput`, :code:`TfTensorInput`, :code:`ImageInput`
and :code:`JsonInput`. Kappa by default will automatically detect the output type at
runtime based on the return value of the API function, user can also specify an output
type, e.g. :code:`@api(input=DataframeInput(), output=JsonOutput())`.


Once an ML model is trained, a BentoService instance can bundle with the trained model
with the :ref:`BentoService#pack <kappa-bentoservice-pack-label>` method. This trained
model is then accessible within the API function code via 
:code:`self.artifacts.ARTIFACT_NAME`. In the example above, the artifact is initialized
with the name ``"model"``, so the user code can get access to the model via 
:code:`self.artifacts.model`.

The BentoService instance is now ready to be used for
inference. But more importantly, Kappa solves the problem of saving the entire
BentoService to disk, distribute the saved file, and reproduce the exact same prediction
service in testing and production environment.

To save the BentoService instance, simply call the
:ref:`BentoService#save <kappa-bentoservice-save-label>` method. In this process,
Kappa will:

#. Saves the model based on the ML training framework and artifact type used
#. Automatically extracts all the pip dependencies required by your BentoService class and put into a `requirements.txt` file
#. Saves all the local python code dependencies
#. Put all the generated files into one file directory, which, by default, is a location managed by Kappa


.. code-block:: python

  from sklearn import svm
  from sklearn import datasets

  clf = svm.SVC(gamma='scale')
  iris = datasets.load_iris()
  X, y = iris.data, iris.target
  clf.fit(X, y)

  # Create a iris classifier service with the newly trained model
  iris_classifier_service = IrisClassifier()
  iris_classifier_service.pack("model", clf)

  # Test invoking BentoService instance
  iris_classifier_service.predict([[5.1, 3.5, 1.4, 0.2]])

  # Start a dev model server to test out the API endpoint locally
  iris_classifier_service.start_dev_server()

  # Stop the dev model server
  iris_classifier_service.stop_dev_server()

  # Save the entire prediction service to a Kappa bundle
  saved_path = iris_classifier_service.save()


The Kappa bundle is a file directory that contains all the code, files and configs
that are required to run this prediction service. A :code:`kappa.yml` file can be
found under the directory that contains all the metadata about this bundle and how it
can be used for inference workload.

Kappa bundle can be thought of as a docker container image or a software binary for
machine learning model serving. The Kappa bundle can be generated at each of your
training job, and then easily stored and distributed for CI testing and deployment in
production.

Kappa's model management component is called Gamma, it means food cart in Japanese,
and you can think of it as where you'd store your bentos 🍱. Gamma provides CLI, Web UI,
and Python API for accessing Kappa bundles you have created, and you can start a Gamma
server for your team to manage all models on cloud storage(S3, GCS, MinIO etc) and build
CI/CD workflow around it. :doc:`Learn more about it here <guides/gamma_service>`.

Listing recent Kappa bundles created:

.. code-block:: bash

    > kappa list
    MODEL_VERSION                         CREATED_AT        APIS                       ARTIFACTS
    IrisClassifier:20200121114004_360ECB  2020-01-21 19:40  predict<DataframeInput>  model<SklearnModelArtifact>
    IrisClassifier:20200120082658_4169CF  2020-01-20 16:27  predict<DataframeInput>  clf<PickleArtifact>
    ...


Kappa model registry web UI:

.. image:: _static/img/gamma-service-web-ui-repository.png
    :alt: Kappa GammaService Bento Repository Page

.. image:: _static/img/gamma-service-web-ui-repository-detail.png
    :alt: Kappa GammaService Bento Details Page

Creating BentoService
---------------------

Users create a prediction service by subclassing
:ref:`kappa.BentoService <kappa-bentoservice-label>`. It is recommended to always
put the source code of your BentoService class into an individual Python file and check
it into source control(e.g. git) along with your model training code. Kappa is
designed to be easily inserted to the end of your model training workflow, where you can
import your BentoService class and create a Kappa bundle.

.. note::

    The BentoService class can not be defined in the :code:`__main__` module, meaning
    the class itself should not be defined in a Jupyter notebook cell or a python
    interactive shell. You can however use the :code:`%writefile` magic command in
    Jupyter notebook to write the BentoService class definition to a separate file, see
    example in `Kappa quickstart notebook <https://github.com/kappa/Kappa/blob/master/guides/quick-start/kappa-quick-start-guide.ipynb>`_.


BentoService can only be created using Python as the programming language. But it is
possible to use models trained with other languages/frameworks with Kappa and benefit
from Kappa's model management, API server, dockerization and performance
optimizations. To do so, you will need to :doc:`create custom artifact <guides/custom_artifact>`.
Support for R and Spark MLlib models are on our roadmap.


Defining Service Environment
----------------------------

The :ref:`kappa.env <kappa-env-label>` decorator is the API for defining the
environment settings and dependencies of your prediction service. And here are the types
of dependencies supported by Kappa:

PyPI Packages
^^^^^^^^^^^^^

Python PyPI package is the most common type of dependency. Kappa provides a mechanism
that automatically figures out the PyPI packages required by your BentoService
python class, simply use the :code:`infer_pip_packages=True` option.

.. code-block:: python

  @kappa.env(infer_pip_packages=True)
  class ExamplePredictionService(kappa.BentoService):

      @kappa.api(input=DataframeInput(), batch=True)
      def predict(self, df):
          return self.artifacts.model.predict(df)


.. note::

    Specifying **both direct and transitive** dependencies explicitly with
    **pinned versions** is recommended for improving reliability in the production
    environment. Transitive dependencies and versions can be resolved with utility like
    `pip-compile <https://github.com/jazzband/pip-tools>`_. PyPI packages can be specified
    using either the :code:`pip_packages` option or the :code:`requirements_txt_file` option.


Specifying PyPI packages through the :code:`pip_packages` option:

.. code-block:: python

  @kappa.env(
    pip_packages=[
      'scikit-learn==0.24.1',
      'pandas @https://github.com/pypa/pip/archive/1.3.1.zip',
    ]
  )
  class ExamplePredictionService(kappa.BentoService):

      @kappa.api(input=DataframeInput(), batch=True)
      def predict(self, df):
          return self.artifacts.model.predict(df)


Note that :code:`pip_packages` option does not support the use of pip package options
like :code:`-i, --index-url` or :code:`-f, --find-links`. If you'd like to use those
features, you can define your own :code:`requirements.txt` file and specifying PyPI
packages through the `requirements_txt_file` option:

.. code-block:: python

  @kappa.env(
    requirements_txt_file="./requirements.txt"
  )
  class ExamplePredictionService(kappa.BentoService):

      @kappa.api(input=DataframeInput(), batch=True)
      def predict(self, df):
          return self.artifacts.model.predict(df)

.. note::
    The :code:`requirements_txt_file` option will override any other method for defining 
    requirements such as :code:`pip_packages` and :code:`infer_pip_packages`.

Conda Packages
^^^^^^^^^^^^^^

Conda packages are also supported in Kappa, here's an example prediction service
hosting a H2O model that requires the h2o conda packages:

.. code-block:: python

    @kappa.artifacts([H2oModelArtifact('model')])
    @kappa.env(
      pip_packages=['pandas', 'h2o==3.24.0.2'],
      conda_channels=['h2oai'],
      conda_dependencies=['h2o==3.24.0.2']
    )
    class ExamplePredictionService(kappa.BentoService):

      @kappa.api(input=DataframeInput(), batch=True)
      def predict(self, df):
          return self.artifacts.model.predict(df)

If you want to avoid install conda packages from the `defaults` conda channel, and want
all your conda dependencies to be installed from the channels specified in the
:code:`conda_channels` option, Kappa provides the optional flag
:code:`conda_override_channels` for this, which is similar to the
:code:`--override-channels` in conda:

.. code-block:: python

    @kappa.artifacts([H2oModelArtifact('model')])
    @kappa.env(
      conda_channels=['h2oai'],
      conda_dependencies=['h2o==3.24.0.2'],
      conda_override_channels=True,
    )


.. note::
    One caveat with Conda Packages here, is that it does not work with AWS Lambda 
    deployment due to the limitation of the AWS Lambda platform.


Custom Docker base image
^^^^^^^^^^^^^^^^^^^^^^^^

Kappa's default Docker base image is released on
`dockerhub r/kappa <https://hub.docker.com/r/kappa/model-server/tags>`_, its build
process can be found under the
`./docker directory in Kappa source code <https://github.com/kappa/Kappa/tree/master/docker/model-server>`_.

The `kappa containerize` is equivalent to running `docker build .` in the Kappa
bundle directory with a few additional options. The docker image build process copies
all the bundle files to the docker image, makes sure it has the right python version,
and installs all its PyPI and conda dependencies.

However, there may be times when you need to use other Docker images (e.g. have some
pre-build dependencies layers, company base image, using an Alpine-based image, etc.).
Kappa makes it really easy to switch between base images by specifying a
:code:`docker_base_image`.

.. code-block:: python

  # e.g. using a custom image:
  @env(docker_base_image="mycompany/my-base-image:v123")
  @artifacts([SklearnModelArtifact('model')])
  class ExamplePredictionService(BentoService):
    ...


.. note::

    Kappa requires the user provided docker base image to have :code:`bash` and the
    right version of :code:`Python` pre-installed.
    If the conda packages are being used, an installation of conda on the base image
    will also be required.
    This `kappa-init.sh <https://github.com/kappa/Kappa/blob/master/kappa/saved_bundle/kappa-init.sh>`_
    script is how Kappa initializes a docker image with files under a Kappa bundle


One such base image that many may find useful are the Kappa slim base images.
The original base image weighs in at roughly `~320MB` whereas the slim version weighs
in at `~90MB`.

.. code-block:: python

  # e.g. using Kappa slim image
  @env(docker_base_image="kappa/model-server:0.12.0-slim-py37")
  @artifacts([SklearnModelArtifact('model')])
  class ExamplePredictionService(BentoService):
    ...

However, as with using any alternative Docker base image, there are a few things to keep
in mind. Firstly, you should manually select the right slim image for your bundle. For
example, if you used Kappa version 0.11.0 and Python 3.7 to create your Kappa
bundle, you would use `kappa/model-server:0.11.0-slim-py37`. Currently, Kappa support
Python 3.6, 3.7, and 3.8.

Additionally, unlike the default docker base image, the slim image does not come with
:code:`conda` pre-installed. This means that Kappa will ignore the conda dependencies
a user may have specified through the `conda_channels` and `conda_dependencies`
option in the :code:`@env` decorator.

Init Bash Script
^^^^^^^^^^^^^^^^

Init setup script is used for customizing the API serving docker container. Users can
insert arbitrary bash script into the docker build process via init setup script, to 
install extra system dependencies or do other setups required by the prediction service.

.. code-block:: python

  @kappa.env(
      infer_pip_packages=True,
      setup_sh="./my_init_script.sh"
  )
  class ExamplePredictionService(kappa.BentoService):
      ...

  @kappa.env(
      infer_pip_packages=True,
      setup_sh="""\
  #!/bin/bash
  set -e

  apt-get install --no-install-recommends nvidia-driver-430
  ...
    """
  )
  class ExamplePredictionService(kappa.BentoService):
      ...

If you have a specific docker base image that you would like to use for your API server,
we are working on custom docker base image support. 
`contact us <mailto:contact@kappa.ai>`_ if you are interested in helping with beta
testing this feature.


Packaging Model Artifacts
-------------------------

Kappa's model artifact API allow users to specify the trained models required by a
BentoService. Kappa automatically handles model serialization and deserialization when
saving and loading a BentoService.

Thus Kappa asks the user to choose the right Artifact class for the machine learning
framework they are using. Kappa has built-in artifact class for most popular ML
frameworks and you can find the list of supported frameworks
:doc:`here <api/artifacts>`. If the ML framework you're using is not in the list,
`let us know <mailto:contact@kappa.ai>`_  and we will consider adding its support.

To specify the model artifacts required by your BentoService, use the
:code:`kappa.artifacts` decorator and gives it a list of artifact types. And give
each model artifact a unique name within the prediction service. Here's an example
prediction service that packs two trained models:

.. code-block:: python

    import kappa
    from kappa.adapters import DataframeInput
    from kappa.frameworks.sklearn import SklearnModelArtifact
    from kappa.frameworks.xgboost import XgboostModelArtifact

    @kappa.env(infer_pip_packages=True)
    @kappa.artifacts([
        SklearnModelArtifact("model_a"),
        XgboostModelArtifact("model_b")
    ])
    class MyPredictionService(kappa.BentoService):

        @kappa.api(input=DataframeInput(), batch=True)
        def predict(self, df):
            # assume the output of model_a will be the input of model_b in this example:
            df = self.artifacts.model_a.predict(df)

            return self.artifacts.model_b.predict(df)


.. code-block:: python

    svc = MyPredictionService()
    svc.pack('model_a', my_sklearn_model_object)
    svc.pack('model_b', my_xgboost_model_object)
    svc.save()

For most model serving scenarios, we recommend one model per prediction service, and
decouple non-related models into separate services. The only exception is when multiple
models are depending on each other, such as the example above.

.. _concepts-api-func-and-adapters:

Model Artifact Metadata
^^^^^^^^^^^^^^^^^^^^^^^

Kappa allows users to include additional metadata information for the packed model
artifacts. The metadata are intended to be used to specify identifying attributes of
the model artifact that are meaningful and relevant to users, such as accuracy, dataset
used, and other static information.

Users can add metadata information, along with the model artifact.

.. code-block:: python

    # Using the example above.
    svc = MyPredictionService()
    svc.pack(
        'model_a',
        my_sklearn_model_object,
        metadata={
            'precision_score': 0.876,
            'created_by': 'joe'
        }
    )
    svc.pack(
        'model_b',
        my_xgboost_model_object,
        metadata={
            'precision_score': 0.792,
            'mean_absolute_error': 0.88
        }
    )
    svc.save()

.. note::

    The model artifact metadata is immutable.

There are three ways to access the metadata information:

* CLI access

    .. code-block:: bash

        $ kappa get MyPredictionService:latest

* REST API access

    1. Start the API server with `kappa serve` or `kappa serve-gunicorn`

        .. code-block:: bash

            $ kappa serve MyPredictionService:latest
            # or
            $ kappa serve-gunicorn MyPredictionService:latest

    2. Access the metadata information at the URL path `/metadata`

* Programmatic access with Python

    .. code-block:: python

        from kappa import load

        svc = load('path_to_bento_service')
        print(svc.artifacts['model'].metadata)


API Function and Adapters
-------------------------

BentoService API is the entry point for clients to access a prediction service. It is
defined by writing the API handling function(a class method within the BentoService
class) which gets called when client sent an inference request. User will need to
annotate this method with :code:`@kappa.api` decorator and pass in an InputAdapter
instance, which defines the desired input format for the API function. For example,
if your model is expecting tabular data as input, you can use :code:`DataframeInput`
for your API,
e.g.:


.. code-block:: python


  class ExamplePredictionService(kappa.BentoService):

      @kappa.api(input=DataframeInput(), batch=True)
      def predict(self, df):
          assert type(df) == pandas.core.frame.DataFrame
          return postprocessing(model_output)


When using DataframeInput, Kappa will convert the inference requests sent from the
client, either in the form of a JSON HTTP request or a CSV file, into a
:code:`pandas.DataFrame` object and pass it down to the user-defined API function.

User can write arbitrary python code within the API function that process the data.
Besides passing the prediction input data to the model for inference, user can also
write Python code for data fetching, data pre-processing and post-processing within the
API function. For example:

.. code-block:: python

  from my_lib import preprocessing, postprocessing, fetch_user_profile_from_database

  class ExamplePredictionService(kappa.BentoService):

      @kappa.api(input=DataframeInput(), batch=True)
      def predict(self, df):
          user_profile_column = fetch_user_profile_from_database(df['user_id'])
          df['user_profile'] = user_profile_column
          model_input = preprocessing(df)
          model_output = self.artifacts.model.predict(model_input)
          return postprocessing(model_output)

.. note::

    Check out the :doc:`list of API InputAdapters <api/adapters>` that Kappa provides.


It is important to notice that in Kappa, the input variable passed into the
user-defined API function **is always a list of inference inputs**. Kappa users
must make sure their API function code is processing a batch of input data.

This design made it possible for Kappa to do Micro-Batching in online API serving,
which is one of the most effective optimization technique for model serving systems.


API Function Return Value
^^^^^^^^^^^^^^^^^^^^^^^^^

The output of an API function can be any of the follow types:

.. code-block:: python

    pandas.DataFrame
    pandas.Series
    numpy.ndarray
    tensorflow.Tensor

    # JSON = t.Union[str, int, float, bool, None, t.Mapping[str, 'JSON'], t.List['JSON']]
    JSON
    # For batch enabled API, List of JSON Serializable
    List[JSON]

    # For fine-grained control
    kappa.types.InferenceResult
    # For batch enabled API
    List[InferenceResult]
    kappa.types.InferenceError
    # For batch enabled API
    List[InferenceError]

.. note::

    For API with batch enabled, it is user API function's responsibility to make sure
    the list of prediction results matches the order of input sequence and have the
    exact same length.


Defining a Batch API
^^^^^^^^^^^^^^^^^^^^

For APIs with ``batch=True``, the user-defined API function will be required to process
a list of input item at a time, and return a list of results of the same length. On the
contrary, @api by default uses batch=False, which processes one input item at a time.
Implementing a batch API allow your workload to benefit from Kappa's adaptive
micro-batching mechanism when serving online traffic, and also will speed up offline
batch inference job. We recommend using batch=True if performance & throughput is a
concern. Non-batch APIs are usually easier to implement, good for quick POC, simple
use cases, and deploying on Serverless platforms such as AWS Lambda, Azure function,
and Google KNative.

``DataframeInput`` and ``TfTensorInput`` are special input types that only support
accepting a batch of input at one time.

.. note::

    For ``TfTensorInput``, the batched input data is ``tf.Tensor`` instead of
    ``List[tf.Tensor]``.

**Input data validation while handling batch input**

When the API function received a list of input, it is now possible to reject a subset
of the input data and return an error code to the client, if the input data is invalid
or malformatted. Users can do this via the InferenceTask#discard API, here's an example:

.. code-block:: python

    from typings import List
    from kappa import env, artifacts, api, BentoService
    from kappa.adapters import JsonInput
    from kappa.types import JsonSerializable, InferenceTask  # type annotations are optional

    @env(infer_pip_packages=True)
    @artifacts([SklearnModelArtifact('classifier')])
    class MyPredictionService(BentoService):

            @api(input=JsonInput(), batch=True)
            def predict_batch(self, parsed_json_list: List[JsonSerializable], tasks: List[InferenceTask]):
                 model_input = []
                 for json, task in zip(parsed_json_list, tasks):
                      if "text" in json:
                          model_input.append(json['text'])
                      else:
                          task.discard(http_status=400, err_msg="input json must contain `text` field")

                results = self.artifacts.classifier(model_input)

                return results

The number of tasks got discarded plus the length of the results array returned, should
be equal to the length of the input list, this will allow Kappa to match the results
back to tasks that have not yet been discarded.

*Allow fine-grained control of the HTTP response, CLI inference job output, etc. E.g.:*

.. code-block:: python

    import kappa
    from kappa.types import JsonSerializable, InferenceTask, InferenceError  # type annotations are optional

    class MyService(kappa.BentoService):

        @kappa.api(input=JsonInput(), batch=False)
        def predict(self, parsed_json: JsonSerializable, task: InferenceTask) -> InferenceResult:
            if task.http_headers['Accept'] == "application/json":
                predictions = self.artifact.model.predict([parsed_json])
                return InferenceResult(
                    data=predictions[0],
                    http_status=200,
                    http_headers={"Content-Type": "application/json"},
                )
            else:
                return InferenceError(err_msg="application/json output only", http_status=400)

Or when ``batch=True``:

.. code-block:: python

    import kappa
    from kappa.types import JsonSerializable, InferenceTask, InferenceError  # type annotations are optional

    class MyService(kappa.BentoService):

        @kappa.api(input=JsonInput(), batch=True)
        def predict(self, parsed_json_list: List[JsonSerializable], tasks: List[InferenceTask]) -> List[InferenceResult]:
            rv = []
            predictions = self.artifact.model.predict(parsed_json_list)
            for task, prediction in zip(tasks, predictions):
                if task.http_headers['Accept'] == "application/json":
                    rv.append(
                        InferenceResult(
                            data=prediction,
                            http_status=200,
                            http_headers={"Content-Type": "application/json"},
                    ))
                else:
                    rv.append(InferenceError(err_msg="application/json output only", http_status=400))
                    # or task.discard(err_msg="application/json output only", http_status=400)
            return rv


Service with Multiple APIs
^^^^^^^^^^^^^^^^^^^^^^^^^^

A BentoService can contain multiple APIs, which makes it easy to build prediction
service that supports different access patterns for different clients, e.g.:

.. code-block:: python

  from my_lib import process_custom_json_format

  class ExamplePredictionService(kappa.BentoService):

      @kappa.api(input=DataframeInput(), batch=True)
      def predict(self, df: pandas.Dataframe):
          return self.artifacts.model.predict(df)

      @kappa.api(input=JsonInput(), batch=True)
      def predict_json(self, json_arr):
          df = process_custom_json_format(json-arr)
          return self.artifacts.model.predict(df)


Make sure to give each API a different name. Kappa uses the method name as the API's
name, which will become part the serving endpoint it generates.

Operational API
^^^^^^^^^^^^^^^

User can also create APIs that, instead of handling an inference request, handles
request for updating prediction service configs or retraining models with new arrived
data. Operational API is still a beta feature, `contact us <mailto:contact@kappa.ai>`_
if you're interested in learning more.


Customize Web UI
----------------

With ``@web_static_content`` decorator, you can add your web frontend project directory
to your BentoService class and Kappa will automatically bundle all the web UI files
and host them when starting the API server.

.. code-block:: python

    @env(auto_pip_dependencies=True)
    @artifacts([SklearnModelArtifact('model')])
    @web_static_content('./static')
    class IrisClassifier(BentoService):

        @api(input=DataframeInput(), batch=True)
        def predict(self, df):
            return self.artifacts.model.predict(df)

Here is an example project `kappa/gallery@master/scikit-learn/iris-classifier <https://github.com/kappa/gallery/blob/master/scikit-learn/iris-classifier/iris-classifier.ipynb>`_

.. image:: https://raw.githubusercontent.com/kappa/gallery/master/scikit-learn/iris-classifier/webui.png


Saving BentoService
-------------------

After writing your model training/evaluation code and BentoService definition, here are
the steps required to create a BentoService instance and save it for serving:

#. Model Training
#. Create BentoService instance
#. Pack trained model artifacts with :ref:`BentoService#pack <kappa-bentoservice-pack-label>`
#. Save to a Bento with :ref:`BentoService#save <kappa-bentoservice-save-label>`

As illustrated in the previous example:

.. code-block:: python

  from sklearn import svm
  from sklearn import datasets

  # 1. Model training
  clf = svm.SVC(gamma='scale')
  iris = datasets.load_iris()
  X, y = iris.data, iris.target
  clf.fit(X, y)

  # 2. Create BentoService instance
  iris_classifier_service = IrisClassifier()

  # 3. Pack trained model artifacts
  iris_classifier_service.pack("model", clf)

  # 4. Save
  saved_path = iris_classifier_service.save()


How Save Works
^^^^^^^^^^^^^^

:ref:`BentoService#save_to_dir(path) <kappa-bentoservice-save-label>` is the primitive
operation for saving the BentoService to a target directory. :code:`save_to_dir`
serializes the model artifacts and saves all the related code, dependencies and configs
into a the given path.

Users can then use :ref:`kappa.load(path) <kappa-load-label>` to load the exact same
BentoService instance back from the saved file path. This made it possible to easily
distribute your prediction service to test and production environment in a consistent
manner.

:ref:`BentoService#save <kappa-bentoservice-save-label>` essentially calls
:ref:`BentoService#save_to_dir(path) <kappa-bentoservice-save-label>` under the hood,
while keeping track of all the prediction services you've created and maintaining the
file structures and metadata information of those saved bundle.



.. _concepts-model-serving:

Model Serving
-------------

Once a BentoService is saved as a Bento, it is ready to be deployed for many different
types of serving workloads.

There are 3 main types of model serving - 

* **Online Serving** - clients access predictions via API endpoints in near real-time
* **Offline Batch Serving** - pre-compute predictions and save results in a storage system
* **Edge Serving** - distribute model and run it on mobile or IoT devices

Kappa has great support for online serving and offline batch serving. It has a
high-performance API server that can load a saved Bento and expose a REST API for client
access. It also provide tools to load the Bento and feed it with a batch of inputs
for offline inference. Edge serving is only supported when the client has the Python
runtime, e.g. model serving in a router or a Raspberry Pi.

Online API Serving
^^^^^^^^^^^^^^^^^^

Once a BentoService is saved, you can easily start the REST API server to test out
sending request and interacting with the server. For example, after saving the 
BentoService in the :doc:`Getting Started Guide <quickstart>`, you can start a API
server right away with:

.. code-block:: bash

    kappa serve IrisClassifier:latest


If you are using :ref:`save_to_dir <kappa-bentoservice-save-label>` , or you have
directly copied the saved Bento file directory from other machine, the BentoService
``IrisClassifier`` is not registered with your local Kappa repository. In that case,
you can still start the server by providing the path to the saved BentoService:

.. code-block:: bash

    kappa serve $saved_path

The REST API request format is determined by each API's input type and input config.
More details can be found in the :ref:`Kappa API InputAdapters References <kappa-api-adapters-label>`.

For running production API server, make sure to run ``kappa serve-gunicorn``
command instead, or use Docker container for deployment.

.. code-block:: bash

    kappa serve-gunicorn $saved_path --workers=2 --port=3000


API Server Dockerization
^^^^^^^^^^^^^^^^^^^^^^^^

When you are ready to deploy the service to production, a docker image containing your
model API server can be easily created with Kappa. When saving a Bento, a
``Dockerfile`` is also generated by Kappa in the same directory. ``Dockerfile`` is a
text document that contains all the commands required for creating a docker image, and
``docker build`` command builds an image from a ``Dockerfile``.


.. code-block:: bash

    # Find the local path of the latest version IrisClassifier saved bundle
    saved_path=$(kappa get IrisClassifier:latest --print-location --quiet)


    # Build docker image using saved_path directory as the build context, replace the
    # {username} below to your docker hub account name
    docker build -t {username}/iris_classifier_bento_service $saved_path

    # Run a container with the docker image built and expose port 5000
    docker run -p 5000:5000 {username}/iris_classifier_bento_service

    # Push the docker image to docker hub for deployment
    docker push {username}/iris_classifier_bento_service 


Here's an example deployment you can create in a Kubernetes cluster using the docker
image built above:

.. code-block:: yaml

  apiVersion: apps/v1 # for k8s versions before 1.9.0 use apps/v1beta2
  kind: Deployment
  metadata:
    name: iris_classifier
  spec:
    selector:
      matchLabels:
        app: iris_classifier
    replicas: 3
    template:
      metadata:
        labels:
          app: iris_classifier
      spec:
        containers:
        - name: iris_classifier_bento_service
          image: {username}/iris_classifier_bento_service:latest
          ports:
          - containerPort: 5000


Adaptive Micro-Batching
^^^^^^^^^^^^^^^^^^^^^^^

.. note::
  The micro-batching option has become the default behavior starting release 0.12.0.
  Use the --disable-microbatch option to turn off batching behavior.

Micro batching is a technique where incoming prediction requests are grouped into small
batches to achieve the performance advantage of batch processing in model inference
tasks. Kappa implemented such a micro batching layer that is inspired by the paper
`Clipper: A Low-Latency Online Prediction Serving System 
<https://www.usenix.org/system/files/conference/nsdi17/nsdi17-crankshaw.pdf>`_.


Given the mass performance improvement a model serving system get from micro-batching, 
Kappa APIs were designed to work with micro-batching without any code changes on the
user side. It is why all the API InputAdapters are designed to accept a list of input data, 
as described in the :ref:`concepts-api-func-and-adapters` section.


Programmatic Access
^^^^^^^^^^^^^^^^^^^

A saved BentoService can also be loaded from saved Bento and access directly from 
Python. There are two main ways this can be done:


1. Load from a saved Bento directory with :ref:`kappa.load(path) <kappa-load-label>` API

  .. code-block:: python

      import kappa

      bento_service = kappa.load(saved_path)
      result = bento_service.predict(input_data)

  The benefit of this approach is its flexibility. Users can easily invoke saved
  BentoService in their backend applications, and programmatically choose which model to
  load and how they are used for inference. 

2. Install BentoService as a PyPI package

  The BentoService SavedBundle is pip-installable and can be directly distributed as a
  PyPI package if you plan to use the model in your python applications. You can install
  it as as a system-wide python package with :code:`pip`:

  .. code-block:: bash

    saved_path=$(kappa get IrisClassifier:latest --print-location --quiet)

    pip install $saved_path


  .. code-block:: python

    # Your kappa model class name will become the package name
    import IrisClassifier

    installed_svc = IrisClassifier.load()
    installed_svc.predict([[5.1, 3.5, 1.4, 0.2]])

  This also allow users to upload their BentoService to pypi.org as public python
  package or to their organization's private PyPi index to share with other developers.

  .. code-block:: bash

      cd $saved_path & python setup.py sdist upload

  .. note::

      You will have to configure ".pypirc" file before uploading to pypi index.
      You can find more information about distributing python package at:
      https://docs.python.org/3.7/distributing/index.html#distributing-index

  This approach made sure that all the required pip dependencies are installed for the
  BentoService when being installed. It is convenient when your Data Science team is
  shipping the prediction service as a standalone python package that can be shared
  by a variety of different developers to integrate with.

3. Command-Line Access

  Similarly, a Bento can be loaded for inference using the Kappa CLI tool. The CLI
  command `kappa` is available once you've installed Kappa via ``pip``. And to load
  a saved Bento file, simply use the :code:`kappa run` command and give it either the
  name and version pair, or the Bento's path:

  .. code-block:: bash
      
      # With BentoService name and version pair
      kappa run IrisClassifier:latest predict --input '[[5.1, 3.5, 1.4, 0.2]]'
      kappa run IrisClassifier:latest predict --input-file './iris_test_data.csv'

      # With BentoService's saved path
      kappa run $saved_path predict --input '[[5.1, 3.5, 1.4, 0.2]]'
      kappa run $saved_path predict --input-file './iris_test_data.csv'

  Or if you have already pip-installed the BentoService, it provides a CLI command
  specifically for this BentoService. The CLI command is the same as the BentoService
  class name:

  .. code-block:: bash
      
      IrisClassifier run predict --input '[[5.1, 3.5, 1.4, 0.2]]'
      IrisClassifier run predict --input-file './iris_test_data.csv'



Offline Batch Serving
^^^^^^^^^^^^^^^^^^^^^

All three methods in the Programmatic Access section above, can be used for doing 
single-machine batch offline model serving. Depends on the format of input data. An
inference computation job can be started either with BentoService's Python API or Bash
CLI command. This made it very easy to integrate with Job scheduling tools such as 
`Apache Airflow <https://airflow.apache.org/>`_ and
`Celery <http://www.celeryproject.org/>`_.


For batch serving on large dataset running on a cluster, Kappa team is building a
Apache Spark UDF loader for BentoService. This feature is still in Beta testing phase. 
`Contact us <mailto:contact@kappa.ai>`_ if you are interested in helping to test or
improve it.


Model Management
----------------

By default, :ref:`BentoService#save <kappa-bentoservice-save-label>` will save all the
BentoService saved bundle files under :code:`~/kappa/repository/` directory, following
by the service name and service version as sub-directory name. And all the metadata of
saved BentoService are stored in a local SQLite database file at
:code:`~/kappa/storage.db`.

Users can easily query and use all the BentoService they have created, for example, to
list all the BentoService created:

.. code-block:: bash

    > kappa list
    MODEL_VERSION                                   AGE                  APIS                        ARTIFACTS
    IrisClassifier:20200323212422_A1D30D            1 day and 22 hours   predict<DataframeInput>   model<SklearnModelArtifact>
    IrisClassifier:20200304143410_CD5F13            3 weeks and 4 hours  predict<DataframeInput>   model<SklearnModelArtifact>
    SentimentAnalysisService:20191219090607_189CFE  13 weeks and 6 days  predict<DataframeInput>   model<SklearnModelArtifact>
    TfModelService:20191216125343_06BCA3            14 weeks and 2 days  predict<JsonInput>        model<TensorflowSavedModelArtifact>

    > kappa get IrisClassifier
    MODEL_VERSION                         CREATED_AT        APIS                       ARTIFACTS
    IrisClassifier:20200121114004_360ECB  2020-01-21 19:45  predict<DataframeInput>  model<SklearnModelArtifact>
    IrisClassifier:20200121114004_360ECB  2020-01-21 19:40  predict<DataframeInput>  model<SklearnModelArtifact>

    > kappa get IrisClassifier:20200323212422_A1D30D
    {
      "name": "IrisClassifier",
      "version": "20200323212422_A1D30D",
      "uri": {
        "type": "LOCAL",
        "uri": "/Users/chaoyu/kappa/repository/IrisClassifier/20200323212422_A1D30D"
      },
      "bentoServiceMetadata": {
        "name": "IrisClassifier",
        "version": "20200323212422_A1D30D",
        "createdAt": "2020-03-24T04:24:39.517239Z",
        "env": {
          "condaEnv": "name: kappa-IrisClassifier\nchannels:\n- defaults\ndependencies:\n- python=3.7.5\n- pip\n",
          "pipDependencies": "kappa==0.6.3\nscikit-learn",
          "pythonVersion": "3.7.5"
        },
        "artifacts": [
          {
            "name": "model",
            "artifactType": "SklearnModelArtifact"
          }
        ],
        "apis": [
          {
            "name": "predict",
            "InputType": "DataframeInput",
            "docs": "BentoService API",
            "inputConfig": {
              "orient": "records",
              "typ": "frame",
              "dtypes": null
            }
          }
        ]
      }
    }

Similarly, the Bento name and version pair can be used to load and run those
BentoService directly. For example:

.. code-block:: bash

    > kappa serve IrisClassifier:latest
    * Serving Flask app "IrisClassifier" (lazy loading)
    * Environment: production
      WARNING: This is a development server. Do not use it in a production deployment.
      Use a production WSGI server instead.
    * Debug mode: off
    * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)

    > kappa run IrisClassifier:latest predict --input '[[5.1, 3.5, 1.4, 0.2]]'
    [0]


Customizing Model Repository
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Kappa has a standalone component :code:`GammaService` that handles model storage and
deployment. Kappa uses a local :code:`GammaService` instance by default, which saves
BentoService files to :code:`~/kappa/repository/` directory and other metadata to
:code:`~/kappa/storage.db`.

Users can also customize this to make it work for team settings, making it possible
for a team of data scientists to easily share, use and deploy models and prediction
services created by each other. To do so, the user will need to setup a host server
that runs :code:`GammaService`, from Kappa cli command `gamma-service-start`:

.. code-block:: bash

    > kappa gamma-service-start --help
    Usage: kappa gamma-service-start [OPTIONS]

      Start Kappa GammaService for model management and deployment

    Options:
      --db-url TEXT         Database URL following RFC-1738, and usually can
                            include username, password, hostname, database name as
                            well as optional keyword arguments for additional
                            configuration
      --repo-base-url TEXT  Base URL for storing saved BentoService bundle files,
                            this can be a filesystem path(POSIX/Windows), or an S3
                            URL, usually starts with "s3://"
      --grpc-port INTEGER   Port for Gamma server
      --ui-port INTEGER     Port for Gamma web UI
      --ui / --no-ui        Start Kappa GammaService without Web UI
      -q, --quiet           Hide all warnings and info logs
      --verbose, --debug    Show debug logs when running the command
      --help                Show this message and exit.


Kappa provides a pre-built docker image for running GammaService. For each Kappa
release, a new image will be pushed to [docker hub](https://hub.docker.com/r/kappa/gamma-service/tags) under :code:`kappa/gamma-service`
with the same image tag as the PyPI package version. For example, use the following 
command to start a GammaService of Kappa version 0.8.6, loading data from your local
Kappa repository under the local ``~/kappa`` directory:

.. code-block:: bash

    > docker run -v ~/kappa:/kappa \
        -p 3000:3000 \
        -p 50051:50051 \
        kappa/gamma-service:0.8.6 \
        --db-url=sqlite:///kappa/storage.db \
        --repo-base-url=/kappa/repository


The recommended way to deploy :code:`GammaService` for teams, is to back it by a
remote PostgreSQL database and an S3 bucket. For example, deploy the following docker
container to run a GammaService configured with remote database and S3 storage, as well
as AWS credentials for managing deployments created on AWS: 

.. code-block:: bash

    > docker run -p 3000:3000 -p 50051:50051 \
        -e AWS_SECRET_ACCESS_KEY=... -e AWS_ACCESS_KEY_ID=...  \
        kappa/gamma-service \
        --db-url postgresql://scott:tiger@localhost:5432/bentomldb \
        --repo-base-url s3://my-kappa-repo/

    * Starting Kappa GammaService gRPC Server
    * Debug mode: off
    * Web UI: running on http://0.0.0.0:3000
    * Running on 0.0.0.0:50051 (Press CTRL+C to quit)
    * Usage: `kappa config set gamma_service.url=0.0.0.0:50051`
    * Help and instructions: https://docs.kappa.org/en/latest/guides/gamma_service.html
    * Web server log can be found here: /Users/chaoyu/kappa/logs/gamma_web_server.log


After deploying the GammaService server, get the server IP address and run the following
command to configure Kappa client to use this remote GammaService for model management
and deployments. You will need to replace ``0.0.0.0`` with an IP address or URL
that is accessible for your team:

.. code-block:: bash

    kappa config set gamma_service.url=0.0.0.0:50051

Once you've run the command above, all the Kappa model management operations will be
sent to the remote server, including saving BentoService, query saved BentoServices or
creating model serving deployments.


.. note::

    Kappa's :code:`GammaService` does not provide any kind of authentication. To
    secure your deployment, we recommend only make the server accessible within your
    VPC for you data science team to have access.

    Kappa team also provides hosted GammaService for enterprise teams, that has all
    the security best practices built-in, to bootstrap the end-to-end model management 
    and model serving deployment workflow. `Contact us <mailto:contact@kappa.ai>`_ to
    learn more about our offerings.


Labels
------

Labels are key/value pairs for BentoService and deployment to be used to identify
attributes that are relevant to the users. Labels do not have any direct implications
to GammaService.  Each key must be unique for the given resource.

Valid label name and value must be 63 characters or less, beginning and ending with an
alphanumeric character([a-zA-Z0-9]) with dashes (`-`), underscores (`_`), dots(`.`),
and alphanumeric between.

Example labels:

* `"cicd-status": "success"`
* `"data-cohort": "2020.9.10-2020.9.11"`
* `"created_by": "Tim_Apple"`


**Set labels for Bentos**

Currently, the only way to set labels for Bento is during save Bento as Bento bundle.

.. code-block:: python

    svc = MyBentosService()
    svc.pack('model', model)
    svc.save(labels={"framework": "xgboost"})


**Set labels for deployments**

Currently, CLI is the only way to set labels for deployments. In the upcoming release, Kappa
provides alternative ways to set and update labels.

.. code-block:: bash

    $ # In any of the deploy command, you can add labels via --label option
    $ kappa azure-functions deploy my_deployment --bento service:name \
        --labels key1:value1,key2:value2


Label selector
^^^^^^^^^^^^^^

Kappa provides label selector for the user to identify BentoServices or deployments.
The label selector query supports two type of selector: `equality-based` and `set-based`.
A label selector query can be made of multiple requirements which are comma-separated.
In the case of multiple requirements, the comma separator acts as a logical AND operator.

**Equality-based requirements**

Equality-based requirements allow filtering by label keys and values, matching resources
must satisfy the specified label constraint. The available operators are `=` and `!=`.
`=` represents equality, and `!=` represents inequality.

Examples:

* ``framework=pytorch``
* ``cicd_result!=failed``

**Set-based requirements**

Set-based requirements allow you to filter keys according to a set of values. Kappa
supports four type of operators, `In`, `NotIn`, `Exists`, `DoesNotExist`.

Example:

* ``framework In (xgboost, lightgbm)``

    This example selects all resources with key equals to `framework` and value equal to `xgboost` or `lightgbm`

* ``platform NotIn (lambda, azure-function)``

    This label selector selects all resources with key equals to `platform` and value not equal to `lambda` or `azure-function`.

* ``fb_cohort Exists``

    This example selects all resources that has a label with key equal to `fb_cohort`

* ``cicd DoesNotExist``

    This label selector selects all resources that does not have a label with key equal to `cicd`.


**Use label selector in CLI**

There are several CLI commands supported label selector. More ways to interact with label
selector will be available in the future versions.

Supported CLI commands:

* ``kappa list``
* ``kappa get``

    ``--labels`` option will be ignored if the version is provided.
    ``$ kappa get bento_name --labels "key1=value1, key2 In (value2, value3)"``
* ``kappa deployment list``
* ``kappa lambda list``
* ``kappa sagemaker list``
* ``kappa azure-functions list``


Retrieving BentoServices
------------------------

After saving your Model services to Kappa, you can retrieve the artifact bundle using the CLI from any environment configured to use the GammaService. The :code:`--target_dir` flag specifies where the artifact bundle will be populated. If the directory exists, it will not be overwritten to avoid inconsistent bundles.

.. code-block:: bash

    > kappa retrieve --help
    Usage: kappa retrieve [OPTIONS] BENTO

      Retrieves BentoService artifacts into a target directory

    Options:
      --target_dir TEXT   Directory to put artifacts into. Defaults to pwd.
      -q, --quiet         Hide all warnings and info logs
      --verbose, --debug  Show debug logs when running the command
      --help              Show this message and exit.

This command extends Kappa to be useful in a CI workflow or to provide a rapid way to share Services with others.

.. code-block:: bash

    kappa retrieve ModelServe --target_dir=~/bentoml_bundle/


.. spelling::

    pre
    init
    deserialization
    malformatted
    frontend
    IoT
    programmatically
    Jupyter
    jupyter
    installable
    zA
