'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _index = require('../../../_lib/buildFormatLongFn/index.js')

var _index2 = _interopRequireDefault(_index)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var dateFormats = {
  full: 'EEEE, d MMMM yyyy',
  long: 'd MMMM yyyy',
  medium: 'd MMM yyyy',
  short: 'd/M/yyyy'
}

var timeFormats = {
  full: 'HH.mm.ss',
  long: 'HH.mm.ss',
  medium: 'HH.mm',
  short: 'HH.mm'
}

var dateTimeFormats = {
  full: "{{date}} 'pukul' {{time}}",
  long: "{{date}} 'pukul' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
}

var formatLong = {
  date: (0, _index2.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),

  time: (0, _index2.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),

  dateTime: (0, _index2.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
}

exports.default = formatLong
module.exports = exports['default']
