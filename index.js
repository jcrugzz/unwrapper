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
module.exports = function unwrapper(fn, def) {
  return function (err, results) {
    if (err) return fn(err);

    return fn(undefined, (results
      && results.length <= 1
        ? results[0]
        : results) || def);
  }
};
