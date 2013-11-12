var asap = require('asap');

function Promise(fn) {
    if (!(this instanceof Promise)) return new Promise(fn);
    if (typeof fn !== 'function') throw new TypeError('not a function');

    var state = null,
        deferreds = [],
        self = this;
        
    self.then = function (onFulfilled, onRejected) {
        handle({
            onFulfilled: onFulfilled || null,
            onRejected: onRejected || null
        });
        return self;
    };

    function resolve() {
        state = true;
        final();
    }

    function reject() {
        state = false;
        final();
    }

    function final() {
        var i, len;
        for (i = 0, len = deferreds.length; i < len; ++i) {
            handle(deferreds[i]);
        }
        deferreds = null;
    }

    function handle(deferred) {
        if (state === null) {
            deferreds.push(deferred);
            return;
        }

        asap(function () {
            var cb = state ? deferred.onFulfilled : deferred.onRejected;
            if (cb) cb();
        });
    }

    fn(resolve, reject);
}

module.exports = Promise;
