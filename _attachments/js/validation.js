function valid(doc, validationData, incremental) {
  var emptyDocument = true;

  for (var property in doc) {
    emptyDocument = false;
  }

  if (emptyDocument) throw "Empty document";


  var emptyValidationData = true;

  for (var fieldName in validationData) {
    if (typeof doc[fieldName] === "undefined") {
      throw "Unkown field to validate: " + fieldName
    }

    for (var rule in validationData[fieldName].rules) {
      if (typeof doc[fieldName] == "unefined") {
        throw "Could not validate " + fieldName + ": field not found"
      }

      if (!validationCode[rule].run(
          doc[fieldName],
          validationData[fieldName].rules[rule])) {
        var e = {
          fieldName: fieldName,
          message:
              validationData[fieldName].messages
                  && validationData[fieldName].messages[rule] ||
              fieldName + ": " + validationCode[rule].message ||
              fieldName + ": invalid"
        }

        throw JSON.stringify(e);
      }
    }

    emptyValidationData = false;
  }

  if (emptyValidationData) {
    throw "Empty validation data";
  } else {
    return true;
  }
}

var validationCode = {
  required: {
    run: function(fieldValue, ruleValue) {
      if (ruleValue == false) return true;
      if (typeof fieldValue == "undefined") return false;
      if (typeof fieldValue == "boolean") return true;
      if (typeof fieldValue == "string" && fieldValue != "") return true;
    },
    message: "Required"
  }
};
