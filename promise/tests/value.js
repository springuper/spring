var ValuePromise = require('../value'),
    assert = require('assert');

describe('Value Promise', function () {
    describe('fulfill', function () {
        it('should fulfill with a value', function (done) {
            var fulfilledValue = null,
                fulfilledChainValue = null,
                fulfilledPromise = ValuePromise(function (resolve, reject) {
                    setTimeout(function () {
                        resolve('value');
                    }, 100);
                });

            fulfilledPromise.then(function (value) {
                fulfilledValue = value;
            }, function () {
                fulfilledValue = null;
            }).then(function (value) {
                fulfilledChainValue = value;
            }, function () {
                fulfilledChainValue = null;
            });

            setTimeout(function () {
                assert(fulfilledValue === fulfilledChainValue && fulfilledValue === 'value', 'fulfilled promise failed');
                done();
            }, 200);
        });
    });

    describe('reject', function () {
        it('should reject with a reason', function (done) {
            var rejectedValue = null,
                rejectedChainValue = null,
                rejectedPromise = ValuePromise(function (resolve, reject) {
                    setTimeout(function () {
                        reject('reason');
                    }, 100);
                });

            rejectedPromise.then(function (value) {
                rejectedValue = null;
            }, function (reason) {
                rejectedValue = reason;
            }).then(function (value) {
                rejectedChainValue = null;
            }, function (reason) {
                rejectedChainValue = reason;
            });

            setTimeout(function () {
                assert(rejectedValue === rejectedChainValue && rejectedValue === 'reason', 'rejected promise failed');
                done();
            }, 200);
        });
    });
});
