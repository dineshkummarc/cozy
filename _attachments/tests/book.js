tests.add({
  description: "Add book",
  url: "../_show/book",
  code: function() {
    var doc = tests.sandbox.document;
    var title = $("head title", doc).text();

    equals(title, "Add book", "Title");
    equals($("h1", doc).text(), title, "<h1>");
  }
});
