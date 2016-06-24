'use strict';

var assume = require('assume');
var unwrap = require('./');

describe('unwrapper', function () {
  /*
   * Test helper that assumes an Array response
   */
  function assumeArray(err, res) {
    assume(err).falsey();
    assume(res).is.an('array');
  }

  /*
   * Test helper that assumes an Object response
   */
  function assumeObject(err, res) {
    assume(err).falsey();
    assume(res).is.an('object');
  }

  it('should return a function', function () {
    assume(unwrap(function () { })).is.a('function');
  });

  it('returns an Array of length more than 1', function () {
    var unwrapper = unwrap(assumeArray);
    unwrapper(undefined, [1, 2, 3]);
  });

  it('returns the first element of an Array of length 1', function () {
    var unwrapper = unwrap(assumeObject);
    unwrapper(undefined, [{ hi: true }]);
  });

  it("returns an Array if it doesn't satisfy the predicate", function () {
    var unwrapper = unwrap(assumeArray, function (obj) {
      return !obj.hi;
    });

    unwrapper(undefined, [{ hi: true }]);
  });

  it('returns the first element if the first element satisfies the predicate', function () {
    var unwrapper = unwrap(assumeObject, function (obj) {
      return !obj.hi;
    });

    unwrapper(undefined, [{ hi: true }]);
  });

});
