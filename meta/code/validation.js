meta.applyDefaultValidation = function(field) {
};


meta.getValidationData = function(metaForm) {
    var validation_data = {};

    for (var fieldName in metaForm) {
      validation_data[fieldName] = metaForm[fieldName].validation;
    }

    return validation_data;
}


meta.defaultValidation = {
  rules: {
  },
  messages: {
    required: "This field is required.",
    pattern: "This field does not match the pattern ."
  }
};
