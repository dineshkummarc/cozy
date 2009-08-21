#!/bin/sh -e

echo -n "Testing the validation data exporter: "

meta_form_path="tmp/tests/form.js"
meta_form="meta.form"
destination_path="tmp/tests/form_validation_data.js"

if [ -f $destination_path ]; then
  rm $destination_path
fi

meta/code/validation_data_export.sh $meta_form_path $meta_form $destination_path

return_code=$?

if [ $return_code -ne 0 ]; then
  echo "Exporter script failed with code $return_code"
  return 1
fi

if [ ! -f $destination_path ]; then
  echo -e "\n ---- FAILED!!! ----"
  return 1
fi

echo -e "OK.\n"
