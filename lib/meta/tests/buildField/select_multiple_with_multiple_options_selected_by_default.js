tests.push({
  description: "JHF.buildField: select multiple with multiple options" +
      " selected by default",
  arguments: ["levels", {
    label: "Levels:",
    type: "select",
    options: {
      "1": "low",
      "2": "middle",
      "3": "high"
    },
    multiple: true,
    default: ["1", "3"]
  }],
  expected: JSON.stringify({li: [
    {label: "Levels:", attributes: {for: "levels"}},
    {select: [
      {option: "low", attributes: {value: "1", selected: "selected"}},
      {option: "middle", attributes: {value: "2"}},
      {option: "high", attributes: {value: "3", selected: "selected"}}
    ], attributes: {id: "levels", name: "levels", multiple: "multiple"}}
  ]})
});
