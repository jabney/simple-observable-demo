import 'core-js/es6'
import 'core-js/es7/reflect'
import './externals'
require('zone.js/dist/zone')

if (DEVELOPMENT) {
  Error.stackTraceLimit = Infinity
  require('zone.js/dist/long-stack-trace-zone')
}
