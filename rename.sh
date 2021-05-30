#!/bin/bash

message=`find . -name "*BentoService*"`
for i in $message
do
  mv $i ${i/BentoService/MyModel}
done

###################################################################
message=`find . -name "*BentoML*"`
for i in $message
do
  mv $i ${i/BentoML/Kappa}
done

###################################################################
message=`find . -name "*bentoml*"`
for i in $message
do
  mv $i ${i/bentoml/kappa}
done


