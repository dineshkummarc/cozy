tests.push({
  description: "Throws an error when a required field is empty" +
      " and the error message is the one specified in validation data",
  method: function(doc, validationData, incremental) {
    try {
      valid(doc, validationData, incremental);
      return "No exception thrown";
    } catch(e) {
      return JSON.parse(e).message;
    }
  },
  arguments: [{
    title: ""
  }, {
    title: {
      rules: {
        required: true
      },
      messages: {
        required: "Titlul este obligatoriu"
      }
    }
  }],
  expected: "Titlul este obligatoriu"
}, {
  description: "Throws an error when a required field is empty" +
      " and the error message has the pattern: " +
      "'fieldName: validationCode.required.message" +
      " when no error message is given in validation data.",
  method: function(doc, validationData, incremental) {
    try {
      valid(doc, validationData, incremental);
      return "No exception thrown";
    } catch(e) {
      return JSON.parse(e).message;
    }
  },
  arguments: [{
    title: ""
  }, {
    title: {
      rules: {
        required: true
      }
    }
  }],
  expected: "title: " + validationCode.required.message
}, {
  description: "Returns true when a required field is not empty",
  method: function(doc, validationData, incremental) {
    try {
      valid(doc, validationData, incremental);
      return true;
    } catch(e) {
      return JSON.parse(e).message;
    }
  },
  arguments: [{
    title: "The book title"
  }, {
    title: {
      rules: {
        required: true
      }
    }
  }],
  expected: true
}, {
  description: "Returns true when a non-required field is not empty",
  method: valid,
  arguments: [{
    title: ""
  }, {
    title: {
      rules: {
        required: false
      }
    }
  }],
  expected: true
}, {
  description: "When a required field is not present in the document at" +
      " all throws an exception with the message having pattern: " +
      " Unkown field to validate: fieldName",
  method: function(doc, validationData) {
    try {
      valid(doc, validationData);
      return "No exception thrown";
    } catch(e) {
      return e;
    }
  },
  arguments: [{
    other_property: ""
  }, {
    title: {
      rules: {
        required: true
      }
    }
  }],
  expected: "Unkown field to validate: title"
});
