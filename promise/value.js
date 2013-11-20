var asap = require('asap');

function Promise(fn) {
    if (!(this instanceof Promise)) return new Promise(fn);
    if (typeof fn !== 'function') throw new TypeError('not a function');

    var state = null,
        value = null,
        deferreds = [],
        self = this;
        
    self.then = function (onFulfilled, onRejected) {
        handle({
            onFulfilled: onFulfilled || null,
            onRejected: onRejected || null
        });
        return self;
    };

    function resolve(newValue) {
        state = true;
        value = newValue;
        final();
    }

    function reject(reason) {
        state = false;
        value = reason;
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
            if (cb) cb(value);
        });
    }

    doResolve(fn, resolve, reject);
}

function doResolve(fn, resolve, reject) {
    var done = false;
    fn(function (value) {
        if (done) return;
        done = true;
        resolve(value);
    }, function (reason) {
        if (done) return;
        done = true;
        reject(reason);
    });
}

module.exports = Promise;
