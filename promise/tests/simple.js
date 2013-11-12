var SimplePromise = require('../simple'),
    assert = require('assert'),
    fulfilledState = null,
    fulfilledStateChain = null,
    rejectedState = null,
    rejectedStateChain = null;

var fulfilledPromise = SimplePromise(function (resolve, reject) {
    setTimeout(function () {
        resolve();
    }, 1000);
});

fulfilledPromise.then(function () {
    fulfilledState = true;
}, function () {
    fulfilledState = false;
}).then(function () {
    fulfilledStateChain = true;
}, function () {
    fulfilledStateChain = false;
});

setTimeout(function () {
    assert(fulfilledState && fulfilledStateChain, 'fulfilled promise failed');
}, 2000);

var rejectedPromise = SimplePromise(function (resolve, reject) {
    setTimeout(function () {
        reject();
    }, 1000);
});

rejectedPromise.then(function () {
    rejectedState = true;
}, function () {
    rejectedState = false;
}).then(function () {
    rejectedStateChain = true;
}, function () {
    rejectedStateChain = false;
});

setTimeout(function () {
    assert(rejectedState === false && rejectedStateChain === false, 'rejected promise failed');
}, 2000);
