#!/usr/local/bin/js -w -s

//load('lib/utilities/Utilities.js');
//load('lib/test_runner/TestRunner.js');

/*
 * Add a test object to the tests array.
 * DRY it up customizing TestRunner.testDefaults.
 */

var tests = [{
  description: "Applying {} to {} results {}.",
  object: {},
  defaults: {},
  method: Utilities.apply,
  arguments: ["object", "defaults"],
  expected: {}
}];
