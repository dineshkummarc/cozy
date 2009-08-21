#!/usr/local/bin/js -w -s

load("lib/test_runner/TestRunner.js");

print("Testing TestRunner:");

// utility variables
var currentTest = '';
var failedCount = 0;
var passedCount = 0;
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

function pass() {
  passedCount++;
  results += '.';
}

function printResults() {
  print(results);

  if (failedCount == 0) {
    print("All " + passedCount + " tests passed.");
  } else {
    print(failedCount + " tests failed.");
  }

  print();
}


// Tests.
announce('1. We have a "TestRunner" namespace.');

if (typeof TestRunner == "undefined") {
  fail();
} else {
  pass();
}


announce('2. The TestRunner namespace has a "run" method.');

if (typeof TestRunner.run == "function") {
  pass();
} else {
  fail();
}


announce('2.1. The TestRunner.run expects an array as argument or throws an'
    + ' exception.');

try {
  TestRunner.run("string");
  fail();
} catch (e) {
  pass();
}


announce('2.1.1. If any of the items of the array passed to TestRunner.run is'
    + ' not a valid test object, an exception is thrown.');

try {
  TestRunner.run([badTest]);
  fail();
} catch(e) {
  pass();
}


announce('2.2. TestRunner has a results property.');

if (typeof TestRunner.results == "undefined") {
  fail();
} else {
  pass();
}


announce('2.2.1. The TestRunner.results is a string.');

if (typeof TestRunner.results == "string") {
  pass();
} else {
  fail();
}


announce('3. The TestRunner namespace has a "registerPassed" method.');

if (typeof TestRunner.registerPassed == "function") {
  pass();
} else {
  fail();
}


announce('4. The TestRunner namespace has a "passedCount" property.');

if (typeof TestRunner.passedCount == "undefined") {
  fail();
} else {
  pass();
}


announce('5.1. TestRunner.validateTest throws an exception if the argument'
    + ' does not have a "description" property of type string, a "method"'
    + ' property of type function, a "arguments" property of type array,'
    + ' and an "expected" property of any type.');

var badTest = {
  property: "value",
  number: 1
};

try {
  TestRunner.validateTest(test);
  fail();
} catch (e) {
  pass();
}


announce('5.2. TestRunner.validateTest should not throw an exception if the'
    + ' argument has the expected properties.');

var Foo = {
  sum: function(a, b) {
    return a + b;
  }
};

var test = {
  description: "Testing the sum method of the Foo namespace.",
  method: Foo.sum,
  arguments: [1, 2],
  expected: 3,
  output: function(text) {
    //hide messages
  }
};

try {
  TestRunner.registerPassed(badTest);
  pass();
} catch (e) {
  fail();
}


announce('5.3. When executing the registerPassed method the passedCount is'
    + ' incremented by 1.');

TestRunner.passedCount = 4;
TestRunner.registerPassed(test);

if (TestRunner.passedCount == 5) {
  pass();
} else {
  fail();
}


announce('6. The TestRunner namespace has a "registerFailed" method.');

if (typeof TestRunner.registerFailed == "function") {
  pass();
} else {
  fail();
}


announce('7. The TestRunner namespace has a "failedCount" property.');

if (typeof TestRunner.failedCount == "undefined") {
  fail();
} else {
  pass();
}


announce('7.1. The TestRunner namespace has a "errorCount" property.');

if (typeof TestRunner.errorCount == "undefined") {
  fail();
} else {
  pass();
}


announce('7.2. The TestRunner namespace has a "testDefaults" property.');

if (typeof TestRunner.testDefaults == "undefined") {
  fail();
} else {
  pass();
}


announce('7.3. The TestRunner.registerFailed method execution increments'
    + ' failedCount property by 1.');

TestRunner.failedCount = 0;
TestRunner.registerFailed(test);

if (TestRunner.failedCount == 1) {
  pass();
} else {
  fail();
}

//add tests for applyDefaults

printResults();
