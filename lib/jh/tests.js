#!/usr/local/bin/js

load(
  "lib/jh/JH.js",
  "vendor/json2.js",
  "lib/test_runner/TestRunner.js"
);

print("Testing jh.toHtmlNode():");

/*
 * Add a test object to the tests array.
 * DRY it up customizing TestRunner.testDefaults.
 */

TestRunner.testDefaults = {
  context: JH,
  method: function(jhNode) {
    return JH.toHtmlNode(jhNode).toXMLString();
  }
};

var tests = [{
  description: "Plain text",
  arguments: ["Hello World!"],
  expected: "Hello World!"
}, {
  description: "Tag with text",
  arguments: [{p: "Hello World!"}],
  expected: "<p>Hello World!</p>"
}, {
  description: "Tag with an empty string",
  arguments: [{style: ""}],
  expected: "<style></style>"
}, {
  description: "Empty tag",
  arguments: [{br: null}],
  expected: "<br/>"
}, {
  description: "Tag with children",
  arguments: [{p: [
    {a: "a 1"},
    {a: "a 2"}
  ]}],
  expected: "\
<p>\n\
  <a>a 1</a>\n\
  <a>a 2</a>\n\
</p>"
}, {
  description: "Array of jhNodes instead of a jhNode",
  arguments: [{p: [
    {span: "text"},
    [{a: "a 1"}, {a: "a 2"}],
    "text"
  ]}],
  expected: "\
<p>\n\
  <span>text</span>\n\
  <a>a 1</a>\n\
  <a>a 2</a>\n\
  text\n\
</p>"
}, {
  description: "Tag with attributes",
  arguments: [{
    script: "",
    attributes: {
      type: "text/javascript",
      src: "/path/to/file.js"
    }
  }],
  expected: '<script type="text/javascript" src="/path/to/file.js"></script>'
}, {
  description: "Document with doctype",
  method: JH.toHtml5,
  arguments: [[
    {html: [
      {head: [
        {title: "Page title"}
      ]},
      {body: "Page content"}
    ]}
  ]],
  expected: "\
<!DOCTYPE html>\n\
<html>\n\
  <head>\n\
    <title>Page title</title>\n\
  </head>\n\
  <body>Page content</body>\n\
</html>"
}];


var exit_code = TestRunner.run(tests);

quit(exit_code);
