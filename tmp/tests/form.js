meta.form = {
  gender: {
    type: "radiobox",
    options: {
      m: "male",
      f: "female"
    },
    default: "f"
  },
  title: {
    type: "textbox",
    label: "The title",
    validation: {
      rules: {
        required: true,
        pattern: /^\d{3}-\d{6}$/,
        maxlen: 50,
        minlen: 5
      },
      messages: {
        required: "The title is required."
      }
    }
  },
  parola: {
    type: "password",
    label: "Parola:"
  },
  shoot: {
    type: "button"
  },
  agreed_terms: {
    type: "checkbox",
    label: [
      "Agree",
      {a: "Terms and conditions", attributes: {
        href: "http://www.google.md/intl/en/privacy.html"
      }}
    ]
  }
};
