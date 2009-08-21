#!/bin/sh -e

echo "Check files for lines longer than 80:"

# refactor to fail (maybe user "for" loop?)

find . \
  ! -path "./vendor/*" \
  ! -path "./.git/*" \
  ! -path "./tmp/*" \
  ! -name "*.swp" \
  -type f \
  -exec awk "length($1) > 80 {OFS=\":\"; print FILENAME, NR, length($1)}" {} \;

echo -e "OK.\n"
