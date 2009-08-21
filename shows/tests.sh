#!/bin/sh -e

echo "Testing shows:"

find shows \
  -depth 1 \
  ! -name tests.sh \
  -name '*.js' \
| while read file; do
  echo -n "- $file: "

  cat shows/tests/show_prefix.js $file shows/tests/show_suffix.js | \
    sed -E -e 's|// +\!code +(.*)$|load\("\1"\)|' | \
    /usr/local/bin/js -w -s

  echo "OK."
done

echo ""
