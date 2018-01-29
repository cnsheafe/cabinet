const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common')

module.exports = merge(common, {
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: /src/,
        use: ['react-hot-loader/webpack', 'awesome-typescript-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: /src/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/template.html',
      fileName: 'dist/index.html',
      cache: true,
      hash: true,
      minify: false,
      showErrors: true,
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, 'dist'),
      manifest: require('./dist/vendor-manifest.json'),
    })
  ]
})
