var TestRunner = {
  testDefaults: {
  },

  applyDefaults: function(test) {
    for (property in this.testDefaults) {
      if (!test[property]) {
        test[property] = this.testDefaults[property];
      }
    }
  },

  run: function(tests) {
    var results = [],
        failed = 0,
        errors = 0;

    for each (var test in tests) {
      if (!test.description) {
        throw "Test needs a description.";
      }

      this.applyDefaults(test);

      try {
        var actual = test.method.call(
            test.context, test.json).toXMLString();

        if (actual != test.expected) {
          results.push("F. " + test.description + "\n"
              + "  expected: " + this.printedValue(test.expected) + "\n"
              + "  actual: " + this.printedValue(actual) + "\n");
          failed++;
        }
      } catch (e) {
        results.push("E. " + test.description + e);
        errors++;
      }
    }

    if (results.length == 0) {
      print("\nAll " + tests.length + " tests passed.\n");
    } else {
      if (failed > 0) print("\n" + failed + " tests failed.");
      if (errors > 0) print(errors + " errors.");

      print("");

      for (i in results) {
        print(i + ". " + results[i] + "\n");
      }
    }
  },

  printedValue: function(value) {
    if (value.indexOf("\n")) {
      value = "\n" + value + "\n";
    }

    return value;
  }
};
