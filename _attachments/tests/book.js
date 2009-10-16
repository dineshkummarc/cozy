Cozy.test("Add book form", "../_show/book", function(sandbox) {
  var sandboxDoc = sandbox.document;

  equals($("head title", sandboxDoc).text(), "Add book", "HTML title");
  equals($("h1:first", sandboxDoc).text(), "Add book", "h1 title");

  var form = $("form#book", sandboxDoc);

  ok($.exist(form, sandboxDoc), "The form is here");
  ok($.exist("input:text#title", form), "The title field is here");
  ok($.exist("input:text#author", form), "The author field is here");
  ok($.exist("textarea#description", form), "The author field is here");
  ok($.exist("button[type='submit']", form), "The submit button is here");

  $("input#title", form).val("Planning Extremme Programming");
  $("input#author", form).val("Kent Beck");
  $("textarea#description", form).val("A short description");

  Cozy.checkSubmit(form).inside(sandbox);
});
