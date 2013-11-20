var SimplePromise = require('../simple'),
    assert = require('assert');

describe('Value Promise', function () {
    describe('fulfill', function () {
        it('should at fulfilled state', function (done) {
            var fulfilledState = null,
                fulfilledStateChain = null,
                fulfilledPromise = SimplePromise(function (resolve, reject) {
                    setTimeout(function () {
                        resolve();
                    }, 100);
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
                done();
            }, 200);
        });
    });

    describe('reject', function () {
        it('should at rejected state', function (done) {
            var rejectedState = null,
                rejectedStateChain = null,
                rejectedPromise = SimplePromise(function (resolve, reject) {
                    setTimeout(function () {
                        reject();
                    }, 100);
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
                done();
            }, 200);
        });
    });
});
