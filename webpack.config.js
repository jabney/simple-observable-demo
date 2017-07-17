
if (process.env.NODE_ENV === 'production') {
  console.log('Building for production...')
  module.exports = require('./config/webpack.prod.js')
} else {
  console.log('Building for development...')
  module.exports = require('./config/webpack.dev.js')
}
