#!/usr/local/bin/js -w -s

load("lib/test_runner/TestRunner_TDD.js");


// utility variables
var currentTest = '';
var failedCount = 0;
var successfulCount = 0;
var results = '';

// utility functions
function announce(testDescription) {
  currentTest = testDescription;
}

function fail() {
  failedCount++;
  results += 'F';
  print(currentTest);
  print("==== FAILED! ====");
}

function succeed() {
  successfulCount++;
  results += '.';
}

function printResults() {
  print(results);

  if (failedCount == 0) {
    print("All " + successfulCount + " tests passed.");
  } else {
    print(failedCount + " tests failed.");
  }
}


// Tests.
announce('1. We have a "TestRunner" namespace.');

if (typeof TestRunner == "undefined") {
  fail();
} else {
  succeed();
}


announce('2. The TestRunner namespace has a "run" method.');

if (typeof TestRunner.run == "function") {
  succeed();
} else {
  fail();
}


announce('2.1. The TestRunner.run expects an array as argument or throws an exception.');

try {
  TestRunner.run("string");
  fail();
} catch (e) {
  succeed();
}


announce('3. The TestRunner namespace has a "registerSuccessful" method.');

if (typeof TestRunner.registerSuccessful == "function") {
  succeed();
} else {
  fail();
}


announce('4. The TestRunner namespace has a "successfulCount" property.');

if (typeof TestRunner.successfulCount == "undefined") {
  fail();
} else {
  succeed();
}


announce('5. The TestRunner has a validateTest method.');

if (typeof TestRunner.validateTest != "function") {
  fail();
} else {
  succeed();
}


announce('5.1. TestRunner.validateTest throws an exception if the argument does not have a "description" property of type string, "context" property of type object, a "method" property of type function, a "arguments" property of type array, and an "expected" property of any type.');

var badTest = {
  property: "value",
  number: 1
};

try {
  TestRunner.validateTest(test);
  fail();
} catch (e) {
  succeed();
}


announce('5.2. TestRunner.validateTest should not throw an exception if the argument has the expected properties.');

var Foo = {
  sum: function(a, b) {
    return a + b;
  }
};

var test = {
  description: "Testing the sum method of the Foo namespace.",
  context: Foo,
  method: Foo.sum,
  arguments: [1, 2],
  expected: 3
};

try {
  TestRunner.registerSuccessful(badTest);
  succeed();
} catch (e) {
  fail();
}


announce('5.3. When executing the registerSuccessful method the successfulCount is incremented by 1.');

TestRunner.successfulCount = 4;
TestRunner.registerSuccessful(test);

if (TestRunner.successfulCount == 5) {
  succeed();
} else {
  fail();
}


announce('6. The TestRunner namespace has a "registerFailed" method.');

if (typeof TestRunner.registerFailed == "function") {
  succeed();
} else {
  fail();
}


announce('7. The TestRunner namespace has a "failedCount" property.');

if (typeof TestRunner.failedCount == "undefined") {
  fail();
} else {
  succeed();
}


announce('7.1. The TestRunner.registerFailed method execution increments failedCount property by 1.');

TestRunner.failedCount = 0;
TestRunner.registerFailed(test);

if (TestRunner.failedCount == 1) {
  succeed();
} else {
  fail();
}


announce('7.2. The TestRunner.registerFailed method executed twice increments failedCount property by 2.');

TestRunner.failedCount = 0;
TestRunner.registerFailed(test);
TestRunner.registerFailed(test);

if (TestRunner.failedCount == 2) {
  succeed();
} else {
  fail();
}



printResults();
