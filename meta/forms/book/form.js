meta.form = {
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
  }
};
