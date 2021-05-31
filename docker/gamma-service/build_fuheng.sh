#!/bin/bash

docker build -t iad.ocir.io/axhheqi2ofpb/kappa/gamma-service:dev .

# docker push iad.ocir.io/axhheqi2ofpb/kappa/gamma-service:dev

# docker run -it --rm -d -p 5000:5000 -p 5555:5555 -v /home/ubuntu/.oci:/root/.oci iad.ocir.io/axhheqi2ofpb/kappa/gamma-service:dev
