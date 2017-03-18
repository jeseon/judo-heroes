const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app : [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      './src/client.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    publicPath: '/js',
    filename: 'bundle.min.js'
  },
  devServer: {
    hot: true,
    inline: true,
    publicPath: '/js',
    contentBase: path.join(__dirname, 'src', 'static'),
    historyApiFallback: true,
    proxy: {
      '**': 'http://localhost:8000'
    }
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
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};