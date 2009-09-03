$.exists = function() {
  for (var i = 0; i < arguments.length; i++) {
    if ($(arguments[i]).length == 0) return false;
  }

  return true;
};

// check jquery.couchapp for such an implementation
$.getDoc = function(url) {
  return $.ajax({
    url: url,
    cache: false,
    timeout: 1000,
    dataType: "text",
    async: false
  });
};

$.scheduleTest = function(test) {
  $(window.sandbox)
    .attr("src", test.url)
    .bind("load", test.code);
};
