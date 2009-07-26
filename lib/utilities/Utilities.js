var Utilities = {
  apply: function(object, defaults) {
    if (!defaults) return object;

    if (!object) throw "Bad object to apply() defaults to: " + object;

    for (var property in defaults) {
      if (typeof object[property] == "undefined") {
        object[property] = defaults[property];
      }
    }

    return object;
  }
};
