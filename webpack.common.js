const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
  context: __dirname,
  entry: './src/index.tsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      util: path.resolve(__dirname, 'src/util/'),
      lib: path.resolve(__dirname, 'src/lib/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: 'file-loader'
      }
    ]
  },
  plugins: [new CheckerPlugin()]
}