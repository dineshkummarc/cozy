#!/bin/sh -e

echo -e "\nRunning tests:\n"

find . \
  \( -name "tests.js" -mindepth 2 \) \
  -or \( -name "tests.sh" \) \
  -or \( -path "./tests/*" -type f -perm +u+x ! -name "*.swp" \) \
| while read file; do
  $file
done

echo -e "All tests passed.\n"
