#!/bin/sh -e

echo -n "Check files lines longer than 80: "

files=`find . \
  ! -path "./vendor/*" \
  ! -path "./.git/*" \
  ! -path "./tmp/*" \
  ! -path "./_attachments/validation_data/*" \
  -type f \
  ! -name "*.swp" \
  -exec awk "length($1) > 80 {OFS=\":\"; print FILENAME, FNR, length($1)}" {} +`

if [ -n "$files" ]; then
  echo -e "\n$files\n\n---- FAILED!!! ----"
  exit 1
fi

echo -e "OK.\n"
exit 0
