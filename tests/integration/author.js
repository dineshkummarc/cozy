//!/usr/local/bin/couchjs

load("vendor/http.js");
load("vendor/json2.js");

var html = HTTP.GET("http://127.0.0.1:5984/cozy/_design/cozy/_show/author").responseText;

quit(0);
