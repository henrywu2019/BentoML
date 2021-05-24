Deploying to KNative
====================

Knative is kubernetes based platform to deploy and manage serverless workloads. It is a
solution for deploying ML workload that requires more computing power that abstracts away
infrastructure management and without worry about vendor lock.

This guide demonstrates how to serve a scikit-learn based iris classifier model with
Kappa on a KNative cluster. The same deployment steps are also applicable for models
trained with other machine learning frameworks, see more Kappa examples :doc:`here <../examples>`.

Prerequisites
-------------

* A kubernetes cluster.

    * `minikube` is the recommended way to run Kubernetes locally:: https://kubernetes.io/docs/tasks/tools/install-minikube/

    * Kubernetes guide: https://kubernetes.io/docs/setup/

* Knative with istio as network layer

    * Knative install instruction: https://knative.dev/docs/install/any-kubernetes-cluster/

    * Install istio for knative: https://knative.dev/docs/install/installing-istio/

* Python 3.6 or above and install required packages: `kappa` and `scikit-learn`

    * .. code-block:: bash

            pip install kappa scikit-learn


Knative deployment with Kappa
-------------------------------

Run the example project from the :doc:`quick start guide <../quickstart>` to create the
Kappa saved bundle for deployment:


.. code-block:: bash

    git clone git@github.com:kappa/Kappa.git
    pip install -r ./kappa/guides/quick-start/requirements.txt
    python ./kappa/guides/quick-start/main.py

Verify the saved bundle created:

.. code-block:: bash

    $ kappa get IrisClassifier:20200121141808_FE78B5

    # Sample output

    {
      "name": "IrisClassifier",
      "version": "20200121141808_FE78B5",
      "uri": {
        "type": "LOCAL",
        "uri": "/Users/bozhaoyu/kappa/repository/IrisClassifier/20200121141808_FE78B5"
      },
      "bentoServiceMetadata": {
        "name": "IrisClassifier",
        "version": "20200121141808_FE78B5",
        "createdAt": "2020-01-21T22:18:25.079723Z",
        "env": {
          "condaEnv": "name: kappa-IrisClassifier\nchannels:\n- defaults\ndependencies:\n- python=3.7.3\n- pip\n",
          "pipDependencies": "kappa==0.5.8\nscikit-learn",
          "pythonVersion": "3.7.3"
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
            "docs": "BentoService API"
          }
        ]
      }
    }


The Kappa saved bundle created can now be used to start a REST API Server hosting the
BentoService and available for sending test request:

.. code-block:: bash

    # Start Kappa API server:
    kappa serve IrisClassifier:latest


.. code-block:: bash

    # Send test request:
    curl -i \
      --header "Content-Type: application/json" \
      --request POST \
      --data '[[5.1, 3.5, 1.4, 0.2]]' \
      http://localhost:5000/predict


======================================
Deploy Kappa model server to KNative
======================================

Kappa provides a convenient way to containerize the model API server with Docker:

    1. Find the SavedBundle directory with `kappa get` command

    2. Run docker build with the SavedBundle directory which contains a generated Dockerfile

    3. Run the generated docker image to start a docker container serving the model

.. code-block:: bash

    # Find the local path of the latest version IrisClassifier saved bundle
    saved_path=$(kappa get IrisClassifier:latest --print-location --quiet)

    # Replace {docker_username} with your Docker Hub username
    docker build -t {docker_username}/iris-classifier $saved_path
    docker push {docker_username}/iris-classifier


Make sure Knative serving components are running.

.. code-block:: bash

    $ kubectl get pods --namespace knative-serving

    # Sample output

    NAME                                READY   STATUS    RESTARTS   AGE
    activator-845b77cbb5-thpcw          2/2     Running   0          4h33m
    autoscaler-7fc56894f5-f2vqc         2/2     Running   0          4h33m
    controller-7ffb84fd9c-699pt         2/2     Running   2          4h33m
    networking-istio-7fc7f66675-xgfvd   1/1     Running   0          4h32m
    webhook-8597865965-9vp25            2/2     Running   1          4h33m


Copy the following service definition into `service.yaml` and replace `{docker_username}`
with your docker hub username. The Knative service is directing livenessProbe and
readyinessProbe to the /healthz endpoint on BentoService.


.. code-block:: yaml

    apiVersion: serving.knative.dev/v1
    kind: Service
    metadata:
      name: iris-classifier
      namespace: kappa
    spec:
      template:
        spec:
          containers:
            - image: docker.io/{docker_username}/iris-classifier
              ports:
              - containerPort: 5000
              livenessProbe:
                httpGet:
                  path: /healthz
                initialDelaySeconds: 3
                periodSeconds: 5
              readinessProbe:
                httpGet:
                  path: /healthz
                initialDelaySeconds: 3
                periodSeconds: 5
                failureThreshold: 3
                timeoutSeconds: 60



Create kappa namespace and then deploy BentoService to Knative with kubectl apply command.

.. code-block:: bash

    $ kubectl create namespace kappa
    $ kubectl apply -f service.yaml

    # Sample output

    service.serving.knative.dev/iris-classifier created



View the status of the deployment with `kubectl get ksvc` command:

.. code-block:: bash

    $ kubectl get ksvc --all-namespaces

    # Sample output

    NAMESPACE   NAME              URL                                          LATESTCREATED           LATESTREADY             READY   REASON
    kappa     iris-classifier   http://iris-classifier.kappa.example.com   iris-classifier-7k2dv   iris-classifier-7k2dv   True


===========================================
Validate prediction server with sample data
===========================================


Find the cluster IP address and exposed port of the deployed Knative service, in the context of minikube:

.. code-block::

    $ minikube ip

    # Sample output

    192.168.64.4

    $ kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http2")].nodePort}

    # Sample output

    31871


With the IP address and port, Use `curl` to make an HTTP request to the deployment in Knative:

.. code-block:: bash

    $ curl -v -i \
        --header "Content-Type: application/json" \
        --header "Host: iris-classifier.kappa.example.com" \
        --request POST \
        --data '[[5.1, 3.5, 1.4, 0.2]]' \
        http://192.168.64.4:31871/predict

    # Sample output

    Note: Unnecessary use of -X or --request, POST is already inferred.
    *   Trying 192.168.64.4...
    * TCP_NODELAY set
    * Connected to 192.168.64.4 (192.168.64.4) port 31871 (#0)
    > POST /predict HTTP/1.1
    > Host: iris-classifier.kappa.example.com
    > User-Agent: curl/7.58.0
    > Accept: */*
    > Content-Type: application/json
    > Content-Length: 22
    >
    * upload completely sent off: 22 out of 22 bytes
    < HTTP/1.1 200 OK
    HTTP/1.1 200 OK
    < content-length: 3
    content-length: 3
    < content-type: application/json
    content-type: application/json
    < date: Wed, 01 Apr 2020 01:24:58 GMT
    date: Wed, 01 Apr 2020 01:24:58 GMT
    < request_id: 0506467b-75d9-4fb5-9d7e-2d2855fc6028
    request_id: 0506467b-75d9-4fb5-9d7e-2d2855fc6028
    < server: istio-envoy
    server: istio-envoy
    < x-envoy-upstream-service-time: 12
    x-envoy-upstream-service-time: 12

    <
    * Connection #0 to host 192.168.64.4 left intact
    [0]%


===================
Clean up deployment
===================

.. code-block:: bash

    kubectl delete namespace kappa


.. spelling::

    knative
