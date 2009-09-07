$.exist = function() {
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

$.log = function(message) {
  $("#log").append('<p>' + message + '</p>');
}

$.runTest = function(test) {
  $.log(test.description);
  $.log(test.url);
  $($.sandbox).bind("load", test.code);
  $.sandbox.location.href = test.url;
};
