#!/usr/local/bin/js -w -s

load(
  "lib/test_runner/TestRunner.js",
  "lib/utilities/Utilities.js",
  "lib/json_html/JsonHtml.js",
  "vendor/json2.js",
  "meta/code/buildForm.js",
  "meta/code/validation.js"
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
  dir + 'form_with_a_textbox_checkbox_button.js',
  dir + 'form_with_a_multiselect_with_inline_options.js',
  dir + 'form_with_radioboxes.js',
  dir + 'label_with_rich_content.js',
  dir + 'validation_data_externalization.js',
  dir + 'fails_if_the_field_does_not_have_a_type_property.js'
);


var exit_code = TestRunner.run(tests);

quit(exit_code);
