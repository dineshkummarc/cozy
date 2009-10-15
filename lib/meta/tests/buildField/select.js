tests.push({
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
    ], attributes: {id: "level", name: "level"}}
  ]})
});
