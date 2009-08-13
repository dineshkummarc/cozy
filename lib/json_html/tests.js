#!/usr/local/bin/js -w -s

load("lib/json_html/JsonHtml.js");
load("lib/test_runner/TestRunner.js");

print("Testing JsonHtml.toXMLNode():");

/*
 * Add a test object to the tests array.
 * DRY it up customizing TestRunner.testDefaults.
 */

TestRunner.testDefaults = {
  context: JsonHtml,
  method: function(jsonNode) {
    return JsonHtml.toXMLNode(jsonNode).toXMLString();
  }
};

var tests = [{
  description: "Empty element without attributes",
  arguments: [{html: null}],
  expected: "<html/>"
}, {
  description: "Empty element wit attributes",
  arguments: [{html: null, attributes: {
    id: "unicum",
    class: "collection"
  }}],
  expected: '<html id="unicum" class="collection"/>'
}, {
  description: "Nonempty element wit attributes",
  arguments: [{html: "", attributes: {
    id: "unicum",
    class: "collection"
  }}],
  expected: '<html id="unicum" class="collection"></html>'
}, {
  description: "Nested elements",
  arguments: [{html: [
    {br: null}
  ]}],
  expected: '<html>\n  <br/>\n</html>'
}, {
  description: "A text node inside an element",
  arguments: [{html: [
    "plain text"
  ]}],
  expected: '<html>plain text</html>'
}, {
  description: "An element with text inside",
  arguments: [{html: "plain text"}],
  expected: '<html>plain text</html>'
}, {
  description: "An element with text inside and another element",
  arguments: [{html: [
    "plain text",
    {p: "paragraph"}
  ]}],
  expected:
    '<html>\n' +
    '  plain text\n' +
    '  <p>paragraph</p>\n' +
    '</html>'
}, {
  description: "An element with two text children",
  arguments: [{html: [
    "plain text1",
    "plain text2"
  ]}],
  expected:
    '<html>\n' +
    '  plain text1\n' +
    '  plain text2\n' +
    '</html>'
}, {
  description: "An element 3 child elements. One child has ID.",
  arguments: [{html: [
    {p: "paragraph1"},
    {p: "paragraph2", attributes: {
      id: "unicum"
    }},
    {p: "paragraph3"}
  ]}],
  expected:
    '<html>\n' +
    '  <p>paragraph1</p>\n' +
    '  <p id="unicum">paragraph2</p>\n' +
    '  <p>paragraph3</p>\n' +
    '</html>'
}];


TestRunner.run(tests);
