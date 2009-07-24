meta.html = [
  meta.head,
  {body: [
    meta.header,
    {h1: "Test form"},
    {p: "This is a simplistic working form for document creation."},
    meta.buildForm(meta.form),
    meta.libraries,
    meta.includeScript("book")
  ]}
];
