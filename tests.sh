#!/bin/sh -e

find . \
  \( -name "tests.js" -mindepth 2 \) \
  -or \( -name "tests.sh" \) \
  -or \( -path "./tests/*" -type f \) \
| while read file; do
  $file
done
