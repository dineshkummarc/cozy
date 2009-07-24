$.CouchApp(function(app) {
  app.docForm("form", {
    fields: ["name"],
    beforeSave: function(doc) {
      console.log(doc);
      doc._id = doc.name;
    },
    success: function(doc) {
      //if (doc.id) history.go(-1);
    }
  });
});
