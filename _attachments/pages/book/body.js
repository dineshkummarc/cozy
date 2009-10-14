page.body = {body: [
  {h1: "Add book"},
  Meta.buildForm("book", {
    title: {
      label: "Title:"
    },
    author: {
      label: "Author:"
    },
    description: {
      type: "textarea",
      label: "Description:"
    }
  }),
  {script: "", attributes: {
    type: "text/javascript",
    src: "/_utils/script/json2.js"
  }},
  {script: "", attributes: {
    type: "text/javascript",
    src: "/_utils/script/jquery.js"
  }},
  {script: "", attributes: {
    type: "text/javascript",
    src: "/_utils/script/jquery.couch.js"
  }},
  {script: "", attributes: {
    type: "text/javascript",
    src: assetPath() + "/vendor/couchapp/jquery.couchapp.js"
  }}
]};
