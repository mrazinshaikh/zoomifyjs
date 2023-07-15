const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/zoomify.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'zoomify.min.js',
    library: 'Zoomify',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['babel-plugin-add-module-exports'],
        },
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: false,
    }),
  ],
};