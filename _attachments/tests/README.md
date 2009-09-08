### Acceptance tests ###

Acceptance (functional) tests use QUnit, the jQuery testing framework.

index.html is the test runner. Every test is a separate Javascript file
included at the bottom of the body. See author.js for an example.

A test consists of a call to the $.runTest method defined in
jquery.test_utils.js which is given a JSON object consisting of 3 members:

* description - the test description
* url - the page to test
* code - an anonymous function containing the test logic

The page having the given URL is opened in the sandbox iframe refered by
$.sandbox.

The test code refers to the page content verifying the presence of certain 
elements, values, submitting forms or any other actions that would define
acceptance criterias.

**Note:**

Because of the asynchronous nature of these tests the test runner is not
counting them properly. But they are highlighted with the red color which
is good enough.
