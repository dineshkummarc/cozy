tests.push({
  description: "JHF.buildField: radio",
  arguments: ["age", {
    label: "Age:",
    type: "radio",
    options: {
      teenager: "12-17 years",
      mature: "18-25 years"
    }
  }],
  expected: JSON.stringify({li: [
    {label: "Age:"},
    {ul: [
      {li: [
        {input: null, attributes: {
          id: "age_teenager",
          name: "age",
          type: "radio",
          value: "teenager"
        }},
        {label: "12-17 years", attributes: {for: "age_teenager"}},
      ]},
      {li: [
        {input: null, attributes: {
          id: "age_mature",
          name: "age",
          type: "radio",
          value: "mature"
        }},
        {label: "18-25 years", attributes: {for: "age_mature"}},
      ]}
    ]}
  ]})
});
