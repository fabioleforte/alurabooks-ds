
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./alurabooks-ds.cjs.production.min.js')
} else {
  module.exports = require('./alurabooks-ds.cjs.development.js')
}
