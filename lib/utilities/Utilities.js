var Utilities = {
  apply: function(object, defaults) {
    var property;

    for each (property in defaults) {
      if (typeof object[property] == "undefined") {
        object[property] = defaults[property];
      }
    }

    return object;
  }
};
