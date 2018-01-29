const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const common = require('./webpack.common')

const extractSass =
    new ExtractTextWebpackPlugin({ filename: '[name].[contenthash].css', ignoreOrder: true })

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: /src/,
        use: 'awesome-typescript-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: /src/,
        use: extractSass.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJSWebpackPlugin({ sourceMap: true }),
    new HtmlWebpackPlugin({
      template: 'src/template.html',
      fileName: 'dist/index.html',
      cache: true,
      hash: true,
      minify: {
        collapseWhitespace: true,
        useShortDoctype: true,
        removeComments: true,
        removeAttributeQuotes: true,
        quoteCharacter: '\'',

      },
      showErrors: true,
    }),
    extractSass,
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production')})
  ]
})