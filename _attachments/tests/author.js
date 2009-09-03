$.scheduleTest({
  description: "Author page",
  url: "../_show/author",
  code: function() {
    var form = $("form#author", window.sandbox.document);
    var name = $("form#author", window.sandbox.document);

    console.log($.exists(form, name));
  }
});
