tests.push({
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
    ], attributes: {id: "levels", name: "levels", multiple: "multiple"}}
  ]})
});
