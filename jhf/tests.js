#!/usr/local/bin/js

load(
  "jhf/jhf.js",
  "vendor/json2.js",
  "lib/test_runner/TestRunner.js"
);

print("Testing JHF:");

/*
 * Add a test object to the tests array.
 * DRY it up customizing TestRunner.testDefaults.
 */

TestRunner.testDefaults = {
  context: JHF,
  method: function(id, metaData) {
    return JSON.stringify(JHF.buildField(id, metaData));
  }
};

var tests = [{
  description: "JHF.buildField(): text input with a label",
  arguments: ["name", {
    label: "Name:"
  }],
  expected: JSON.stringify({li: [
    {label: "Name:", attributes: {for: "name"}},
    {input: null, attributes: {
      id: "name",
      type: "text"
    }}
  ]})
}];


var exit_code = TestRunner.run(tests);

quit(exit_code);
