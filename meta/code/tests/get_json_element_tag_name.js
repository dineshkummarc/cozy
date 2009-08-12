tests.push({
  method: meta.getTagName,
  description:
      "meta.getTagName() returns the tag name when the JSON element"
      + " has only the tag name defined.",
  arguments: [{br: null}],
  expected: "br"
}, {
  method: meta.getTagName,
  description:
      "meta.getTagName() returns the tag name when the JSON"
      + " element has a non-attributes property and attributes defined.",
  arguments: [{input: null, attributes: {type: "text"}}],
  expected: "input"
}, {
  description:
      "meta.getTagName() returns the tag name when the JSON element has the"
      + " attributes and a non-attributes property defined in this order.",
  method: meta.getTagName,
  arguments: [{attributes: {type: "submit"}, button: null}],
  expected: "button"
}, {
  description:
      "meta.getTagName() failes when the JSON element has"
      + " no non-attributes property.",
  method: function(jsonNode) {
    try {
      return meta.getTagName(jsonNode);
    } catch(e) {
      return true;
    }
  },
  arguments: [{attributes: {type: "foo"}}],
  expected: true
});
