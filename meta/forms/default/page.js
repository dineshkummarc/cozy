meta.html = [
  {head: meta.head},
  {body: [
    meta.header,
    {h2: "Page content"},
    {ol: [
      {li: "item"},
      {li: "item"},
      {li: "item"},
      {li: "item"},
    ], attributes: {id: "leftNav"}},
    {div: [
      {p: "First paragraph.", attributes: {class: "crazy idea"}},
      "some plain text",
      {p: "Second paragraph."}
    ]},
    meta.footer
  ], attributes: {id: "homePage"}}
];
