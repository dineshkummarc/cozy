#!/usr/local/bin/js

load(
  "jhf/jhf.js",
  "vendor/json2.js",
  "lib/test_runner/TestRunner.js"
);

print("Testing JHF.buildField:");

/*
 * Add a test object to the tests array.
 * DRY it up customizing TestRunner.testDefaults.
 */

TestRunner.testDefaults = {
  context: JHF,
  method: function(id, metaData) {
    return JSON.stringify(JHF.buildField(id, metaData));
  }
};

var tests = [{
  description: "JHF.buildField: text input with a label",
  arguments: ["name", {
    label: "Name:"
  }],
  expected: JSON.stringify({li: [
    {label: "Name:", attributes: {for: "name"}},
    {input: null, attributes: {
      id: "name",
      type: "text"
    }}
  ]})
}, {
  description: "JHF.buildField: disabled text input",
  arguments: ["name", {
    label: "Name:",
    disabled: true
  }],
  expected: JSON.stringify({li: [
    {label: "Name:", attributes: {for: "name"}},
    {input: null, attributes: {
      id: "name",
      type: "text",
      disabled: "disabled"
    }}
  ]})
}, {
  description: "JHF.buildField: read only text input",
  arguments: ["name", {
    label: "Name:",
    readonly: true
  }],
  expected: JSON.stringify({li: [
    {label: "Name:", attributes: {for: "name"}},
    {input: null, attributes: {
      id: "name",
      type: "text",
      readonly: "readonly"
    }}
  ]})
}, {
  description: "JHF.buildField: text input with a default value",
  arguments: ["name", {
    label: "Name:",
    default: "JSON"
  }],
  expected: JSON.stringify({li: [
    {label: "Name:", attributes: {for: "name"}},
    {input: null, attributes: {
      id: "name",
      type: "text",
      value: "JSON"
    }}
  ]})
}, {
  description: "JHF.buildField: password input with a label",
  arguments: ["password", {
    label: "Password:",
    type: "password"
  }],
  expected: JSON.stringify({li: [
    {label: "Password:", attributes: {for: "password"}},
    {input: null, attributes: {
      id: "password",
      type: "password"
    }}
  ]})
}, {
  description: "JHF.buildField: disabled password input",
  arguments: ["password", {
    label: "Password:",
    type: "password",
    disabled: true
  }],
  expected: JSON.stringify({li: [
    {label: "Password:", attributes: {for: "password"}},
    {input: null, attributes: {
      id: "password",
      type: "password",
      disabled: "disabled"
    }}
  ]})
}, {
  description: "JHF.buildField: radio with a default option selected",
  arguments: ["age", {
    label: "Age:",
    type: "radio",
    options: {
      teenager: "12-17 years",
      mature: "18-25 years"
    }, 
    default: "teenager"
  }],
  expected: JSON.stringify({li: [
    {label: "Age:"},
    {ul: [
      {li: [
        {input: null, attributes: {
          id: "age_teenager",
          name: "age",
          type: "radio",
          value: "teenager",
          checked: "checked"
        }},
        {label: "12-17 years", attributes: {for: "age_teenager"}},
      ]},
      {li: [
        {input: null, attributes: {
          id: "age_mature",
          name: "age",
          type: "radio",
          value: "mature"
        }},
        {label: "18-25 years", attributes: {for: "age_mature"}},
      ]}
    ]}
  ]})
}, {
  description: "JHF.buildField: radio",
  arguments: ["age", {
    label: "Age:",
    type: "radio",
    options: {
      teenager: "12-17 years",
      mature: "18-25 years"
    }
  }],
  expected: JSON.stringify({li: [
    {label: "Age:"},
    {ul: [
      {li: [
        {input: null, attributes: {
          id: "age_teenager",
          name: "age",
          type: "radio",
          value: "teenager"
        }},
        {label: "12-17 years", attributes: {for: "age_teenager"}},
      ]},
      {li: [
        {input: null, attributes: {
          id: "age_mature",
          name: "age",
          type: "radio",
          value: "mature"
        }},
        {label: "18-25 years", attributes: {for: "age_mature"}},
      ]}
    ]}
  ]})
}, {
  description: "JHF.buildField: radio with a disabled option",
  arguments: ["age", {
    label: "Age:",
    type: "radio",
    options: {
      "-teenager": "12-17 years",
      mature: "18-25 years"
    }
  }],
  expected: JSON.stringify({li: [
    {label: "Age:"},
    {ul: [
      {li: [
        {input: null, attributes: {
          id: "age_teenager",
          name: "age",
          type: "radio",
          value: "teenager",
          disabled: "disabled"
        }},
        {label: "12-17 years", attributes: {for: "age_teenager"}},
      ]},
      {li: [
        {input: null, attributes: {
          id: "age_mature",
          name: "age",
          type: "radio",
          value: "mature"
        }},
        {label: "18-25 years", attributes: {for: "age_mature"}},
      ]}
    ]}
  ]})
}, {
  description: "JHF.buildField: checkbox",
  arguments: ["accept", {
    label: "Accept usage terms",
    type: "checkbox"
  }],
  expected: JSON.stringify({li: [
    {input: null, attributes: {
      id: "accept",
      type: "checkbox"
    }},
    {label: "Accept usage terms", attributes: {for: "accept"}}
  ]})
}, {
  description: "JHF.buildField: disabled checkbox",
  arguments: ["accept", {
    label: "Accept usage terms",
    type: "checkbox",
    disabled: true
  }],
  expected: JSON.stringify({li: [
    {input: null, attributes: {
      id: "accept",
      type: "checkbox",
      disabled: "disabled"
    }},
    {label: "Accept usage terms", attributes: {for: "accept"}}
  ]})
}, {
  description: "JHF.buildField: select",
  arguments: ["level", {
    label: "Level:",
    type: "select",
    options: {
      "1": "low",
      "2": "middle",
      "3": "high"
    }
  }],
  expected: JSON.stringify({li: [
    {label: "Level:", attributes: {for: "level"}},
    {select: [
      {option: "low", attributes: {value: "1"}},
      {option: "middle", attributes: {value: "2"}},
      {option: "high", attributes: {value: "3"}}
    ], attributes: {id: "level"}}
  ]})
}, {
  description: "JHF.buildField: disabled select",
  arguments: ["level", {
    label: "Level:",
    type: "select",
    options: {
      "1": "low",
      "2": "middle",
      "3": "high"
    },
    disabled: true
  }],
  expected: JSON.stringify({li: [
    {label: "Level:", attributes: {for: "level"}},
    {select: [
      {option: "low", attributes: {value: "1"}},
      {option: "middle", attributes: {value: "2"}},
      {option: "high", attributes: {value: "3"}}
    ], attributes: {id: "level", disabled: "disabled"}}
  ]})
}, {
  description: "JHF.buildField: select with a disabled option",
  arguments: ["level", {
    label: "Level:",
    type: "select",
    options: {
      "1": "low",
      "-2": "middle",
      "3": "high"
    },
    disabled: true
  }],
  expected: JSON.stringify({li: [
    {label: "Level:", attributes: {for: "level"}},
    {select: [
      {option: "low", attributes: {value: "1"}},
      {option: "middle", attributes: {value: "2", disabled: "disabled"}},
      {option: "high", attributes: {value: "3"}}
    ], attributes: {id: "level", disabled: "disabled"}}
  ]})
}, {
  description: "JHF.buildField: select multiple",
  arguments: ["levels", {
    label: "Levels:",
    type: "select",
    options: {
      "1": "low",
      "2": "middle",
      "3": "high"
    },
    multiple: true
  }],
  expected: JSON.stringify({li: [
    {label: "Levels:", attributes: {for: "levels"}},
    {select: [
      {option: "low", attributes: {value: "1"}},
      {option: "middle", attributes: {value: "2"}},
      {option: "high", attributes: {value: "3"}}
    ], attributes: {id: "levels", multiple: "multiple"}}
  ]})
}];


var exit_code = TestRunner.run(tests);

quit(exit_code);
