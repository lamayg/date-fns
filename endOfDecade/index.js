'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = endOfDecade

var _index = require('../toDate/index.js')

var _index2 = _interopRequireDefault(_index)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * @name endOfDecade
 * @category Decade Helpers
 * @summary Return the end of a decade for the given date.
 *
 * @description
 * Return the end of a decade for the given date.
 *
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a decade
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The end of a decade for 12 May 1984 00:00:00:
 * var result = endOfDecade(new Date(1984, 4, 12, 00, 00, 00))
 * //=> Dec 31 1989 23:59:59.999
 */
function endOfDecade(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError(
      '1 argument required, but only ' + arguments.length + ' present'
    )
  }

  var date = (0, _index2.default)(dirtyDate, dirtyOptions)
  var year = date.getFullYear()
  var decade = 9 + Math.floor(year / 10) * 10
  date.setFullYear(decade, 11, 31)
  date.setHours(23, 59, 59, 999)
  return date
}
module.exports = exports['default']
