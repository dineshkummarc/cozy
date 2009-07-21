meta.includeScript = function(name) {
  return {
    script: "", attributes: {
      type: "text/javascript",
      src: assetPath() + "/" + name + ".js"
    }
  }
};
