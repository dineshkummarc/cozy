tests.push({
  description: "Simple form with a text field",
  arguments: ["book", {
    title: {},
  }],
  expected: JSON.stringify({
    form: [
      {ul: [
        {li: [
          {label: "title", attributes: {for: "title"}},
          {input: null, attributes: {id: "title", name: "title", type: "text"}}
        ]}
      ]},
      {div: [
        {button: "submit", attributes: {type: "submit"}}
      ]}
    ], attributes: {
      id: "book",
      action: "",
      method: "post"
    }
  })
});
