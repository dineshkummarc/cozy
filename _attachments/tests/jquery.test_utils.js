var $ = $ || new Function; // hack for script validation

$.exist = function() {
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i].length == 0) return false;
  }

  return true;
};


var tests = {
  queue: [],
  lastRun: +new Date,
  maxWait: 5000,

  add: function(test) {
    this.queue.push(test);
  },

  run: function() {
    if (tests.queue.length == 0) {
      if (new Date - tests.lastRun > tests.maxWait) return;

      window.setTimeout(tests.run, 500);
      return;
    }

    var test = tests.queue.shift();

    $(tests.sandbox).bind("load", function() {
      window.test(test.description, test.code);
      tests.run();
    });

    tests.sandbox.location.href = test.url;
    tests.lastRun = +new Date;
  }
}

$(tests.run);
