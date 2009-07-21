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

  toXMLNode: function(jsonNode) {
    var xmlNode;

    if (this.isArray(jsonNode)) {
      xmlNode = this.toXMLNodes(jsonNode);
    } else if (typeof jsonNode == "string") {
      xmlNode = jsonNode;
    } else if (typeof jsonNode == "undefined") {
      xmlNode = "undefined jsonNode";
    } else if (typeof jsonNode == "object") {
      for (var property in jsonNode) {
        var value = jsonNode[property];

        if (property !== "attributes") {
          xmlNode = <{property}/>;

          if (typeof value == "undefined") {
            value = "undefined content";
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

        this.setAttributes(xmlNode, jsonNode);
      }
    } else {
      xmlNode = "invalid jsonNode type: " + typeof jsonNode;
    }


    return xmlNode;
  },

  toXMLNodes: function(jsonArray) {
    var xmlNodes = [];

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

  isArray: function(value) {
    if (typeof value == "undefined") return false;
    if (typeof value == "number") return false;
    if (value == null) return false;

    return value.constructor.toString().indexOf("function Array() {") === 0;
  }
}, meta = {};
