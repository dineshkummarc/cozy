tests.push({
  description: "JHF.buildField: text input with a default value",
  arguments: ["name", {
    label: "Name:",
    default: "JSON"
  }],
  expected: JSON.stringify({li: [
    {label: "Name:", attributes: {for: "name"}},
    {input: null, attributes: {
      id: "name",
      name: "name",
      type: "text",
      value: "JSON"
    }}
  ]})
});
