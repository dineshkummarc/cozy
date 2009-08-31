// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

// couch.js, with modifications

// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

// This is a JS wrapper for the curl function made available in couch_js.c,
// it should be used in other JavaScripts that would like to make HTTP calls.
var HTTP = (function() {
  function parseCurl(string) {
    var parts = string.split(/\r\n\r\n/);
    var body = parts.pop();
    var header = parts.pop();
    var headers = header.split(/\n/);

    var status = /HTTP\/1.\d (\d*)/.exec(header)[1];
    return {
      responseText: body,
      status: parseInt(status),
      getResponseHeader: function(key) {
        var keymatcher = new RegExp(RegExp.escape(key), "i");
        for (var i in headers) {
          var h = headers[i];
          if (keymatcher.test(h)) {
            var value = h.substr(key.length+2);
            return value.replace(/^\s+|\s+$/g,"");
          }
        }
        return "";
      }
    }
  };
  return {
    GET : function(url, body, headers) {
      var st, urx = url, hx = (headers || null);
      st = gethttp(urx, hx);
      return parseCurl(st);
    },
    HEAD : function(url, body, headers) {
      var st, urx = url, hx = (headers || null);
      st = headhttp(urx, hx);
      return parseCurl(st);
    },
    DELETE : function(url, body, headers) {
      var st, urx = url, hx = (headers || null);
      st = delhttp(urx, hx);
      return parseCurl(st);
    },
    MOVE : function(url, body, headers) {
      var st, urx = url, hx = (headers || null);
      st = movehttp(urx, hx);
      return parseCurl(st);
    },
    COPY : function(url, body, headers) {
      var st, urx = url, hx = (headers || null);
      st = copyhttp(urx, hx);
      return parseCurl(st);
    },
    POST : function(url, body, headers) {
      var st, urx = url, bx = (body || ""), hx = (headers || {});
      hx['Content-Type'] = hx['Content-Type'] || "application/json";
      st = posthttp(urx, bx, hx);
      return parseCurl(st);
    },
    PUT : function(url, body, headers) {
      var st, urx = url, bx = (body || ""), hx = (headers || {});
      hx['Content-Type'] = hx['Content-Type'] || "application/json";
      st = puthttp(urx, bx, hx);
      return parseCurl(st);
    }
  };
})();

RegExp.escape = function(text) {
  if (!arguments.callee.sRE) {
    var specials = [
      '/', '.', '*', '+', '?', '|',
      '(', ')', '[', ']', '{', '}', '\\'
    ];
    arguments.callee.sRE = new RegExp(
      '(\\' + specials.join('|\\') + ')', 'g'
    );
  }
  return text.replace(arguments.callee.sRE, '\\$1');
}
