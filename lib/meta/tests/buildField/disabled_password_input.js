tests.push({
  description: "JHF.buildField: disabled password input",
  arguments: ["password", {
    label: "Password:",
    type: "password",
    disabled: true
  }],
  expected: JSON.stringify({li: [
    {label: "Password:", attributes: {for: "password"}},
    {input: null, attributes: {
      id: "password",
      name: "password",
      type: "password",
      disabled: "disabled"
    }}
  ]})
});
