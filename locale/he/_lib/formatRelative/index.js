'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = formatRelative
var formatRelativeLocale = {
  lastWeek: "eeee 'שעבר בשעה' p",
  yesterday: "'אתמול בשעה' p",
  today: "'היום בשעה' p",
  tomorrow: "'מחר בשעה' p",
  nextWeek: "eeee 'בשעה' p",
  other: 'P'
}

function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
module.exports = exports['default']
