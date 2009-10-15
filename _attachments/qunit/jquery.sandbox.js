// hack for compilation with SpiderMonkey
var $ = $ || {};
var QUnit = QUnit || {asyncTest:function(){},start:function(){}};

var Cozy = {
  test: function(description, url, tests) {
    QUnit.asyncTest(description, function() {
      if (Cozy.cantLoad(url)) {
        QUnit.start();
        return;
      }

      var sandbox = Cozy.createSandbox();

      sandbox.onload = function() {
        Cozy.run(tests).on(sandbox.document);
        Cozy.delete(sandbox);
        QUnit.start();
      };

      sandbox.location.href = url;
    });
  },

  cantLoad: function(url) {
    var request = $.ajax({
      type: "HEAD",
      url: url,
      async: false,
      cache: false
    });

    var urlLoaded = request.status == 200;
    var message = "Can load the page";
    
    if (!urlLoaded)
      message = "Can't load the page: " + request.statusText;

    ok(urlLoaded, message);

    return !urlLoaded;
  },

  createSandbox: function() {
    $("body").append("<iframe></iframe>");
    return frames[0];
  },

  delete: function(sandbox) {
    sandbox.location.href = "about:blank";
    $("iframe").remove();
  },

  run: function(code) {
    return {
      on: function(context) {
        code(context);
      }
    };
  }
}

$.exist = function(selector, context) {
  return $(selector, context).length > 0;
};
