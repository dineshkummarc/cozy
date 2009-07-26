meta.buildForm = function(metaForm) {
  var formFields = [];

  for (var fieldName in metaForm) {
    var metaField = metaForm[fieldName];

    var labelText = (metaField.label || fieldName)
        + (metaField.beforeLabel ? "" : ":");

    var label = {label: labelText,
      attributes: {
        for: fieldName
      }};

    var input = meta.fieldDefinition[metaField.type];

    Utilities.apply(input.attributes, {
      id: fieldName,
      name: fieldName
    });

    if (metaField.beforeLabel) {
      formFields.push(input, label);
    } else {
      formFields.push(label, input);
    }

    formFields.push(meta.fieldDefinition.submit);
  }

  return {form: [
    {div: formFields}
  ], attributes: {
    action: "",
    method: "post"
  }};
};


meta.fieldDefinition = {
  textbox: {
    input: null,
    attributes: {
      type: "text"
    }
  },
  password: {
    input: null,
    attributes: {
      type: "password"
    },
    _needsConfirmation: false
  },
  textarea: {
    textarea: ""
  },
  select: {
    select: "",
    options: "view_name"
  },
  multiselect: {
    select: "",
    attributes: {
      multiple: "multiple"
    },
    _options: {
      "1": "First option",
      "2": "Second option",
      "3": "Third option"
    }
  },
  checkbox: {
    input: null,
    attributes: {
      type: "checkbox",
      checked: false
    }
  },
  radiobox: {
    input: null,
    attributes: {
      type: "radio"
    },
    _options: "the same as for selects",
  },
  submit: {
    button: "submit",
    attributes: {
      type: "submit"
    }
  },
  button: {
    button: "button",
    attributes: {
      type: "button"
    }
  }
};
