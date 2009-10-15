$.CouchApp(function(app) {
  app.docForm("form#book", {
    fields: ["title", "author", "description"],
    beforeSave: function(doc) {
      doc._id = app.slugifyString(doc.author + "-" + doc.title);
    },
    success: function(resp) {
      console.log(resp);
      window.resp = resp;
    }
  });
});
