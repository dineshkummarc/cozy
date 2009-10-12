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
  maxTestDuration: 1000,

  add: function(test) {
    this.queue.push(test);
  },

  runsTooLong: function() {
    return new Date - tests.lastRun > this.maxTestDuration;
  },

  noMoreTests: function() {
    return tests.queue.length == 0;
  },

  waitingToLongForTests: function() {
    return new Date - tests.lastRun > tests.maxWait;
  },

  run: function() {
    if (tests.isRunning && !tests.runsTooLong()) {
      window.setTimeout(tests.run, 500);
      return;
    }

    if (tests.noMoreTests()) {
      if (tests.waitingToLongForTests()) return;

      window.setTimeout(tests.run, 500);
      return;
    }

    var test = tests.queue.shift();
    var request = $.ajax({
      type: "HEAD",
      url: test.url,
      async: false
    });

    if (request.status == 200) {
      $("body").append("<iframe id='sandbox' src='about:blank'></iframe>");
      tests.sandbox = window.frames[0];

      $(tests.sandbox).ready(function() {
        window.test(test.description, function() {
          console.log(test.description);
          console.log(tests.sandbox.location.href);
          tests.isRunning = true;
          test.code();
          tests.isRunning = false;
          $("#sandbox").remove();
          window.setTimeout(tests.run, 1500);
        });
      });

      tests.sandbox.location.href = test.url;
    } else {
      window.test(test.description, function() {
        var message = request.statusText || "HEAD request " +
          " failed. Is the tested page on the same host:port as the test" +
          " runner?";

        ok(false, test.url + ": HTTP " + request.status + ": " + message);
      });
    }

    tests.lastRun = +new Date;
  }
}

$(tests.run);
