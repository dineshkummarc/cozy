var JsonHtml = {
  toXMLString: function(jsonArray) {
    var doc = <html xmlns="http://www.w3.org/1999/xhtml" lang="en"/>;

    if (!this.isArray(jsonArray)) {
      return 'JsonHtml.toXMLString() expects and array of objects.';
    }

    this.appendXMLChildren(doc, this.toXMLNodes(jsonArray));

    return  '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"\n' +
        '    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n' +
        doc.toXMLString();
  },

  correctJsonHtmlNodeToXMLNode: function(jsonNode) {
    var xmlNode;

    for (var property in jsonNode) {
      if (property != "attributes") {
        xmlNode = <{property}/>;

        var value = jsonNode[property];

        if (typeof value == "undefined") {
          value = this.errors.UNDEFINED_CONTENT;
        }

        if (this.isArray(value)) {
          var items = value;

          for each (var item in items) {
            this.appendXMLChildren(xmlNode, this.toXMLNode(item));
          }
        } else {
          this.appendXMLChildren(xmlNode, value);
        }
      }
    }

    this.setAttributes(xmlNode, jsonNode);

    return xmlNode;
  },

  toXMLNode: function(jsonNode) {
    var xmlNode;

    if (typeof jsonNode == "string") {
      xmlNode = jsonNode;
    } else if (typeof jsonNode == "undefined") {
      xmlNode = this.errors.UNDEFINED_JSON_NODE;
    } else if (this.isArray(jsonNode)) {
      xmlNode = this.toXMLNodes(jsonNode);
    } else if (typeof jsonNode == "object") {
      xmlNode = this.correctJsonHtmlNodeToXMLNode(jsonNode);
    } else {
      xmlNode = this.errors.INVALID_JSON_NODE_TYPE + ": " + typeof jsonNode;
    }

    return xmlNode;
  },

  toXMLNodes: function(jsonArray) {
    var xmlNodes = [];

    if (!this.isArray(jsonArray)) {
      jsonArray = [jsonArray];
    }

    for each (var jsonNode in jsonArray) {
      xmlNodes.push(this.toXMLNode(jsonNode));
    }

    return xmlNodes;
  },

  appendXMLChildren: function(xmlNode, children) {
    if (children == null) return;

    if (this.isArray(children)) {
      for each (var child in children) {
        xmlNode.appendChild(child);
      }
    } else {
      xmlNode.appendChild(children);
    }
  },

  setAttributes: function(xmlNode, jsonNode) {
    if (typeof jsonNode.attributes == "undefined") return;

    for (var attribute in jsonNode.attributes) {
      var value = jsonNode.attributes[attribute];

      xmlNode.@[attribute] = value;
    }
  },

  isArray: function(a) {
    var isArray = false;

    try {
      isArray = a.constructor == [].constructor;
    } catch (a) {
      // no need to do anything
    };

    return isArray;
  },

  errors: {
    UNDEFINED_JSON_NODE: "undefined jsonNode",
    UNDEFINED_CONTENT: "undefined content",
    INVALID_JSON_NODE_TYPE: "invalid jsonNode type: "
  }
}, meta = {};
