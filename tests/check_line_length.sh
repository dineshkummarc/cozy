#!/bin/sh

echo ""
echo "Check files for lines longer than 80:"

find . \
  ! -path "./vendor/*" \
  ! -path "./.git/*" \
  ! -path "./tmp/*" \
  ! -name "*.swp" \
  -type f \
  -exec awk "length($1) > 80 {OFS=\":\"; print FILENAME, NR, length($1)}" {} \;

echo "OK."
