$.test("Add page", "../_show/book", function() {
  equals($("head title", $.sandbox.document).text(), "Add page",
      "HTML title");
});
