const path = require('path')
const config = require('./webpack.config.js')

config.devServer = {
  historyApiFallback: true,
  contentBase: path.join(__dirname, '../build'),
  host: '0.0.0.0',
  port: 3000
}

config.devtool = 'inline-source-map'

module.exports = config
