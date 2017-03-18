const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'client.js'),
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    publicPath: '/js',
    filename: 'bundle.min.js'
  },
  devServer: {
    port: 8000,
    inline: true,
    contentBase: path.join(__dirname, 'src', 'static'),
    historyApiFallback: true
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['es2015', 'react']
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourceMap: false,
      beautify: false
    })
  ]
};