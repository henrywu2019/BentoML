BentoService API
================

.. _bentoml-bentoservice-label:

BentoService
++++++++++++

.. autoclass:: kappa.BentoService

  .. automethod:: kappa.BentoService.name

  .. automethod:: kappa.BentoService.versioneer

  .. automethod:: kappa.BentoService.set_version

  .. autoattribute:: kappa.BentoService.inference_apis

  .. autoattribute:: kappa.BentoService.artifacts


  .. _bentoml-bentoservice-pack-label:

  .. method:: pack(name, *args, *kwargs)

        BentoService#pack method is used for packing trained model instances with a
        BentoService instance and make it ready for BentoService#save.

        :param name: name of the declared model artifact
        :param args: args passing to the target model artifact to be packed
        :param kwargs: kwargs passing to the target model artifact to be packed
        :return: this BentoService instance

  .. automethod:: kappa.BentoService.pack
    :noindex:

  .. _bentoml-bentoservice-save-label:

  .. automethod:: kappa.BentoService.save


  .. _bentoml-bentoservice-save-to-dir-label:

  .. automethod:: kappa.BentoService.save_to_dir


api
+++
.. autofunction:: kappa.api

.. _bentoml-env-label:

env
+++
.. autofunction:: kappa.env

artifacts
+++++++++
.. autofunction:: kappa.artifacts

ver
+++
.. autofunction:: kappa.ver

save
++++
.. autofunction:: kappa.save

load
++++
.. autofunction:: kappa.load

save_to_dir
+++++++++++
.. autofunction:: kappa.save_to_dir

load_from_dir
+++++++++++++
.. autofunction:: kappa.load_from_dir

.. _bentoml-load-label:

.. spelling::

    inferencing
    docstring
    env
    pre
    yml
    ver
    dir
