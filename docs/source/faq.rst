.. _faq-page:

Frequently Asked Questions
==========================


Why Kappa?
------------

Getting Machine Learning models into production is hard. Data Scientists are not experts
in building production services and DevOps best practices. The trained models produced
by a Data Science team are hard to test and hard to deploy. This often leads us to a 
time consuming and error-prone workflow, where a pickled model or weights file is handed
over to a software engineering team.

Kappa is an end-to-end solution for model serving, making it possible for Data Science
teams to build production-ready model serving endpoints, with common DevOps best
practices and performance optimizations baked in.



How does Kappa compare to Tensorflow-serving?
-----------------------------------------------

`Tensorflow-serving <https://github.com/tensorflow/serving>`_ only supports Tensorflow framework at the moment, while Kappa has multi-framework support, works with Tensorflow, PyTorch, Scikit-Learn, XGBoost, FastAI, and more;

Tensorflow loads the model in tf.SavedModel format, so all the graphs and computations must be compiled into the SavedModel. Kappa keeps the Python runtime in serving time, making it possible to do pre-processing and post-processing in serving endpoints.

Both Tensorflow-serving and Kappa provides support for adaptive micro-batching, related benchmarks can be found here https://github.com/kappa/Kappa/tree/master/benchmark


How does Kappa compare to Clipper?
------------------------------------

Kappa is an end-to-end model serving solution. Besides online API model serving, Kappa also provides model packaging, model management, offline batch serving and deployment automation features. Clipper focuses on the online API serving system.

Both Kappa and Clipper provides micro-batching capability. Kappa's implementation is highly inspired by the paper: Clipper: A Low-Latency Online Prediction Serving System https://www.usenix.org/system/files/conference/nsdi17/nsdi17-crankshaw.pdf

The main difference is that Kappa provides micro-batching at the instance level while Clipper does it at a cluster level. Users can deploy Kappa API server containers in a more flexible way, while Clipper requires all prediction requests being routed to its master node.

Kappa works great with Clipper, users can deploy Kappa packaged models to their Clipper cluster and benefit from both frameworks: https://docs.kappa.org/en/latest/deployment/clipper.html


How does Kappa compare to AWS SageMaker?
------------------------------------------

When not using the built-in algorithms, model deployment on SageMaker requires users to build their API server with Flask and containerize the flask app by themselves

Kappa provides a high-performance API server for users without the need for lower-level web server development work

Kappa packaged model can be easily deployed to SageMaker serving: https://docs.kappa.org/en/latest/deployment/aws_sagemaker.html


How does Kappa compare to MLFlow?
-----------------------------------

MLFlow provides components that work great for experimentation management, ML project management. Kappa only focuses on serving and deploying trained models. You can, in fact, serve models logged in MLFlow experimentation with Kappa (see the gallery for an `example <https://github.com/kappa/gallery/blob/master/kappaflow/mlflow-to-kappa-example.ipynb>`_).

Both Kappa and MLFlow can expose a trained model as a REST API server, but there are a few main differences:

- In our benchmark testing, the Kappa API server is roughly 3-10x better performance compared to MLFlow's API server, and over 50x in some extreme cases: https://github.com/kappa/Kappa/tree/master/benchmark

- Kappa server is able to handle high-volume prediction requests without crashing while the MLFlow API server is very unstable in that case.

- MLFlow focuses on loading and running a model, while Kappa provides an abstraction to build a prediction service, which includes the necessary pre-processing and post-processing logic in addition to the model itself

- Kappa is more feature-rich in terms of serving, it supports many essential model serving features that are missing in MLFlow, including multi-model inference, API server dockerization, built-in Prometheus metrics endpoint, Swagger/OpenAPI endpoint for API client library generation, serverless endpoint deployment, prediction/feedback logging and many more

MLFlow API server requires the user to also use MLFlow's own "MLFlow Project" framework, while Kappa works with any model development and model training workflow - users can use Kappa with MLFlow, Kubeflow, Floydhub, AWS SageMaker, local jupyter notebook, etc



Does Kappa do horizontal scaling?
-----------------------------------

Kappa itself does not handle horizontal scaling, but it produces API server docker container images that can be easily scaled horizontally with container orchestration frameworks such as Kubernetes and Mesos.

Kappa also allows users to deploy models to cloud platforms such as AWS Lambda, AWS ECS and Google Cloud Run, where horizontal scaling can be achieved.

We are also working on an opinionated end-to-end deployment solution on Kubernetes for Kappa. We plan to provide support for horizontal scaling, along with features such as blue-green-deployment, auto-scaling, logging and monitoring integration, etc.


How does Kappa compare with Cortex?
-------------------------------------

Cortex provides CLI tools for creating and managing a Kubernetes cluster on AWS, but does not provide too much help in model packaging and model serving.

Kappa focuses on model serving specific problems. It leaves the cluster management part to the tools that do it really well (such as Kops, Rancher, AWS EKS, Google K8s Engine etc) and focuses instead on managing model serving workloads on an existing K8s cluster.

We are working on an opinionated end-to-end deployment solution on Kubernetes for Kappa. We plan to provide support for horizontal scaling, blue-green-deployment, auto-scaling, logging and monitoring integration, etc.


How does Kappa compare to Seldon?
-----------------------------------

Seldon is a model orchestration framework: only after you've built a model API server and containerize it with docker, Seldon helps scheduling the model containers on a Kubernetes cluster.

Seldon does provide pre-built containers that can load and run a scikit-learn or xgboost saved model, but this approach has lots of limitations. You can use Kappa as a replacement for that, which gives you better performance and more flexibility.


Is there a plan for R support?
------------------------------

Yes, R support is on our roadmap. The original design of Kappa's architecture did consider multi-language support.

It is also possible to invoke R by customizing a Python model artifact class in Kappa, we are working on a tutorial for that.



.. spelling::

    SavedModel
    pre
    jupyter
