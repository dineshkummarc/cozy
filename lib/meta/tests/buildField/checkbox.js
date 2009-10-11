tests.push({
  description: "JHF.buildField: checkbox",
  arguments: ["accept", {
    label: "Accept usage terms",
    type: "checkbox"
  }],
  expected: JSON.stringify({li: [
    {input: null, attributes: {
      id: "accept",
      type: "checkbox"
    }},
    {label: "Accept usage terms", attributes: {for: "accept"}}
  ]})
});
