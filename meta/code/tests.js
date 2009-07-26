#!/usr/local/bin/js -w -s

load("lib/test_runner/TestRunner.js");
load("lib/json_html/JsonHtml.js");
load("vendor/json2.js");
load("meta/code/buildForm.js");

print("Testing meta.buildForm():");

/*
 * Add a test object to the tests array.
 * DRY it up customizing TestRunner.testDefaults.
 */

TestRunner.testDefaults = {
  context: meta,
  method: function(metaForm) {
    return JSON.stringify(meta.buildForm(metaForm));
  },
  expected: true
};

var tests = [{
  description: "Form with a single labeled text-box.",
  arguments: [{
    title: {
      type: "textbox",
      label: "The title"
    }
  }],
  expected: JSON.stringify({
    form: [
      {div: [
        {label: "The title:", attributes: {
          for: "title"
        }},
        {input: null, attributes: {
          type: "text",
          id: "title",
          name: "title"
        }},
        {button: "submit", attributes: {
          type: "submit"
        }}
      ]}
    ], attributes: {
      action: "",
      method: "post"
    }
  })
}];



TestRunner.run(tests);
