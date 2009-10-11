tests.push({
  description: "JHF.buildField: select with a default value",
  arguments: ["level", {
    label: "Level:",
    type: "select",
    options: {
      "1": "low",
      "2": "middle",
      "3": "high"
    },
    default: 3
  }],
  expected: JSON.stringify({li: [
    {label: "Level:", attributes: {for: "level"}},
    {select: [
      {option: "low", attributes: {value: "1"}},
      {option: "middle", attributes: {value: "2"}},
      {option: "high", attributes: {value: "3", selected: "selected"}}
    ], attributes: {id: "level"}}
  ]})
});
