message=`find . -name "*gamma*"`

for i in $message
do
  mv $i ${i/gamma/gamma}
done
