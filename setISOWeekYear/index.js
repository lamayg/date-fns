'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = setISOWeekYear

var _index = require('../_lib/toInteger/index.js')

var _index2 = _interopRequireDefault(_index)

var _index3 = require('../toDate/index.js')

var _index4 = _interopRequireDefault(_index3)

var _index5 = require('../startOfISOWeekYear/index.js')

var _index6 = _interopRequireDefault(_index5)

var _index7 = require('../differenceInCalendarDays/index.js')

var _index8 = _interopRequireDefault(_index7)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * @name setISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `setISOYear` to `setISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `setWeekYear`.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoWeekYear - the ISO week-numbering year of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the ISO week-numbering year set
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * var result = setISOWeekYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */
function setISOWeekYear(dirtyDate, dirtyISOWeekYear, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present'
    )
  }

  var date = (0, _index4.default)(dirtyDate, dirtyOptions)
  var isoWeekYear = (0, _index2.default)(dirtyISOWeekYear)
  var diff = (0, _index8.default)(
    date,
    (0, _index6.default)(date, dirtyOptions),
    dirtyOptions
  )
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(isoWeekYear, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  date = (0, _index6.default)(fourthOfJanuary, dirtyOptions)
  date.setDate(date.getDate() + diff)
  return date
}
module.exports = exports['default']
