tests.push({
  description: "JHF.buildField: password input with a label",
  arguments: ["password", {
    label: "Password:",
    type: "password"
  }],
  expected: JSON.stringify({li: [
    {label: "Password:", attributes: {for: "password"}},
    {input: null, attributes: {
      id: "password",
      type: "password"
    }}
  ]})
});
