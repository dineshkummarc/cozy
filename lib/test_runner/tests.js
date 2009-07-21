#!/usr/local/bin/js -w -s

load("lib/test_runner/TestRunner_TDD.js");



/*
 * Tests are expressed as an array of JSON objects.
 * A test object contains:
 *  - a method context;
 *  - a method pointer;
 *  - an array of values passed as arguments to the method;
 *  - an expected value.
 *
 * User stories.
 * 
 * 1. We have a "TestRunner" namespace.
 * 2. The TestRunner namespace has a "run" method.
 * 2.1. The TestRunner.run expects an array as argument or throws an exception.
 * 3. The TestRunner namespace has a "registerSuccessful" method.
 * 4. The TestRunner namespace has a "successfulCount" property.
 * 4.1. The TestRunner.successfulCount property is equal to zero initially.
 * 5. When executing the registerSuccessful method the successfulCount is
 * incremented by 1.
 * 5.1. The TestRunner.registerSuccessful expects a test object as argument or
 * throws an exception.
 * 6. The TestRunner namespace has a "registerFailed" method.
 * 7. The TestRunner namespace has a "failedCount" property.
 * 8. When executing the registerFailed method the failedCount property is
 * incremented by 1.
 */


// Fixture

var Foo = {
  sum: function(a, b) {
    return a + b;
  }
};

var tests = [{
  context: Foo,
  method: Foo.sum,
  arguments: [1, 2],
  expected: 3
}];


print('1. We have a "TestRunner" namespace.');

if (typeof TestRunner == "undefined") {
  print("Failed.");
} else {
  print("Succeeded.");
}


print('2. The TestRunner namespace has a "run" method.');

if (typeof TestRunner.run == "function") {
  print("Succeeded.");
} else {
  print("Failed.");
}


print('2.1. The TestRunner.run expects an array as argument or throws an exception.');

try {
  TestRunner.run("string");
  print("Failed.");
} catch (e) {
  print("Succeeded.");
}


print('3. The TestRunner namespace has a "registerSuccessful" method.');

if (typeof TestRunner.registerSuccessful == "function") {
  print("Succeeded.");
} else {
  print("Failed.");
}


print('4. The TestRunner namespace has a "successfulCount" property.');

if (typeof TestRunner.successfulCount == "undefined") {
  print("Failed.");
} else {
  print("Succeeded.");
}


print('4.1. The TestRunner.successfulCount property is equal to zero initially.');

if (TestRunner.successfulCount == 0) {
  print("Succeeded.");
} else {
  print("Failed.");
}


print('5. When executing the registerSuccessful method the successfulCount is incremented by 1.');

TestRunner.successfulCount = 4;
TestRunner.registerSuccessful();

if (TestRunner.successfulCount == 5) {
  print("Succeeded.");
} else {
  print("Failed.");
}


print('5.1. The TestRunner.registerSuccessful expects a test object as argument or throws an exception.');

try {
  TestRunner.registerSuccessful(65);
  print("Failed.");
} catch (e) {
  print("Succeeded.");
}
