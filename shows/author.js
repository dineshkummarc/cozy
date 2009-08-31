function(doc, req) {
  // !code vendor/couchapp/path.js
  // !code vendor/json2.js
  // !code lib/json_html/JsonHtml.js
  // !code lib/utilities/Utilities.js

  // !code meta/code/buildForm.js

  // !code meta/forms/author/form.js
  // !code meta/forms/author/page.js

  return {
    body: JsonHtml.toXMLString(meta.html)
  };
};
