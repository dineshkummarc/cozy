meta.html = [
  meta.head,
  {body: [
    meta.header,
    {p: "This is a simplistic working form for document creation."},
    meta.buildForm(meta.form),
    meta.libraries,
    meta.includeScript("book")
  ]}
];
