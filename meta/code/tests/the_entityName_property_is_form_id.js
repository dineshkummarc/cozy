tests.push({
  description: "buildForm assumes the default type to be textbox",
  arguments: [{
    _entityName: "object",
    name: {}
  }],
  expected: JSON.stringify(
    {form: [
      {ul: [
        {li: [
          {label: "name", attributes: {for: "name"}},
          {input: null, attributes: {
            type: "text",
            id: "name",
            name: "name"
          }}
        ]},
        {li: [{button: "submit", attributes: {type: "submit"}}]}
      ]}
    ], attributes: {
      action: "",
      method: "post",
      id: "object"
    }}
  )
});
