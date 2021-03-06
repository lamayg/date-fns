'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = eachWeekendOfMonth

var _index = require('../eachWeekendOfInterval/index.js')

var _index2 = _interopRequireDefault(_index)

var _index3 = require('../startOfMonth/index.js')

var _index4 = _interopRequireDefault(_index3)

var _index5 = require('../endOfMonth/index.js')

var _index6 = _interopRequireDefault(_index5)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * @name eachWeekendOfMonth
 * @category Month Helpers
 * @summary List all the Saturdays and Sundays in the given month.
 *
 * @description
 * Get all the Saturdays and Sundays in the given month.
 *
 * @param {Date|String|Number} date - the given month
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date[]} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Lists all Saturdays and Sundays in the given month
 * var result = eachWeekendOfMonth(new Date(2020, 1, 1))
 * //=> [
 *   2020-02-01T23:00:00.000Z,
 *   2020-02-07T23:00:00.000Z,
 *   2020-02-08T23:00:00.000Z,
 *   ...
 *   2020-02-28T23:00:00.000Z
 * ]
 */
function eachWeekendOfMonth(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError(
      '1 arguments required, but only ' + arguments.length + ' present'
    )
  }

  var startDate = (0, _index4.default)(dirtyDate, dirtyOptions)
  var endDate = (0, _index6.default)(dirtyDate, dirtyOptions)
  return (0, _index2.default)({ start: startDate, end: endDate })
}
module.exports = exports['default']
