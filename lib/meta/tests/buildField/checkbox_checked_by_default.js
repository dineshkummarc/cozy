tests.push({
  description: "JHF.buildField: checkbox checked by default",
  arguments: ["accept", {
    label: "Accept usage terms",
    type: "checkbox",
    default: "checked"
  }],
  expected: JSON.stringify({li: [
    {input: null, attributes: {
      id: "accept",
      type: "checkbox",
      checked: "checked"
    }},
    {label: "Accept usage terms", attributes: {for: "accept"}}
  ]})
});
