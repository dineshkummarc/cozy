meta.buildForm = function(metaForm) {
  var formFields = [];

  for (var name in metaForm) {
    metaField = metaForm[name];
    meta.applyFieldDefaults(metaField);

    var label = {
      label: (metaField.label || name) + (metaField.beforeLabel ? "" : ":"),
      attributes: {
        for: name
      }
    };

    var input = {input: null, attributes: {
        type: metaField.type,
        name: name,
        id: name
      }};

    if (metaField.beforeLabel) {
      formFields.push(input, label);
    } else {
      formFields.push(label, input);
    }
  }

  return {form: [
    {div: [
      formFields,
      {button: "Yes!", attributes: {
        type: "submit"
      }}
    ]}
  ], attributes: {
    action: "",
    method: "post"
  }};
};

meta.applyFieldDefaults = function(field) {
  var defaults = meta.fieldDefaults[field.type] || {};

  Utilities.apply(field, defaults);
};

meta.fieldDefaults = {
  type: "text",
  beforeLabel: false
};

meta.fieldDefaults = {
  textbox: {
    _attributes: {
      type: "text"
    }
  },
  password: {
    hasConfirmation: false,
    _attributes: {
      type: "password"
    }
  },
  textarea: {
    textarea: ""
  },
  select: {
    select: "" /* how to define options? */,
    options: "view_name"
  },
  multiselect: {
    select: "" /* how to define options? */,
    options: {
      "1": "First option",
      "2": "Second option",
      "3": "Third option"
    },
    _attributes: {
      multiple: "multiple"
    }
  },
  checkbox: {
    input: null,
    _attributes: {
      type: "checkbox",
      checked: false
    }
  },
  radiobox: {
    input: null,
    options: "the same as for selects",
    _attributes: {
      type: "radio"
    }
  }
};
