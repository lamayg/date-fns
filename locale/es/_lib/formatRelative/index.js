'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = formatRelative
var formatRelativeLocale = {
  lastWeek: "'el' eeee 'pasado a la' LT",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'mañana a la' p",
  nextWeek: "eeee 'a la' p",
  other: 'P'
}

var formatRelativeLocalePlural = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'mañana a las' p",
  nextWeek: "eeee 'a las' p",
  other: 'P'
}

function formatRelative(token, date, baseDate, options) {
  if (date.getUTCHours() !== 1) {
    return formatRelativeLocalePlural[token]
  }
  return formatRelativeLocale[token]
}
module.exports = exports['default']
