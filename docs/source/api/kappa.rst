MyModel API
================

.. _bentoml-MyModel-label:

MyModel
++++++++++++

.. autoclass:: kappa.MyModel

  .. automethod:: kappa.MyModel.name

  .. automethod:: kappa.MyModel.versioneer

  .. automethod:: kappa.MyModel.set_version

  .. autoattribute:: kappa.MyModel.inference_apis

  .. autoattribute:: kappa.MyModel.artifacts


  .. _bentoml-MyModel-pack-label:

  .. method:: pack(name, *args, *kwargs)

        MyModel#pack method is used for packing trained model instances with a
        MyModel instance and make it ready for MyModel#save.

        :param name: name of the declared model artifact
        :param args: args passing to the target model artifact to be packed
        :param kwargs: kwargs passing to the target model artifact to be packed
        :return: this MyModel instance

  .. automethod:: kappa.MyModel.pack
    :noindex:

  .. _bentoml-MyModel-save-label:

  .. automethod:: kappa.MyModel.save


  .. _bentoml-MyModel-save-to-dir-label:

  .. automethod:: kappa.MyModel.save_to_dir


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
