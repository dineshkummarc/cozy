tests.push({
  description: "Fails with empty document",
  arguments: [{}, {tralala: "tralala"}],
}, {
  description: "Fails with empty validation data",
  arguments: [{tralala: "tralala"}, {}],
}, {
  description: "Fails without arguments",
  arguments: []
});
