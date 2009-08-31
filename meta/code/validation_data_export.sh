#!/bin/sh -e

validation_data_exporter="meta/code/validation_data_export.js"

while read meta_form_path meta_form destination_path; do
  validation_data=`sed \
      -e "s|META_FORM_PATH|$meta_form_path|; s/META_FORM/$meta_form/" \
      $validation_data_exporter \
    | /usr/local/bin/js`

  return_code=$?

  if [ $return_code -ne 0 ]; then
    echo "$validation_data_exporter failed with code $return_code"
    return 1
  fi

  if [ -z "$validation_data" ]; then
    echo "$meta_form_path: empty validation data"
    return 2
  fi

  echo $validation_data > $destination_path
done
