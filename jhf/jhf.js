// How to name organize this?
var JHF = {
  buildField: function(id, metaData) {
    var label = metaData.label || id;

    return {li: [
      {label: label, attributes: {for: id}},
      {input: null, attributes: {
        id: id,
        type: "text"
      }}
    ]};
  }
};
