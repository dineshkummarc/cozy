#!/bin/sh -e

echo -n "Check files for TO${NOOP}DOs and lines longer than 80: "

find . \
  ! -path "./vendor/*" \
  ! -path "./.git/*" \
  ! -path "./tmp/*" \
  ! -path "./_attachments/validation_data/*" \
  -type f \
  ! -name "./tests/check_todos_and_line_length.sh" \
  ! -name "*.swp" \
| while read file; do
  long_lines=`awk "length($1) > 80 {OFS=\":\"; print NR, length($1)}" $file`

  if [ -n "$long_lines" ]; then
    echo -e "\n$file:\n  $long_lines"
    echo -e "\n---- FAILED!!! ----"
    exit 1
  fi

  set +e
  todo_count=`grep -c TO${NOOP}DO "$file"`
  set -e

  if [ $todo_count -ne 0 ]; then
    echo -e "\n$file has TO${NOOP}DOs"
    echo -e "\n---- FAILED!!! ----"
    exit 1
  fi
done

echo -e "OK.\n"
