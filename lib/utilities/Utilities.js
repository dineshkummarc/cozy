var Utilities = {
  apply: function(object, defaults) {
    for (var property in defaults) {
      if (typeof object[property] == "undefined") {
        object[property] = defaults[property];
      }
    }

    return object;
  }
};
