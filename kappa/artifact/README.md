# Deprecated

The `kappa.artifact` module is now deprecated.

Use`kappa.frameworks.*` and `kappa.service.artifacts.*` instead.

e.g.:
```
from kappa.frameworks.sklearn import SklearnModelArtifact
from kappa.service.artifacts import BentoServiceArtifact
from kappa.service.artifacts.common import PickleArtifact
```
