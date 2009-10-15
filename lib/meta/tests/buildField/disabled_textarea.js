tests.push({
  description: "JHF.buildField: disabled textarea",
  arguments: ["description", {
    label: "Description:",
    type: "textarea",
    disabled: true
  }],
  expected: JSON.stringify({li: [
    {label: "Description:", attributes: {for: "description"}},
    {textarea: "", attributes: {
      id: "description",
      name: "description",
      disabled: "disabled"
    }}
  ]})
});
