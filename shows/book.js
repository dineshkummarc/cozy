function(doc, req) {
  // !code vendor/couchapp/path.js
  // !code lib/json_html/JsonHtml.js
  // !code lib/utilities/Utilities.js
  // !code meta/forms/lib/libraries.js
  // !code meta/forms/book/head.js
  // !code meta/forms/book/header.js
  // !code meta/forms/book/form.js
  // !code meta/code/buildForm.js
  // !code meta/code/includeScript.js
  // !code meta/forms/book/page.js

  return {
    body: JsonHtml.toXMLString(meta.html)
  };
};
