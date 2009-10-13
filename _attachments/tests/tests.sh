#!/bin/sh -e

echo -n "Testing if the acceptance tests compile: "

result=`find ./_attachments/tests/ \
  ! -name "*.swp" \
  -name "*.js" \
  -exec js -s -f _attachments/qunit/jquery.sandbox.js -f {} +`

if [ -n "$result" ]; then
  echo -e "\n$result\n\n---- FAILED!!! ----"
  exit 1
fi

echo -e "OK.\n"
