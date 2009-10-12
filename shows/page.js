function(doc, req) {
  // !code lib/jh/JH.js
  // !code lib/utilities/Utilities.js
  // !code _attachments/pages/default/title.js
  // !code _attachments/pages/default/css.js
  // !code _attachments/pages/default/head.js
  // !code _attachments/pages/default/body.js
  // !code _attachments/pages/default/page.js

  return {
    body: JH.toHtml5(page)
  }
};
