#!/bin/sh -e

echo "Check source files for TO-DOs:"

return_code=0
IFS_BAK="$IFS"
IFS="
"
find . \
    ! -path "./vendor/*" \
    ! -path "./.git/*" \
    ! -path "./tmp/*" \
    ! -name "*.swp" \
    -type f | \
while read file; do
  todo_count=`grep -c TODO "$file"`

  if [ $todo_count -ne 0 ]; then
    echo "$file: $todo_count"
    return_code=1;
  fi
done

IFS=$IFS_BAK

if [ $return_code -eq 0 ]; then
  echo "OK."
fi

echo ""
return $return_code
