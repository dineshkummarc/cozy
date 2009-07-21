meta.html = [
  {head: meta.head || "" },
  {body: [
    {h1: "Page header"},
    {ul: [
      {li: [{a: "home", attributes: {href: "/", class: "active"}}]},
      {li: [{a: "faq", attributes: {href: "/faq.html"}}]},
      {li: [{a: "projects", attributes: {href: "/projects.html"}}]},
      {li: [{a: "contact", attributes: {href: "/contact.html"}}]}
    ], attributes: {id: "menu"}},
    {ul: [
      {li: "item"},
      {li: "item"},
      {li: "item"},
      {li: "item"},
    ], attributes: {id: "leftNav"}},
    {p: "First paragraph.", attributes: {class: "crazy idea"}},
    {p: "Second paragraph."},
    {br: null},
    "some plain text"
  ], attributes: {id: "homePage"}}
];
