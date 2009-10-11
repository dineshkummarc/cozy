tests.push({
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
});
