#!/usr/local/bin/js -w -s

load("lib/test_runner/TestRunner.js");
load("lib/json_html/JsonHtml.js");
load("meta/code/buildForm.js");

print("Testing meta.buildForm():");

/*
 * Add a test object to the tests array.
 * DRY it up customizing TestRunner.testDefaults.
 */

TestRunner.testDefaults = {
  context: meta,
  method: meta.buildForm
};

var tests = [{
  description: "",
  arguments: [],
  expected: null
}];



TestRunner.run(tests);
