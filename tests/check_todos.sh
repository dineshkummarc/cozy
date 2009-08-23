#!/bin/sh -e

echo -n "Check files for TO${NOOP}DOs: "

files=`find . \
  ! -path "./vendor/*" \
  ! -path "./.git/*" \
  ! -path "./tmp/*" \
  ! -path "./_attachments/validation_data/*" \
  -type f \
  ! -name "*.swp" \
  -exec grep TO${NOOP}DO {} +`

if [ -n "$files" ]; then
  echo -e "\n$files\n\n---- FAILED!!! ----"
  exit 1
fi

echo -e "OK.\n"
exit 0
