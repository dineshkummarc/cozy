meta.buildForm = function(metaForm) {
  var fields = [];
  var id = metaForm._entityName;

  delete metaForm._entityName;

  for (var fieldName in metaForm) {
    var metaField = metaForm[fieldName];
    var label = {label: metaField.label || fieldName}; 

    if (typeof metaField.type == "undefined") {
      metaField.type = "textbox";
    }

    var input = Utilities.clone(meta.fieldDefinition[metaField.type]);

    if (typeof input == "undefined") {
      throw "Undefined metaField.type: " + metaField.type;
    }

    var tagName = meta.getTagName(input);

    if (metaField.type == "radiobox") {
      input.attributes = {id: fieldName + "_radioboxes"};
    } else {
      label.attributes = {for: fieldName};
      input.attributes.id = fieldName;

      if (metaField.type !== "button") input.attributes.name = fieldName;
    }

    if (metaField.options) {
      input[tagName] = meta.buildFieldOptions(metaField, fieldName);
    } else {
      if (metaField.default) input.attributes.value = metaField.default;
      if (["button", "submit"].indexOf(metaField.type) != -1) {
        input[tagName] = label.label;
      }
    }

    var li = [];

    if (["button", "submit", "checkbox"].indexOf(metaField.type) == -1) {
      li = [label];
    }

    li.push(input);

    if (metaField.type == "checkbox") li.push(label);

    fields.push({li: li});
  }

  fields.push({li: [meta.fieldDefinition.submit]});

  return {form: [
    {ul: fields}
  ], attributes: {
    action: "",
    method: "post",
    id: id
  }};
};


meta.getTagName = function(jsonNode) {
  for (var property in jsonNode) {
    if (property != "attributes") return property;
  }

  throw "jsonNode " + JSON.stringify(jsonNode) + " should have a tag name";
}


meta.buildFieldOptions = function(metaField, fieldName) {
  if (typeof metaField.options == 'string') return false;

  var options = [], option;

  for (var value in metaField.options) {
    if (metaField.type == "radiobox") {
      option = {li: [
        {input: null, attributes: {
          type: "radio",
          id: fieldName + "_" + value,
          name: fieldName,
          value: value
        }},
        {label: metaField.options[value], attributes: {
          for: fieldName + "_" + value
        }}
      ]};

      if (metaField.default && metaField.default == value) {
        option.li[0].attributes.checked = "checked";
      }
    } else if (["select", "multiselect"].indexOf(metaField.type) > -1) {
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
      type: "checkbox"
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
