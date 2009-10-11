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
}, {
  description: "Utilities.getType: array defined with new",
  method: Utilities.getType,
  arguments: [new Array()],
  expected: "array"
}, {
  description: "Utilities.getType: array defined with []",
  method: Utilities.getType,
  arguments: [[]],
  expected: "array"
}, {
  description: "Utilities.getType: number 0",
  method: Utilities.getType,
  arguments: [0],
  expected: "number"
}, {
  description: "Utilities.getType: number Number.POSITIVE_INFINITY",
  method: Utilities.getType,
  arguments: [Number.POSITIVE_INFINITY],
  expected: "number"
}, {
  description: "Utilities.getType: number 55",
  method: Utilities.getType,
  arguments: [55],
  expected: "number"
}, {
  description: "Utilities.getType: string",
  method: Utilities.getType,
  arguments: ["a text"],
  expected: "string"
}, {
  description: "Utilities.getType: [JSON] object",
  method: Utilities.getType,
  arguments: [{}],
  expected: "object"
}, {
  description: "Utilities.getType: null",
  method: Utilities.getType,
  arguments: [null],
  expected: "null"
}];


var exit_code = TestRunner.run(tests);

quit(exit_code);
