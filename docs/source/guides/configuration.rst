.. _configuration-page:

Configuration
=============

Kappa starts with an out-of-the-box coniguration that works for common use cases. For advanced users, many
features can be customized through configuration. Both Kappa CLI and Python APIs can be customized
by the configuration. Configuration is best used for scenarios where the customizations can be specified once 
and applied to the entire team.

.. note::
    Kappa configuration underwent a major redesign in release 0.13.0. Previous configuration set through the
    `kappa config` CLI command is no longer compatible with the configuration releases in 0.13.0 and above.
    Please see legacy configuration property mapping table below to upgrade configuration to the new format.

Kappa configuration is defined by a YAML file placed in a directory specified by the `BENTOML_CONFIG`
environment variable. By default, configurations defined in `$BENTOML_HOME/kappa.yml` is applied if present.
The example below starts the bento server with configuration defined in `~/bentoml_configuration.yml`

.. code-block:: shell

    $ BENTOML_CONFIG=~/bentoml_configuration.yml kappa serve-gunicorn IrisClassifier:latest

Users only need to specify a partial configuration with only the properties they wish to customize instead 
of a full configuration schema. In the example below, the microbatching workers count is overridden to 4. 
Remaining properties will take their defaults values.

.. code-block:: yaml
    :caption: Kappa Configuration

    bento_server:
        microbatch:
            workers: 4

Throughout the Kappa documentation, features that are customizable through configuration are demonstrated
like the example above. For a full configuration schema including all customizable properties, refer to 
the Kappa configuration template defined in
`default_bentoml.yml <https://github.com/kappa/Kappa/blob/master/kappa/configuration/default_bentoml.yml>`_.

Docker Deployment
-----------------

Configuration file can be mounted to Docker container using the `-v` option.

.. code-block:: shell

    $ docker run -v /local/path/kappa.yml:/user/home/kappa/kappa.yml

Configuration Priority
----------------------

Some customizable properties in the configuration can also be specified in the Kappa CLI or Python API
parameters. Values specified through Kappa CLI and Python API parameters will always take precedence over
the values defined in the configuration.

Legacy Property Mapping
-----------------------

Starting Kappa release `0.13.0`, the legacy `kappa.cfg` based configuration is deprecated and no longer
compatible with the YAML based configuration system. Please refer to the mapping below to migrate to the 
YAML based configuration.

+------------------------------------------------------------+-----------------------------------------+
| CFG Properties                                             | YAML Properties                         |
+---------------+--------------------------------------------+-----------------------------------------+
| Section       | Key                                        | Key                                     |
+---------------+--------------------------------------------+-----------------------------------------+
| core          | bentoml_deploy_version                     | bento_bundle.deployment_version         |
+---------------+--------------------------------------------+-----------------------------------------+
| core          | default_docker_base_image                  | bento_bundle.default_docker_base_image  |
+---------------+--------------------------------------------+-----------------------------------------+
| instrument    | default_namespace                          | bento_server.metrics.namespace          |
+---------------+--------------------------------------------+-----------------------------------------+
| instrument    | prometheus_multiproc_dir                   | DEPRECATED                              |
+---------------+--------------------------------------------+-----------------------------------------+
| logging       | logging_config                             | See Logging guide                       |
+---------------+--------------------------------------------+-----------------------------------------+
| logging       | console_logging_enabled                    | logging.console.enabled                 |
+---------------+--------------------------------------------+-----------------------------------------+
| logging       | file_logging_enabled                       | logging.file.enabled                    |
+---------------+--------------------------------------------+-----------------------------------------+
| logging       | level                                      | logging.level                           |
+---------------+--------------------------------------------+-----------------------------------------+
| logging       | log_format                                 | DEPRECATED                              |
+---------------+--------------------------------------------+-----------------------------------------+
| logging       | dev_log_format                             | DEPRECATED                              |
+---------------+--------------------------------------------+-----------------------------------------+
| logging       | base_log_dir                               | logging.file.directory                  |
+---------------+--------------------------------------------+-----------------------------------------+
| logging       | prediction_log_filename                    | DEPRECATED                              |
+---------------+--------------------------------------------+-----------------------------------------+
| logging       | feedback_log_filename                      | DEPRECATED                              |
+---------------+--------------------------------------------+-----------------------------------------+
| logging       | gamma_web_server_log_filename              | gamma.logging.path                      |
+---------------+--------------------------------------------+-----------------------------------------+
| gamma_service | url                                        | gamma.remote.url                        |
+---------------+--------------------------------------------+-----------------------------------------+
| gamma_service | s3_signature_version                       | gamma.repository.s3.signature_version   |
+---------------+--------------------------------------------+-----------------------------------------+
| gamma_service | repository_base_url                        | See Repository Base URL section         |
+---------------+--------------------------------------------+-----------------------------------------+
| gamma_service | db_url                                     | gamma.database.url                      |
+---------------+--------------------------------------------+-----------------------------------------+
| gamma_service | s3_endpoint_url                            | gamma.repository.s3.endpoint_url        |
+---------------+--------------------------------------------+-----------------------------------------+
| gamma_service | default_namespace                          | gamma.namespace                         |
+---------------+--------------------------------------------+-----------------------------------------+
| gamma_service | tls_root_ca_cert                           | gamma.remote.tls.root_ca_cert           |
+---------------+--------------------------------------------+-----------------------------------------+
| gamma_service | tls_client_key                             | gamma.remote.tls.client_key             |
+---------------+--------------------------------------------+-----------------------------------------+
| gamma_service | tls_client_cert                            | gamma.remote.tls.client_cert            |
+---------------+--------------------------------------------+-----------------------------------------+
| gamma_service | access_token                               | gamma.remote.access_token               |
+---------------+--------------------------------------------+-----------------------------------------+
| gamma_service | access_token_header                        | gamma.remote.access_token_header        |
+---------------+--------------------------------------------+-----------------------------------------+
| apiserver     | default_port                               | bento_server.port                       |
+---------------+--------------------------------------------+-----------------------------------------+
| apiserver     | enable_metrics                             | bento_server.metrics.enabled            |
+---------------+--------------------------------------------+-----------------------------------------+
| apiserver     | enable_feedback                            | bento_server.feedback.enabled           |
+---------------+--------------------------------------------+-----------------------------------------+
| apiserver     | default_timeout                            | bento_server.timeout                    |
+---------------+--------------------------------------------+-----------------------------------------+
| apiserver     | default_max_request_size                   | bento_server.max_request_size           |
+---------------+--------------------------------------------+-----------------------------------------+
| apiserver     | default_image_input_accept_file_extensions | adapters.image_input.default_extensions |
+---------------+--------------------------------------------+-----------------------------------------+
| apiserver     | default_gunicorn_workers_count             | bento_server.workers                    |
+---------------+--------------------------------------------+-----------------------------------------+
| gamma         | bento_uri_default_expiration               | gamma.repository.s3.expiration OR       |
|               |                                            | gamma.repository.gcs.expiration         |
+---------------+--------------------------------------------+-----------------------------------------+

Repository Base URL
^^^^^^^^^^^^^^^^^^^

The repository base URL property has been broken down into properties for the individual repository 
implementations, instead of being derived automatically.

For file system, what was previously specified as `/user/home/kappa/repository` should defined as
the following in YAML.

.. code-block:: yaml
    :caption: Kappa Configuration

    gamma:
        repository:
            type: file_system
            file_system:
                directory: /user/home/kappa/repository

For S3 or GCS, what was previously specified as `s3://s3_address` should defined as the following in 
YAML.

.. code-block:: yaml
    :caption: Kappa Configuration

    gamma:
        repository:
            type: s3
            s3:
                url: s3://s3_address
