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

load(
  'meta/code/tests/form_with_a_single_labeled_textbox.js',
  'meta/code/tests/form_with_a_single_labeled_select_with_inline_options.js'
);


TestRunner.run(tests);
