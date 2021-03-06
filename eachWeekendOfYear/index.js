'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = eachWeekendOfYear

var _index = require('../eachWeekendOfInterval/index.js')

var _index2 = _interopRequireDefault(_index)

var _index3 = require('../startOfYear/index.js')

var _index4 = _interopRequireDefault(_index3)

var _index5 = require('../endOfYear/index.js')

var _index6 = _interopRequireDefault(_index5)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * @name eachWeekendOfYear
 * @category Year Helpers
 * @summary List all the Saturdays and Sundays in the year.
 *
 * @description
 * Get all the Saturdays and Sundays in the year.
 *
 * @param {Date|String|Number} date - the given year
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date[]} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Lists all Saturdays and Sundays in the year
 * var result = eachWeekendOfYear(new Date(2020, 1, 1))
 * //=> [
 *   2020-01-03T23:00:00.000Z,
 *   2020-01-04T23:00:00.000Z,
 *   2020-01-10T23:00:00.000Z,
 *   ...
 *   2020-12-26T23:00:00.000Z
 * ]
 */
function eachWeekendOfYear(dirtyDate, dirtyOptions) {
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
