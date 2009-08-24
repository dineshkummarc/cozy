function isValid(doc, validationData, incremental) {
  if (JSON.stringify(doc) == "{}") throw "Document is empty";
  if (JSON.stringify(validationData) == "{}") throw "Validation data is empty";

  for (var fieldName in validationData) {
    if (typeof doc[fieldName] == "undefined") {
      throw JSON.stringify({
        fieldName: fieldName,
        message: "Unknown field to validate"
      });
    }

    for (var rule in validationData[fieldName].rules) {
      var fieldValue = doc[fieldName];
      var ruleValue = validationData[fieldName].rules[rule];

      if (!validationCode[rule].validates(fieldValue, ruleValue)) {
        var userValidationMessage = validationData[fieldName].messages &&
            validationData[fieldName].messages[rule];

        var message = userValidationMessage ||
            validationCode[rule].defaultMessage ||
            "Invalid";

        throw JSON.stringify({
          fieldName: fieldName,
          message: message
        });
      }
    }
  }

  return true;
}

var validationCode = {
  required: {
    validates: function(fieldValue, ruleValue) {
      if (ruleValue == false) return true;
      if (typeof fieldValue == "undefined") return false;
      if (typeof fieldValue == "boolean") return true;
      if (typeof fieldValue == "string" && fieldValue != "") return true;
    },
    defaultMessage: "Required"
  }
};
