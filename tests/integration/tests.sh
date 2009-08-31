#!/bin/sh -e

echo "Integration tests: "

interpreter="/usr/local/bin/couchjs"

find tests/integration/ \
  -name "*.js" \
| while read file; do
  echo -n "- $file: "
  loads=`grep ^load $file | sed 's/^load("\(.*\)");/\1/'`
  grep -v ^load $file | cat $loads - | $interpreter -
  echo "OK."
done

echo ""

exit 0
