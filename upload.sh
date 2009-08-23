#!/bin/sh -e

echo -n "Exporting validation data: "
meta/code/validation_data_export.sh \
    "meta/forms/book/form.js" \
    "meta.form" \
    "_attachments/validation_data/book.js"
echo "OK"

./tests.sh
couchapp push
