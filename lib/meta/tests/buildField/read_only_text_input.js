tests.push({
  description: "JHF.buildField: read only text input",
  arguments: ["name", {
    label: "Name:",
    readonly: true
  }],
  expected: JSON.stringify({li: [
    {label: "Name:", attributes: {for: "name"}},
    {input: null, attributes: {
      id: "name",
      name: "name",
      type: "text",
      readonly: "readonly"
    }}
  ]})
});
