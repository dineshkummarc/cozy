tests.push({
  description: "Form with a single labeled text-box.",
  arguments: [{
    title: {
      type: "textbox",
      label: "The title",
      default: "test"
    },
    shoot: {
      type: "button"
    }
  }],
  expected: JSON.stringify({
    form: [
      {ul: [
        {li: [
          {label: "The title", attributes: {
            for: "title"
          }},
          {input: null, attributes: {
            type: "text",
            id: "title",
            name: "title",
            value: "test"
          }}
        ]},
        {li: [{button: "shoot", attributes: {type: "button", id: "shoot"}}]},
        {li: [{button: "submit", attributes: {type: "submit"}}]}
      ]}
    ], attributes: {
      action: "",
      method: "post"
    }
  })
});
