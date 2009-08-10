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

    meta.buildFieldOptions(metaField);
    formFields.push(label, input, meta.fieldDefinition.submit);
  }

  return {form: [
    {div: formFields}
  ], attributes: {
    action: "",
    method: "post"
  }};
};


meta.buildFieldOptions = function(metaField) {
  if (metaField.options && typeof metaField.options != 'string') {
    var options = [];

    for (var value in metaField.options) {
      options.push({
        option: metaField.options[value],
        attributes: {value: value}
      });
    }
  }
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
    }
  },
  textarea: {
    textarea: "",
    attributes: {}
  },
  select: {
    select: "",
    options: "view_name",
    attributes: {}
  },
  multiselect: {
    select: "",
    attributes: {
      multiple: "multiple"
    },
    options: {
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
    options: "the same as for selects",
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
