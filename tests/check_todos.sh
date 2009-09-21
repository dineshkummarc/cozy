#!/bin/sh

# we do not want (and need) -e because find inherits exit code from grep

echo -n "Check files for TODOs: "

files=`find . \
  ! -path "$0" \
  ! -path "./vendor/*" \
  ! -path "./.git/*" \
  ! -path "./tmp/*" \
  ! -path "./_attachments/validation_data/*" \
  -type f \
  ! -name "*.swp" \
  -exec grep TODO {} +`

if [ -n "$files" ]; then
  echo -e "\n$files\n\n---- FAILED!!! ----"
  exit 1
fi

echo -e "OK.\n"
exit 0
