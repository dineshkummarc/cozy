tests.push({
  description: "Form with labeled radio-boxes.",
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
      {ul: [
        {li: [
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
        ]},
        {li: [
          {button: "submit", attributes: {
            type: "submit"
          }}
        ]}
      ]}
    ], attributes: {
      action: "",
      method: "post"
    }
  })
});


