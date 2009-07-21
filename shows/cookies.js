function(doc, req) {
  // !code lib/json_html/JsonHtml.js
  // !code meta/forms/default/head.js
  // !code meta/forms/default/page.js

  return {
    body: "cookies test",
    headers: {
      "Custom-Header": "string value",
      "Set-Cookie": "test=value; Path=/"
    }
  }
};
