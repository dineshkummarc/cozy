meta.buildForm = function(metaForm) {
  var formFields = [];

  for (var fieldName in metaForm) {
    var metaField = metaForm[fieldName];
    var label = {label: metaField.label || fieldName}; 
    var input = meta.fieldDefinition[metaField.type]
    var tagName = meta.getTagName(input);

    if (typeof input == "undefined") throw "Unknown meta field type: " + metaField.type;

    if (metaField.type == "radiobox") {
      input.attributes = {id: fieldName + "_radioboxes"};
    } else {
      label.attributes = {for: fieldName};
      Utilities.apply(input.attributes, {
        id: fieldName,
        name: fieldName
      });
    }

    var options = meta.buildFieldOptions(metaField, fieldName);

    if (options) {
      input[tagName] = options;
    } else {
      if (metaField.default) input.attributes.value = metaField.default;
    }

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

  throw "jsonNode " + JSON.stringify(jsonNode) + " should have a tag name";
}


meta.buildFieldOptions = function(metaField, fieldName) {
  if (metaField.options && typeof metaField.options != 'string') {
    var options = [];

    for (var value in metaField.options) {
      var option;

      if (metaField.type == "radiobox") {
        option = {
          li: [
            {input: null, attributes: {
              type: "radio",
              id: fieldName + "_" + value,
              name: fieldName,
              value: value
            }},
            {label: metaField.options[value], attributes: {for: fieldName + "_" + value}}
          ]
        };

        if (metaField.default && metaField.default == value) {
          option.li[0].attributes.checked = "checked";
        }
      } else {
        option = {
          option: metaField.options[value],
          attributes: {value: value}
        };

        if (metaField.default) {
          var isArray = metaField.default.constructor == [].constructor;
          var defaults = isArray ? metaField.default : [metaField.default];

          if (defaults.indexOf(value) > -1) {
            option.attributes.selected = "selected";
          }
        }
      }

      options.push(option);
    }

    return options;
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
    ul: ""
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
