'use strict';

/**
 * Unwrap a result into an object when necessary.
 *
 * @param {Function} fn Callback to receive the unwrapped stuff.¬
 * @param {value} Default value if undefined is the result of the unwrapping
 * @returns {Function} The unwrap stuff.¬
 * @api public¬
 *
 */
module.exports = function unwrapper(fn, def, pred) {
  if (typeof def === 'function' && !pred) {
    pred = def;
    def = undefined;
  }

  return function (err, results) {
    if (err) return fn(err);

    var unwrap;
    if (results && typeof results[0] !== 'undefined') {
      unwrap = results.length <= 1
      if (unwrap && pred) {
        unwrap = pred(results[0])
      };
    }

    return fn(undefined, unwrap
      ? results[0] || def
      : results);
  }
};
