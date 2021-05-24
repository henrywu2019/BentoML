Monitoring with Prometheus
==========================


Kappa API server comes with Prometheus support out of the box.
When launching an API model server with Kappa, whether it is running
dev server locally or deployed with docker in the cloud, a "/metrics"
endpoint will always be available for exposing prometheus metrics.

We are working on more documentation around setting up a grafana 
dashboard for monitoring Kappa API model server, adding custom metrics
and other advanced usages for monitoring.
