tests.push({
  description: "JHF.buildField: text input with a label",
  arguments: ["name", {
    label: "Name:"
  }],
  expected: JSON.stringify({li: [
    {label: "Name:", attributes: {for: "name"}},
    {input: null, attributes: {
      id: "name",
      name: "name",
      type: "text"
    }}
  ]})
});
