#!/usr/local/bin/js -w -s

load(
  "lib/json_html/JsonHtml.js",
  "vendor/json2.js",
  "meta/code/buildForm.js",
  "meta/code/validation.js",
  "META_FORM_PATH"
);

print(JSON.stringify(meta.getValidationData(META_FORM)));
