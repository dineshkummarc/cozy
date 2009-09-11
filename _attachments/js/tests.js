#!/usr/local/bin/js -w -s

load("_attachments/js/validation.js");
load("lib/test_runner/TestRunner.js");
load("vendor/json2.js");

print("Testing isValid() function:");

/*
 * Add a test object to the tests array.
 * DRY it up customizing TestRunner.testDefaults.
 */

TestRunner.testDefaults = {
  context: this,
  method: function(formData, validationData, incremental) {
    try {
      validate(formData, validationData, incremental);
      return "not failed";
    } catch (e) {
      return "failed";
    }
  },
  expected: "failed"
};

var tests = [];
var dir = '_attachments/js/tests/';

load(
  dir + 'validation_general.js',
  dir + 'validation_required.js'
);


var exit_code = TestRunner.run(tests);

quit(exit_code);
