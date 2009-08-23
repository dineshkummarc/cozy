load('lib/utilities/Utilities.js');

var TestRunner = {
  passedCount: 0,
  failedCount: 0,
  errorCount: 0,
  results: '',
  testDefaults: {},

  run: function(tests) {
    this.verifyItIsArray(tests);
    this.runAll(tests);
    this.printSummary();

    return this.failedCount + this.errorCount;
  },

  applyDefaults: function(test) {
    Utilities.apply(test, this.testDefaults);
  },

  runAll: function(tests) {
    this.resetCounters();

    for each (var test in tests) {
      try {
        this.applyDefaults(test);
        this.validate(test);
        test.actual = test.method.apply(test.context, test.arguments);

        if (test.actual == test.expected) {
          this.registerPassed(test);
        } else {
          this.registerFailed(test);
        }
      } catch (exception) {
        this.registerError(test, exception);
      }
    }
  },
  
  resetCounters: function() {
    this.passedCount = 0;
    this.failedCount = 0,
    this.errorCount = 0;
  },

  printSummary: function() {
    if (this.errorCount + this.failedCount + this.passedCount == 0) {
      print("==== NO TESTS! ====");
    }

    print(this.results);

    var allOK = true;
    
    if (this.errorCount > 0) {
      print(this.errorCount + " errors.");
      allOK = false;
    }

    if (this.failedCount > 0) {
      print(this.failedCount + " tests failed.");
      allOK = false;
    }

    if (this.passedCount > 0) {
      print((allOK ? "All " : "") + this.passedCount + " tests passed.");
    }

    print();
  },

  verifyItIsArray: function(tests) {
    if (tests.constructor != [].constructor) {
      throw "The run() method expects an array.";
    }
  },

  registerPassed: function() {
    this.passedCount++;
    this.results += '.';
  },

  registerFailed: function(test) {
    this.failedCount++;
    this.results += 'F';

    var output = test.output || print

    output(test.description);
    output("==== FAILED! ====");
    output("  expected: " + printedValue(test.expected));
    output("  actual: " + printedValue(test.actual));
    output("");

    function printedValue(value) {
      if (typeof value == "undefined") return value;
      if (value.toString().indexOf("\n")) {
        value = "\n" + value + "\n";
      }

      return value;
    }
  },

  registerError: function(test, exception) {
    this.errorCount++;
    this.results += 'E';

    print(test.description);
    print("==== ERROR! ====");
    print(exception);
    print();
  },

  validate: function(test) {
    if (typeof test != "object") {
      throw "The test should be an object not a " + (typeof test) + ".";
    }

    if (typeof test.description != "string") {
      throw "The test's \"description\" property should be a string.";
    }

    if (typeof test.method != "function") {
      throw "The test's \"method\" property should be a function.";
    }

    if (typeof test.context != "object") {
      throw "The test's \"context\" property should be an object.";
    }

    if (test.arguments.constructor != [].constructor) {
      throw "The test's \"arguments\" property should be an array.";
    }

    if (typeof test.expected == "undefined") {
      throw "The test should have a property named \"expected\".";
    }
  }
};
