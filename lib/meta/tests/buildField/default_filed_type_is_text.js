tests.push({
  description: "JHF.buildField: default field type is text",
  arguments: ["title", {}],
  expected: JSON.stringify({li: [
    {label: "title", attributes: {for: "title"}},
    {input: null, attributes: {
      id: "title",
      type: "text"
    }}
  ]})
});
