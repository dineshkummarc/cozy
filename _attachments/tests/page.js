tests.add({
  description: "Default page",
  url: "../_show/page",
  code: function() {
    ok($("head title", tests.sandbox.document).text() == "New page",
        "We have the right title");

    var body = $("body", tests.sandbox.document);

    ok($.exist(body), "We have the <body>");
    ok($.exist($("h1:contains('This is a new page')", body)),
        "We have the right <h1>");
  }
});
