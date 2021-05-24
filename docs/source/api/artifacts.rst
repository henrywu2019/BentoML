Base Artifact
=============

All Kappa artifacts are inherited from the BentoServiceArtifact base class:

.. autoclass:: kappa.service.artifacts.BentoServiceArtifact


In a BentoService#artifacts returns an ArtifactCollection instance:

.. autoclass:: kappa.service.artifacts.ArtifactCollection


Common Artifacts
++++++++++++++++

PickleArtifact

.. autoclass:: kappa.service.artifacts.common.PickleArtifact

JSONArtifact

.. autoclass:: kappa.service.artifacts.common.JSONArtifact

TextFileArtifact

.. autoclass:: kappa.service.artifacts.common.TextFileArtifact


.. spelling::

    deserialization
    deserializing
    stdlib
