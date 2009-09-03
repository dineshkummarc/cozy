$.runTest({
  description: "Author page: add",
  url: "../_show/author",
  code: function() {
    var form = $("form#author", $.sandbox.document);
    var name = $("#name:text:enabled", form);

    console.log($.exist(form, name) && name.val() == "");
  }
});
