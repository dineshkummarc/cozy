#!/bin/sh -e

echo "Testing if shows compile:"

find ./shows \
  -maxdepth 1 \
  -name "*.js" \
| while read file; do
  echo -n "- $file: "

  logfile="/tmp/`basename $file`.log"

  cat shows/tests/show_prefix.js $file shows/tests/show_suffix.js | \
    sed -E -e 's|// +\!code +(.*)$|load\("\1"\)|' | \
    /usr/local/bin/js -s > $logfile 2>&1

  if [ -s "$logfile" ]; then
    cat $logfile
    rm $logfile
    exit 1
  fi

  rm -f $logfile
  echo "OK."
done

echo ""
