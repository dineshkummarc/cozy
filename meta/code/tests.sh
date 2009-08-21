#!/bin/sh

echo -n "Testing the validation data exporter: "

meta_form_path="tmp/tests/form.js"
meta_form="meta.form"
destination_path="tmp/tests/form_validation_data.js"

if [ -f $destination_path ]; then
  rm $destination_path
fi

meta/code/validation_data_export.sh $meta_form_path $meta_form $destination_path

if [ ! -f $destination_path ]; then
  echo -e "\n ---- FAILED!!! ----"
  return 1
else
  echo -e "OK\n"
  return 0
fi
