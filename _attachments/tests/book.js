$.test("Add book", "../_show/book", function(sandbox) {
  equals($("head title", sandbox).text(), "Add book", "HTML title");
  equals($("h1:first", sandbox).text(), "Add book", "h1 title");

  var form = $("form#book", sandbox);

  ok($.exist(form, sandbox), "The form is here");
  ok($.exist("input:text#title", form), "The title field is here");
  ok($.exist("input:text#author", form), "The author field is here");
  ok($.exist("textarea#description", form), "The author field is here");

  var submitButton = $("button[type='submit']", form);
  ok($.exist(submitButton), "The submit button is here");

  submitButton.trigger("click");
});
