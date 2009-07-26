#!/bin/sh

echo ""
echo "Testing shows:"

tester_script="`basename $0`"
path="`dirname $0`"
scripts="`find $path -depth 1 -type f ! -name $tester_script -name '*.js'`"
js_interpeter="/usr/local/bin/js -w -s"

for script in $scripts; do
  echo -n "- $script: "
  /bin/echo -n "var showCode = " |\
    /bin/cat - $script |\
    /usr/bin/sed -E \
      -e 's|// +\!code +(.*)$|load\("\1"\)|' \
      -e '$a\
        ;showCode();' |\
  $js_interpeter

  if [ $? = 0 ]; then
    echo OK
  fi
done

echo ""
