message=`find . -name "*bentoml*"`

for i in $message
do
  mv $i ${i/bentoml/kappa}
done
