const path = require('path')
const webpack = require('webpack')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-redux',
      'redux',
      'immutable'
    ]
  },
  output: {
    publicPath: 'dist/',
    path: path.join(__dirname, 'dist'),
    filename: '[name].dll.js',
    library: '[name]_[hash]'
  },
  plugins: [ 
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dist', '[name]-manifest.json'),
      name: '[name]_[hash]'
    })
  ]
}