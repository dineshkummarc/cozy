tests.push({
  description: "Form with labeled radios.",
  arguments: [{
    gender: {
      type: "radiobox",
      label: "Gender",
      options: {
        "m": "male",
        "f": "female"
      },
      default: "m"
    }
  }],
  expected: JSON.stringify({
    form: [
      {div: [
        {label: "Gender"},
        {ul: [
          {li: [
            {input: null, attributes: {
              type: "radio",
              id: "gender_m",
              name: "gender",
              value: "m",
              checked: "checked"
            }},
            {label: "male", attributes: {for: "gender_m"}}
          ]},
          {li: [
            {input: null, attributes: {
              type: "radio",
              id: "gender_f",
              name: "gender",
              value: "f"
            }},
            {label: "female", attributes: {for: "gender_f"}}
          ]}
        ], attributes: {id: "gender_radioboxes"}},
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


