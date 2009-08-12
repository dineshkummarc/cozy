#!/usr/bin/js -w -s

load('vendor/json2.js');
load('lib/utilities/Utilities.js');
load('lib/test_runner/TestRunner.js');

print('Testing Utilities:');

/*
 * Add a test object to the tests array.
 * DRY it up customizing TestRunner.testDefaults.
 */

TestRunner.testDefaults = {
  context: Utilities,
  arguments: [],
  expected: true
};


var tests = [{
  description: "Utilities has an apply() method.",
  method: function() {
    return typeof Utilities.apply == "function";
  }
},{
  description: "apply()ing {} to {} results {}.",
  method: function(object, defaults) {
    return JSON.stringify(Utilities.apply(object, defaults));
  },
  arguments: [{}, {}],
  expected: "{}"
}];



TestRunner.run(tests);
