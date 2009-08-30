#!/bin/sh -e

echo -n "Testing the validation data exporter: "

source_file="tmp/tests/form.js"
json_name="meta.form"
destination_path="tmp/tests/form_validation_data.js"

echo "$source_file $json_name $destination_path" | \
meta/code/validation_data_export.sh

return_code=$?

if [ $return_code -ne 0 ]; then
  echo "Exporter script failed with code $return_code"
  return 1
fi

if [ ! -f $destination_path ]; then
  echo -e "\n ---- FAILED!!! ----"
  return 1
fi

#rm -f $destination_path

echo -e "OK.\n"
