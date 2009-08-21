#!/bin/sh -e

echo ""

find . \
  \( -name "tests.js" -mindepth 2 \) \
  -or \( -name "tests.sh" \) \
  -or \( -path "./tests/*" -type f ! -name "*.swp" \) \
| while read file; do
  $file
done
