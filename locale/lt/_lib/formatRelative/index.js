'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = formatRelative
var formatRelativeLocale = {
  lastWeek: "'Praėjusį' eeee p",
  yesterday: "'Vakar' p",
  today: "'Šiandien' p",
  tomorrow: "'Rytoj' p",
  nextWeek: 'eeee p',
  other: 'P'
}

function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
module.exports = exports['default']
