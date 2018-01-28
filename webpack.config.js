const path = require('path')
const webpack = require('webpack')
const { CheckerPlugin } = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  // devtool: 'inline-source-map',
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
        use: [
          {
            loader: 'react-hot-loader/webpack'
          },
          {
            loader: 'awesome-typescript-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CheckerPlugin(),
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
}
