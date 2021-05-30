.. _kappa-api-adapters-label:

API InputAdapters
=================

BaseInputAdapter
++++++++++++++++
.. autoclass:: kappa.adapters.BaseInputAdapter

DataframeInput
++++++++++++++
.. autoclass:: kappa.adapters.DataframeInput

JsonInput
+++++++++
.. autoclass:: kappa.adapters.JsonInput

TfTensorInput
+++++++++++++
.. autoclass:: kappa.adapters.TfTensorInput

ImageInput
++++++++++
.. autoclass:: kappa.adapters.ImageInput

StringInput
+++++++++++
.. autoclass:: kappa.adapters.StringInput

MultiImageInput
+++++++++++++++
.. autoclass:: kappa.adapters.MultiImageInput

AnnotatedImageInput
+++++++++++++++++++
.. autoclass:: kappa.adapters.AnnotatedImageInput

FileInput
+++++++++
.. autoclass:: kappa.adapters.FileInput

MultiFileInput
++++++++++++++
.. autoclass:: kappa.adapters.MultiFileInput

ClipperInput
++++++++++++

A special group of adapters that are designed to be used when deploying with `Clipper <http://clipper.ai/>`__.

.. autoclass:: kappa.adapters.ClipperBytesInput
.. autoclass:: kappa.adapters.ClipperFloatsInput
.. autoclass:: kappa.adapters.ClipperIntsInput
.. autoclass:: kappa.adapters.ClipperDoublesInput
.. autoclass:: kappa.adapters.ClipperStringsInput


API OutputAdapters
==================

BaseOutputAdapter
+++++++++++++++++
.. autoclass:: kappa.adapters.BaseOutputAdapter

DefaultOutput
+++++++++++++
The default output adapter is used when there's no `output` specified in an Inference
API. It ensembles multiple common output adapter and dynamically choose one base on the
return value of the user-defined inference API callback function.

.. autoclass:: kappa.adapters.DefaultOutput

DataframeOutput
+++++++++++++++
.. autoclass:: kappa.adapters.DataframeOutput

TfTensorOutput
++++++++++++++
.. autoclass:: kappa.adapters.TfTensorOutput

JsonOutput
++++++++++
.. autoclass:: kappa.adapters.JsonOutput


Adapter Roadmap
===============

The following adapter types are on our roadmap:

* NpNdarrayInputAdapter
* NpNdarrayOutputAdapter
* FileOutputAdapter
* ImageOutputAdapter
* MultiFileOutputAdapter

.. spelling::

    dtype
    dtypes
    jsons
    serializable
    PIL
    apiserver
    jpg
    png
    jpeg
    webp
    bmp
    pilmode
    cURL
    Ints
    stdout
    imageio
    numpy
    ndarray
    charset

