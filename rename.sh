message=`find . -name "*BentoService*"`

for i in $message
do
  mv $i ${i/BentoService/MyModel}
done
