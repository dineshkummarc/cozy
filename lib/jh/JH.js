var JH = {
  toHtml5: function(jhNode) {
    return "<!DOCTYPE html>\n" +
      this.toHtmlNode(jhNode).toXMLString();
  },

  toHtmlNode: function(jhNode) {
    if (jhNode === undefined) return new XML("undefined");

    var nodeType = Utilities.getType(jhNode);
    var transformer = JH.transformers[nodeType + "ToHtml"];

    if (transformer)
      return transformer(jhNode);
    else
      throw "JH.toHtmlNode: no transformer for jhNode type [" + nodeType +"]";
  },

  transformers: {
    objectToHtml: function(jhNode) {
      var htmlNode, tagName, value, attributes;

      for (var key in jhNode) {
        if (key != "attributes") {
          tagName = key;
          value = jhNode[tagName];
        } else {
          attributes = jhNode[key];
        }
      }

      htmlNode = <{tagName}/>;

      if (value !== null)
        htmlNode.appendChild(JH.toHtmlNode(value));

      if (attributes)
        for (var attributeName in attributes)
          htmlNode.@[attributeName] = attributes[attributeName];

      return htmlNode;
    },

    stringToHtml: function(value) {
      return new XML(value);
    },

    nullToHtml: function() {
      return null;
    },

    arrayToHtml: function(jhNodes) {
      var htmlNodes = <></>;

      for each (var jhNode in jhNodes)
        htmlNodes += JH.toHtmlNode(jhNode);

      return htmlNodes;
    }
  }
};

var page = {};
