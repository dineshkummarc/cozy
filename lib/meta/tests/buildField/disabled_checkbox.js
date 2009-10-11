tests.push({
  description: "JHF.buildField: disabled checkbox",
  arguments: ["accept", {
    label: "Accept usage terms",
    type: "checkbox",
    disabled: true
  }],
  expected: JSON.stringify({li: [
    {input: null, attributes: {
      id: "accept",
      type: "checkbox",
      disabled: "disabled"
    }},
    {label: "Accept usage terms", attributes: {for: "accept"}}
  ]})
});
