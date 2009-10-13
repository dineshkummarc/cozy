$.test("New page", "../_show/page", function() {
  equals($("head title", $.sandbox.document).text(), "New page",
      "HTML title");
});
