Deploying to Azure Functions
============================

Azure Functions is an event driven, compute-on-demand cloud service offered by
Microsoft. Its serverless execution model along with the ability to bring your own
container allow users deploy a Kappa API server with full functionality that scales
base on usage.

In this guide, it will deploy an IrisClassifier MyModel to Azure Functions, make a
prediction request to the deployment endpoint, and then delete the deployment. It will
also show how to start an remote GammaService with Azure credential for deploying to
the Azure Functions.

Prerequisites:
--------------

* An signed in Azure CLI tool on your local machine.

    * Install Azure CLI: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest
    * Sign in Azure CLI: https://docs.microsoft.com/en-us/cli/azure/authenticate-azure-cli?view=azure-cli-latest

* Docker is installed and running on your local machine

    * Install instruction: https://docs.docker.com/get-docker/

* Python 3.6 or above and required Pypi packages: `kappa` and `scikit-learn`

    * .. code-block:: bash

            pip install kappa scikit-learn


Azure Functions deployment with Kappa
---------------------------------------

Run the example project from the :doc:`Quickstart guide <../quickstart>` to create an
IrisClassifier MyModel saved bundle for the deployment:

.. code-block:: bash

    git clone git@github.com:kappa/Kappa.git
    pip install -r ./kappa/guides/quick-start/requirements.txt
    python ./kappa/guides/quick-start/main.py


Use Kappa CLI tool to get the information of the IrisClassifier MyModel created
above

.. code-block:: bash

    $ kappa get IrisClassifier:latest

    # Sample output
    {
      "name": "IrisClassifier",
      "version": "20200618124555_310CE0",
      "uri": {
        "type": "LOCAL",
        "uri": "/Users/bozhaoyu/kappa/repository/IrisClassifier/20200618124555_310CE0"
      },
      "MyModelMetadata": {
        "name": "IrisClassifier",
        "version": "20200618124555_310CE0",
        "createdAt": "2020-06-18T19:46:18.675900Z",
        "env": {
          "condaEnv": "name: kappa-IrisClassifier\nchannels:\n- defaults\ndependencies:\n- python=3.7.3\n- pip\n",
          "pipDependencies": "scikit-learn\npandas\nkappa==0.8.1",
          "pythonVersion": "3.7.3",
          "dockerBaseImage": "kappa/model-server:0.8.1"
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
            "inputType": "DataframeInput",
            "docs": "MyModel API",
            "inputConfig": {
              "orient": "records",
              "typ": "frame",
              "dtype": null
            },
            "outputConfig": {
              "cors": "*"
            },
            "outputType": "DefaultOutput",
            "mbMaxLatency": 10000,
            "mbMaxBatchSize": 2000
          }
        ]
      }
    }


======================================
Deploy MyModel to Azure Functions
======================================

Deploy to Azure Functions requires a deployment name, MyModel in name:version
format, and a valid Azure location.  You can find list of Azure locations by calling
command `az account list-locations`.

Kappa will create necessary Azure resources, and then build and deploy your
MyModel as docker image to Azure Functions.

.. code-block:: bash

    $ kappa azure-functions deploy iris-classifier-demo -b IrisClassifier:20200622131825_5788D9 --location westus

    # sample output
    [2020-06-22 13:59:22,881] INFO - ApplyDeployment (iris-classifier-demo, namespace dev) succeeded
    -Successfully created Azure Functions deployment iris-classifier-demo
    {
      "namespace": "dev",
      "name": "iris-classifier-demo",
      "spec": {
        "bentoName": "IrisClassifier",
        "bentoVersion": "20200622131825_5788D9",
        "operator": "AZURE_FUNCTIONS",
        "azureFunctionsOperatorConfig": {
          "location": "westus",
          "premiumPlanSku": "EP1",
          "minInstances": 1,
          "maxBurst": 20,
          "functionAuthLevel": "anonymous"
        }
      },
      "state": {
        "state": "RUNNING",
        "infoJson": {
          "defaultHostName": "dev-iris-classifier-demo.azurewebsites.net",
          "enabledHostNames": [
            "dev-iris-classifier-demo.azurewebsites.net",
            "dev-iris-classifier-demo.scm.azurewebsites.net"
          ],
          "hostNames": [
            "dev-iris-classifier-demo.azurewebsites.net"
          ],
          "id": "/subscriptions/f01c41a2-72ba-480c-99a6-b3241fada0ac/resourceGroups/dev-iris-classifier-demo/providers/Microsoft.Web/sites/dev-iris-classifier-demo",
          "kind": "functionapp,linux,container",
          "lastModifiedTimeUtc": "2020-06-22T20:59:22.350000",
          "location": "West US",
          "name": "dev-iris-classifier-demo",
          "repositorySiteName": "dev-iris-classifier-demo",
          "reserved": true,
          "resourceGroup": "dev-iris-classifier-demo",
          "state": "Running",
          "type": "Microsoft.Web/sites",
          "usageState": "Normal"
        },
        "timestamp": "2020-06-22T20:59:30.428159Z"
      },
      "createdAt": "2020-06-22T20:53:26.607038Z",
      "lastUpdatedAt": "2020-06-22T20:53:26.607073Z"
    }



Use `kappa azure-functions get` command to retrieve the latest status information of
the deployment.

.. code-block:: bash

    $ kappa azure-functions get iris-classifier-demo

    # Sample output
    {
      "namespace": "dev",
      "name": "iris-classifier-demo",
      "spec": {
        "bentoName": "IrisClassifier",
        "bentoVersion": "20200622131825_5788D9",
        "operator": "AZURE_FUNCTIONS",
        "azureFunctionsOperatorConfig": {
          "location": "westus",
          "premiumPlanSku": "EP1",
          "minInstances": 1,
          "maxBurst": 20,
          "functionAuthLevel": "anonymous"
        }
      },
      "state": {
        "state": "RUNNING",
        "infoJson": {
          "defaultHostName": "dev-iris-classifier-demo.azurewebsites.net",
          "enabledHostNames": [
            "dev-iris-classifier-demo.azurewebsites.net",
            "dev-iris-classifier-demo.scm.azurewebsites.net"
          ],
          "hostNames": [
            "dev-iris-classifier-demo.azurewebsites.net"
          ],
          "id": "/subscriptions/f01c41a2-72ba-480c-99a6-b3241fada0ac/resourceGroups/dev-iris-classifier-demo/providers/Microsoft.Web/sites/dev-iris-classifier-demo",
          "kind": "functionapp,linux,container",
          "lastModifiedTimeUtc": "2020-06-22T20:59:22.350000",
          "location": "West US",
          "name": "dev-iris-classifier-demo",
          "repositorySiteName": "dev-iris-classifier-demo",
          "reserved": true,
          "resourceGroup": "dev-iris-classifier-demo",
          "state": "Running",
          "type": "Microsoft.Web/sites",
          "usageState": "Normal"
        },
        "timestamp": "2020-06-22T21:04:59.779887Z"
      },
      "createdAt": "2020-06-22T20:53:26.607038Z",
      "lastUpdatedAt": "2020-06-22T20:53:26.607073Z"
    }

During Azure Functions initialized stage, it takes a while to download the docker image.
Please wait few minutes before visiting your deployment.

With the default authorization setting, your Azure Functions deployment is visible to
all.  Open your browser and visit the URL in hostNames. You should see the web UI
provided by Kappa API server.

To test the prediction API in the Azure Functions deployment, you could use the web UI
mentioned above or you could make a `curl` request to the endpoint.


.. code-block:: bash

    $  curl -i --request POST --header "Content-Type: application/json" \
        --data '[[5.1, 3.5, 1.4, 0.2]]' \
        "https://dev-iris-classifier-demo.azurewebsites.net/predict"

    # Sample output

    HTTP/1.1 200 OK
    Content-Length: 3
    Content-Type: application/json
    Server: Kestrel
    Request-Context: appId=cid-v1:1f23e525-f1cd-471a-ae47-e313f784b99e
    request_id: 525a5c94-41a8-4d9f-9259-0216d3ceb465
    Date: Mon, 22 Jun 2020 21:19:40 GMT

    [0]%


Use `kappa azure-functions list` to display all active deployments to Azure Functions

.. code-block:: bash

    $ kappa azure-functions list

    # Sample output
    NAME                  NAMESPACE    PLATFORM         MODEL_VERSION                         STATUS    AGE
    iris-classifier-demo  dev          azure-functions  IrisClassifier:20200622131825_5788D9  running   26 minutes and 24.49 seconds



==========================================
Update existing Azure Functions deployment
==========================================

To update an active Azure Function deployment use `kappa azure-functions update`
command.

.. code-block: bash

    $ kappa azure-functions update iris-classifier-demo -b IrisClassifier:new_version


=================================
Remove Azure Functions deployment
=================================

.. code-block:: bash

    $ kappa azure-functions delete iris-classifier-demo


=====================================================================
Deploy and manage Azure Functions deployment with remote GammaService
=====================================================================

Kappa recommends to use remote GammaService for managing and deploying MyModel
when you are working in a team. To deploy Azure Functions in remote GammaService, you
need to provide the Azure credential for it.

After Sign in with Azure CLI in your local machine, you should be able to find the
`accessTokens.json` in your Azure directory. Now start the Kappa GammaService docker
image and mount that `accessTokens.json` file to the running container.

.. code-block:: bash

    $ docker run -v ~/.azure/accessTokens.json:/home/.azure/accessTokens.json -p 50051:50051 -p 3000:3000 kappa/gamma-service:latest


After the GammaService docker container is running, in another terminal window, set
gamma service address with `kappa config set`

.. code-block:: bash

    $ kappa config set gamma_service.url=0.0.0.0:50051


============================================================
Deploy and manage Azure Functions deployment with Kubernetes
============================================================

Create a Kubernetes secret base on the `accessTokens.json`

.. code-block:: bash

    $ kubectl create secret generic azure-access-tokens --from-file=~/.azure/accessTokens.json


Confirm the secrete is created successfully by using `kubectl describe` command

.. code-block:: bash

    $kubectl describe secret azure-access-tokens



Copy and paste the code below into a file named `gamma-service.yaml`

.. code-block:: yaml

    apiVersion: v1
    kind: Service
    metadata:
      labels:
        app: gamma-service
      name: gamma-service
    spec:
      ports:
      - name: grpc
        port: 50051
        targetPort: 50051
      - name: web
        port: 3000
        targetPort: 3000
      selector:
        app: gamma-service
      type: LoadBalancer
    ---
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      labels:
        app: gamma-service
      name: gamma-service
    spec:
      selector:
        matchLabels:
          app: gamma-service
      template:
        metadata:
          labels:
            app: gamma-service
        spec:
          containers:
          - image: kappa/gamma-service
            imagePullPolicy: IfNotPresent
            name: gamma-service
            ports:
            - containerPort: 50051
            - containerPort: 3000
            volumeMounts:
            - mountPath: "/home/.azure"
              name: azure-access-tokens
              readOnly: true
          volumes:
          - name: azure-access-tokens
            secret:
                secretName: azure-access-tokens


Run `kubectl apply` command to deploy Gamma service to the Kubernetes cluster

.. code-block:: bash

    $ kubectl apply -f gamma-service.yaml


.. spelling::

    hostNames
