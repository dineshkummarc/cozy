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
      },
      default: "2"
    }
  }],
  expected: JSON.stringify({
    form: [
      {div: [
        {label: "The item type", attributes: {
          for: "type"
        }},
        {select: [
          {option: "red", attributes: {value: "1"}},
          {option: "green", attributes: {value: "2", selected: "selected"}},
          {option: "blue", attributes: {value: "3"}}
        ], attributes: {
          id: "type",
          name: "type"
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

