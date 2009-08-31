meta.page = {
  title: "Author"
}

meta.html = [
  {head:[
    {title: meta.page.title},
  ]},
  {body:[
    {h1: meta.page.title},
    meta.buildForm(meta.form)
  ]}
];
