#!/usr/local/bin/js -w -s

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
}, {
  description: "Utilities.clone does not return a reference to the"
      + " object being cloned",
  object: {a:1},
  arguments: [this.object],
  method: function(object) {
    return object != Utilities.clone(object);
  },
  expected: true
}, {
  description: "Utilities.clone works with an empty object",
  method: function(object) {
    return JSON.stringify(Utilities.clone(object));
  },
  arguments:[{}],
  expected: "{}"
}, {
  description: "Utilities.clone works with a non-empty obejct",
  method: function(object) {
    return JSON.stringify(Utilities.clone(object));
  },
  arguments:[{"a":"1"}],
  expected: '{"a":"1"}'
}];


var exit_code = TestRunner.run(tests);

quit(exit_code);
