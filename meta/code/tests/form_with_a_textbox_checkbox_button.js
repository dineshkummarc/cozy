tests.push({
  description: "Form with a textbox, a checkbox, and a button.",
  arguments: [{
    title: {
      type: "textbox",
      label: "The title",
      default: "test"
    },
    agreed_terms: {
      type: "checkbox",
      label: "Agree terms and conditions"
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
        {li: [
          {input: null, attributes: {
            type: "checkbox",
            id: "agreed_terms",
            name: "agreed_terms"
          }},
          {label: "Agree terms and conditions", attributes: {
            for: "agreed_terms"
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
