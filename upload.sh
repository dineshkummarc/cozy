#!/bin/sh -e

echo -n "Exporting validation data: "
meta/code/validation_data_export.sh < meta/code/validation_data_export.txt
echo "OK"

./tests.sh
couchapp push
