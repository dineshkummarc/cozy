tests.push({
  description: "Form with a single labeled text-box.",
  arguments: [{
    title: {
      type: "textbox",
      label: "The title"
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
          name: "title"
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
