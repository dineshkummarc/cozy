function(doc, req) {
  // !code lib/json_html/JsonHtml.js
  // !code meta/forms/default/head.js
  // !code meta/forms/default/header.js
  // !code meta/forms/default/footer.js
  // !code meta/forms/default/page.js

  return {
    body: JsonHtml.toXMLString(meta.html)
  }
};
