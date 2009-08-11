meta.buildForm = function(metaForm) {
  var formFields = [];

  for (var fieldName in metaForm) {
    var metaField = metaForm[fieldName];
    var label = {
          label: metaField.label || fieldName,
          attributes: {
            for: fieldName
          }
        }; 
    var input = meta.fieldDefinition[metaField.type];
    var tagName = meta.getTagName(input);

    input[tagName] = meta.buildFieldOptions(metaField) || input[tagName];

    Utilities.apply(input.attributes, {
      id: fieldName,
      name: fieldName
    });

    formFields.push(label, input, meta.fieldDefinition.submit);
  }

  return {form: [
    {div: formFields}
  ], attributes: {
    action: "",
    method: "post"
  }};
};


meta.getTagName = function(jsonNode) {
  for (var property in jsonNode) {
    if (property != "attributes") return property;
  }

  throw "jsonNode should have a tag name";
}


meta.buildFieldOptions = function(metaField) {
  var options;

  if (metaField.options && typeof metaField.options != 'string') {
    options = [];

    for (var value in metaField.options) {
      options.push({
        option: metaField.options[value],
        attributes: {value: value}
      });
    }
  }

  return options;
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
    attributes: {}
  },
  multiselect: {
    select: "",
    attributes: {
      multiple: "multiple"
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
    }
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
