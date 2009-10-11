tests.push({
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
});
