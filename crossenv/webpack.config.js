var webpack = require('webpack')

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: process.env.NODE_ENV ==='development' ? '"development"' : '"production"'
      }
    })
  ]
}