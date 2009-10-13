// hack for script validation
var $ = $ || new Function;
var asyncTest = asyncTest || new Function;

$.test = function(description, url, testCode) {
  asyncTest(description, function() {
    var httpStatus = checkHttpStatus();

    if (httpStatus != 200) {
      start();
      return;
    }

    createSandbox().onload = function() {
      testCode();
      deleteSandbox();
      start();
    };

    $.sandbox.location.href = url;
  });

  function checkHttpStatus() {
    var request = $.ajax({
      type: "HEAD",
      url: url,
      async: false,
      cache: false
    });

    equals(request.status, 200, "Check HTTP status code");
    equals(request.statusText, "OK", "Check HTTP status text");

    return request.status;
  }

  function createSandbox() {
    $("body").append("<iframe id='sandbox' src='about:blank'></iframe>");
    return $.sandbox = frames[0];
  }

  function deleteSandbox() {
    $.sandbox.location.href = "about:blank";
    $("iframe#sandbox").remove();
    $.sandbox = null;
    delete $.sandbox;
  }
};

$.exist = function(selector, context) {
  return $(selector, context).length > 0;
};
