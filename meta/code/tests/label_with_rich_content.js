tests.push({
  description: "Form with radioboxes.",
  arguments: [{
    agreed_terms: {
      type: "checkbox",
      label: [
        {a: "Agree terms and conditions", attributes: {
          href: "http://www.google.com"
        }}
      ]
    }
  }],
  expected: JSON.stringify({
    form: [
      {ul: [
        {li: [
          {input: null, attributes: {
            type: "checkbox",
            id: "agreed_terms",
            name: "agreed_terms"
          }},
          {label: [
            {a: "Agree terms and conditions", attributes: {
              href: "http://www.google.com"
            }}
          ], attributes: {
            for: "agreed_terms"
          }},
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
