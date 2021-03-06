'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = eachWeekendOfInterval

var _index = require('../toDate/index.js')

var _index2 = _interopRequireDefault(_index)

var _index3 = require('../_lib/toInteger/index.js')

var _index4 = _interopRequireDefault(_index3)

var _index5 = require('../eachDayOfInterval/index.js')

var _index6 = _interopRequireDefault(_index5)

var _index7 = require('../isSunday/index.js')

var _index8 = _interopRequireDefault(_index7)

var _index9 = require('../isWeekend/index.js')

var _index10 = _interopRequireDefault(_index9)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * @name eachWeekendOfInterval
 * @category Interval Helpers
 * @summary List all the Saturdays and Sundays in the given date interval.
 *
 * @description
 * Get all the Saturdays and Sundays in the given date interval.
 *
 * @param {Interval} interval - the given interval. See [Interval]{@link docs/types/Interval}
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {Date[]} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Lists all Saturdays and Sundays in the given date interval
 * var result = eachWeekendOfInterval({
 *   start: new Date(2022, 8, 17),
 *   end: new Date(2022, 8, 30)
 * })
 * //=> [
 *   2022-09-17T22:00:00.000Z,
 *   2022-09-23T22:00:00.000Z,
 *   2022-09-24T22:00:00.000Z
 * ]
 *
 * @example
 * // Lists all Saturdays and Sundays in the given date interval
 * var result = eachWeekendOfInterval({
 *   start: new Date(2016, 2, 25),
 *   end: new Date(2016, 2, 5)
 * })
 * //=> RangeError: Invalid interval
 */
function eachWeekendOfInterval(dirtyInterval, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError(
      '1 argument required, but only ' + arguments.length + ' present'
    )
  }

  var options = dirtyOptions || {}
  var locale = options.locale
  var localeWeekStartsOn =
    locale && locale.options && locale.options.weekStartsOn
  var defaultWeekStartsOn =
    localeWeekStartsOn == null ? 0 : (0, _index4.default)(localeWeekStartsOn)
  var weekStartsOn =
    options.weekStartsOn == null
      ? defaultWeekStartsOn
      : (0, _index4.default)(options.weekStartsOn)

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var interval = dirtyInterval || {}
  var startDate = (0, _index2.default)(interval.start, dirtyOptions)
  var endDate = (0, _index2.default)(interval.end, dirtyOptions)
  var endTime = endDate.getTime()

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval')
  }

  var dateInterval = (0, _index6.default)(interval)
  var weekends = []
  var index = 0
  while (index++ < dateInterval.length) {
    var date = dateInterval[index]
    if ((0, _index10.default)(date)) {
      weekends.push(new Date(date))
      if ((0, _index8.default)(date)) {
        index = index + 5
      }
    }
  }
  return weekends
}
module.exports = exports['default']
