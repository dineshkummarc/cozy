#!/bin/sh -e

echo "Testing shows:"

tester_script="`basename $0`"
path="`dirname $0`"
scripts="`find $path -depth 1 -type f ! -name $tester_script -name '*.js'`"
js_interpeter="/usr/local/bin/js -w -s"
return_code=0

for script in $scripts; do
  echo -n "- $script: "
  echo -n "var showCode = " |\
    cat - $script |\
    sed -E \
      -e 's|// +\!code +(.*)$|load\("\1"\)|' \
      -e '$a\
        ;showCode();' |\
  $js_interpeter

  if [ $? = 0 ]; then
    echo "OK"
  else
    return_code=1
  fi
done

echo ""
return $return_code
