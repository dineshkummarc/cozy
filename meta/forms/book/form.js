meta.form = {
  titlu: {
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
        required: "The titlu is required."
      }
    }
  }
}
