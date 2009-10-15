tests.push({
  description: "JHF.buildField: textarea with default value",
  arguments: ["description", {
    label: "Description:",
    type: "textarea",
    default: "short text"
  }],
  expected: JSON.stringify({li: [
    {label: "Description:", attributes: {for: "description"}},
    {textarea: "short text", attributes: {
      id: "description",
      name: "description"
    }}
  ]})
});
