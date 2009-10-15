Cozy.test("Add book form", "../_show/book", function(sandbox) {
  equals($("head title", sandbox).text(), "Add book", "HTML title");
  equals($("h1:first", sandbox).text(), "Add book", "h1 title");

  var form = $("form#book", sandbox);

  ok($.exist(form, sandbox), "The form is here");
  ok($.exist("input:text#title", form), "The title field is here");
  ok($.exist("input:text#author", form), "The author field is here");
  ok($.exist("textarea#description", form), "The author field is here");
  ok($.exist("button[type='submit']", form), "The submit button is here");

  $("input#title", form).val("Planning Extremme Programming");
  $("input#author", form).val("Kent Beck");
  $("textarea#description", form).val("A short description");
  frames[0].$("form#book").data("async", false);
  $("button[type='submit']", form).trigger("click");
  console.log(JSON.stringify(frames[0].$.cache));
  frames[0].$("form#book").removeData("async");
  //aici
  console.log(frames[0].$("form#book").data("error"));
  console.log(frames[0].$("form#book").data("success"));
});
