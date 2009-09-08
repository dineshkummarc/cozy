tests.add({
  description: "Author page: add",
  url: "../_show/author",
  code: function() {
    var form = $("form#author", tests.sandbox.document);

    ok($.exist(form), "We have one form#author");
    ok($.exist($("#name:text:enabled", form)),
        "We have one #name:text:enabled");
  }
});
