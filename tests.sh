#!/bin/sh -e

echo -e "\nRunning tests:\n"

find . \
  -mindepth 2 \
  -type f \
  ! -name "*.swp" \
  -and \( \
    -name "tests.sh" \
    -or -name "tests.js" \
    -or -path "./tests/*" \
  \) \
| while read file; do
  $file
done

echo -e "All tests passed.\n"
