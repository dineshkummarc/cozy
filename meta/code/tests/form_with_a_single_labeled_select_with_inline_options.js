tests.push({
  description: "Form with a single select with inline options.",
  arguments: [{
    type: {
      type: "select",
      label: "The item type",
      options: {
        "1": "red",
        "2": "green",
        "3": "blue"
      }
    }
  }],
  expected: JSON.stringify({
    form: [
      {div: [
        {label: "The item type:", attributes: {
          for: "type"
        }},
        {select: [
          {option: "red", attributes: {value: 1}},
          {option: "green", attributes: {value: 2}},
          {option: "blue", attributes: {value: 3}}
        ], attributes: {
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

