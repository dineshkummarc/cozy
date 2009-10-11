print("Testing Meta.buildForm:");

/*
 * Add a test object to the tests array.
 * DRY it up customizing TestRunner.testDefaults.
 */

TestRunner.testDefaults = {
  context: Meta,
  method: function(id, metaData) {
    return JSON.stringify(Meta.buildForm(metaData));
  }
};

var path = "lib/meta/tests/buildForm/";
var tests = [];

load(
);

var exit_code = TestRunner.run(tests);

if (exit_code > 0) quit(exit_code);
