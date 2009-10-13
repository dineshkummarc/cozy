// hack for script validation
var $ = $ || new Function;
var asyncTest = asyncTest || new Function;

$.test = function(description, url, testCode) {
  asyncTest(description, function() {
    createSandbox().onload = function() {
      testCode();
      deleteSandbox();
      start();
    };

    $.sandbox.location.href = url;
  });

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
}
