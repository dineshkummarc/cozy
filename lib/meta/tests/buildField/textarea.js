tests.push({
  description: "JHF.buildField: textarea",
  arguments: ["description", {
    label: "Description:",
    type: "textarea"
  }],
  expected: JSON.stringify({li: [
    {label: "Description:", attributes: {for: "description"}},
    {textarea: "", attributes: {id: "description", name: "description"}}
  ]})
});
