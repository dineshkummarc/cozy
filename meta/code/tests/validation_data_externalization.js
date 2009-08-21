tests.push({
  description: "Test validation externalization code.",
  context: meta,
  arguments: [{
    title: {
      type: "textbox",
      label: "The title",
      validation: {
        rules: {
          required: true
        },
        messages: {
          required: "The title is required."
        }
      }
    },
    author: {
      type: "textbox",
      label: "The author",
      validation: {
        rules: {
          maxlen: 50
        },
        messages: {
          maxlen: "The author name should be no longer than 50 caracters."
        }
      }
    }
  }],
  method: function(metaForm) {
    var expected_validation_data = {
      title: {
        rules: {
          required: true
        },
        messages: {
          required: "The title is required."
        }
      },
      author: {
        rules: {
          maxlen: 50
        },
        messages: {
          maxlen: "The author name should be no longer than 50 caracters."
        }
      }
    };

    var actual_validation_data = meta.getValidationData(metaForm);

    return JSON.stringify(expected_validation_data) ==
        JSON.stringify(actual_validation_data);
  }
});
