// How to name organize this?
var JHF = {
  buildField: function(id, metaData) {
    var type = metaData.type || "text";
    var builder = this.builders[type + "Field"];

    if (!builder) throw "JHF.buildField: no builder for type [" + type + "]";

    return {li: builder(id, metaData)};
  },

  builders: {
    textField: function(id, metaData) {
      var attributes = {
        id: id,
        type: "text"
      };

      if (metaData.disabled) attributes.disabled = "disabled";
      if (metaData.readonly) attributes.readonly = "readonly";
      if (metaData.default) attributes.value = metaData.default;

      return [
        {label: metaData.label || id, attributes: {for: id}},
        {input: null, attributes: attributes}
      ];
    },

    passwordField: function(id, metaData) {
      var attributes = {
        id: id,
        type: "password"
      };

      if (metaData.disabled) attributes.disabled = "disabled";

      return [
        {label: metaData.label || id, attributes: {for: id}},
        {input: null, attributes: attributes}
      ];
    },

    radioField: function(id, metaData) {
      var ul = [];

      for (var option in metaData.options) {
        var disabled = false;
        var label = metaData.options[option];

        if (/^-/.test(option)) {
          disabled = true;
          option = option.substr(1);
        }

        var attributes = {
          id: id + "_" + option,
          name: id,
          type: "radio",
          value: option
        };

        if (disabled) attributes.disabled = "disabled";
        if (metaData.default && metaData.default == option) attributes.checked = "checked";

        ul.push({li: [
          {input: null, attributes: attributes},
          {label: label, attributes: {for: id + "_" + option}}
        ]});
      }

      return [
        {label: metaData.label || id},
        {ul: ul}
      ];
    },

    checkboxField: function(id, metaData) {
      var attributes = {
        id: id,
        type: "checkbox"
      };

      if (metaData.disabled) attributes.disabled = "disabled";

      return [
        {input: null, attributes: attributes},
        {label: metaData.label || id, attributes: {for: id}}
      ];
    },

    selectField: function(id, metaData) {
      var select = [];

      for (var option in metaData.options) {
        var optionLabel = metaData.options[option];
        var disabled = false;

        if (/^-/.test(option)) {
          disabled = true;
          option = option.substr(1);
        }

        var attributes = {value: option};

        if (disabled) attributes.disabled = "disabled";

        select.push({
          option: optionLabel,
          attributes: attributes
        });
      }

      var attributes = {id: id};

      if (metaData.multiple) attributes.multiple = "multiple";
      if (metaData.disabled) attributes.disabled = "disabled";

      return [
        {label: metaData.label || id, attributes: {for: id}},
        {select: select, attributes: attributes}
      ];
    }
  }
};
