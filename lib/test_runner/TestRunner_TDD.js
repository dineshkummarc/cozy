var TestRunner = {
  successfulCount: 0,
  run: function(tests) {
    if (!tests.push) throw "The run() method expects an Array.";
  },
  registerSuccessful: function(test) {
    if (typeof test != "object") {
      throw "The registerSuccessful() method expects an Object.";
    }

    this.successfulCount++;
  }
};
