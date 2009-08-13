#!/usr/local/bin/js -w -s

load(
  "lib/test_runner/TestRunner.js",
  "lib/json_html/JsonHtml.js",
  "vendor/json2.js",
  "meta/code/buildForm.js"
);

print("Testing meta.buildForm():");

/*
 * Add a test object to the tests array.
 * DRY it up customizing TestRunner.testDefaults.
 */

TestRunner.testDefaults = {
  context: meta,
  method: function(metaForm) {
    return JSON.stringify(meta.buildForm(metaForm));
  },
  expected: true
};

var tests = [];
var dir = 'meta/code/tests/';

load(
  dir + 'get_json_element_tag_name.js',
  dir + 'form_with_a_single_labeled_textbox.js',
  dir + 'form_with_a_single_labeled_multiselect_with_inline_options.js',
  dir + 'form_with_labeled_radioboxes.js'
);


TestRunner.run(tests);
