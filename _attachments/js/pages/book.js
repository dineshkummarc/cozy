$.CouchApp(function(app) {
  app.docForm("form", {
    fields: ["title"],
    beforeSave: function(doc) {
      doc._id = doc.name;
    },
    success: function(doc) {
      //if (doc.id) history.go(-1);
    }
  });
});
