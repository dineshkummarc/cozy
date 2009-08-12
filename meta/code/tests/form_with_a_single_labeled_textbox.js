tests.push({
  description: "Form with a single labeled text-box.",
  arguments: [{
    title: {
      type: "textbox",
      label: "The title",
      default: "test"
    }
  }],
  expected: JSON.stringify({
    form: [
      {div: [
        {label: "The title", attributes: {
          for: "title"
        }},
        {input: null, attributes: {
          type: "text",
          id: "title",
          name: "title",
          value: "test"
        }},
        {button: "submit", attributes: {
          type: "submit"
        }}
      ]}
    ], attributes: {
      action: "",
      method: "post"
    }
  })
});
