print("Testing Meta.buildField:");

/*
 * Add a test object to the tests array.
 * DRY it up customizing TestRunner.testDefaults.
 */

TestRunner.testDefaults = {
  context: Meta,
  method: function(id, metaData) {
    return JSON.stringify(Meta.buildField(id, metaData));
  }
};

var path = "lib/meta/tests/buildField/";
var tests = [];

load(
  path + "text_input_with_a_label.js",
  path + "disabled_text_input.js",
  path + "read_only_text_input.js",
  path + "text_input_with_a_default_value.js",
  path + "password_input_with_a_label.js",
  path + "disabled_password_input.js",
  path + "radio.js",
  path + "radio_with_a_default_option_selected.js",
  path + "radio_with_a_disabled_option.js",
  path + "checkbox.js",
  path + "disabled_checkbox.js",
  path + "checkbox_checked_by_default.js",
  path + "select.js",
  path + "disabled_select.js",
  path + "select_with_a_disabled_option.js",
  path + "select_with_a_default_value.js",
  path + "select_multiple.js",
  path + "select_multiple_with_multiple_options_selected_by_default.js",
  path + "select_multiple_with_an_option_selected_by_default.js",
  path + "textarea.js",
  path + "disabled_textarea.js",
  path + "textarea_with_default_value.js"
);

var exit_code = TestRunner.run(tests);

if (exit_code > 0) quit(exit_code);
