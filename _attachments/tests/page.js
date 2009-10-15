Cozy.test("Default page", "../_show/page", function(sandbox) {
  equals($("head title", sandbox).text(), "New page",
      "HTML title");
});
