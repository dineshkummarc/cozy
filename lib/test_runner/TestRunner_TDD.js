var TestRunner = {
  successfulCount: 0,
  failedCount: 0,

  run: function(tests) {
    if (tests.constructor != [].constructor) {
      throw "The run() method expects an array.";
    }
  },

  registerSuccessful: function(test) {
    this.validateTest(test);
    this.successfulCount++;
  },

  registerFailed: function() {
    this.validateTest(test);
    this.failedCount++;
  },

  validateTest: function() {
    if (typeof test != "object") {
      throw "The test should be an object.";
    }

    if (typeof test.description != "string") {
      throw "The test's \"description\" property should be a string.";
    }

    if (typeof test.context != "object") {
      throw "The test's \"context\" property should be an object.";
    }

    if (typeof test.method != "function") {
      throw "The test's \"method\" property should be a function.";
    }

    if (test.arguments.constructor != [].constructor) {
      throw "The test's \"arguments\" property should be an array.";
    }

    if (typeof test.expected == "undefined") {
      throw "The test should have a property named \"expected\".";
    }
  }
};
