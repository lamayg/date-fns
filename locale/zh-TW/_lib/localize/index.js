'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _index = require('../../../_lib/buildLocalizeFn/index.js')

var _index2 = _interopRequireDefault(_index)

var _index3 = require('../../../_lib/buildLocalizeArrayFn/index.js')

var _index4 = _interopRequireDefault(_index3)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var weekdayValues = {
  narrow: ['日', '一', '二', '三', '四', '五', '六'],
  short: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  long: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
}

var monthValues = {
  short: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月'
  ],
  long: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月'
  ]
}

var timeOfDayValues = {
  uppercase: ['AM', 'PM'],
  lowercase: ['am', 'pm'],
  long: ['上午', '下午']
}

function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber)
  return String(number)
}

var localize = {
  ordinalNumber: ordinalNumber,
  weekday: (0, _index2.default)(weekdayValues, 'long'),
  weekdays: (0, _index4.default)(weekdayValues, 'long'),
  month: (0, _index2.default)(monthValues, 'long'),
  months: (0, _index4.default)(monthValues, 'long'),
  timeOfDay: (0, _index2.default)(timeOfDayValues, 'long', function(hours) {
    return hours / 12 >= 1 ? 1 : 0
  }),
  timesOfDay: (0, _index4.default)(timeOfDayValues, 'long')
}

exports.default = localize
module.exports = exports['default']
