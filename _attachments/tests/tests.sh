#!/bin/sh

echo -n "Testing if the acceptance tests compile: "

logfile="/tmp/acceptance_test_compilation.log"

find ./_attachments/tests/ \
  ! -name "*.swp" \
  -name "*.js" \
  -exec js -s -f _attachments/qunit/cozy.js -f {} + > $logfile 2>&1

if [ -s "$logfile" ]; then
  echo ""
  uniq $logfile
  rm $logfile
  echo -e "\n---- FAILED!!! ----"
  exit 1
fi

rm $logfile
echo -e "OK.\n"
