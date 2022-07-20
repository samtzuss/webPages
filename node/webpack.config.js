// npm i webpack webpack-cli -D
// npx webpack --config webpack.config.js

const path = require('path');
// const webpack = require('webpack');

module.exports = {
  entry: ['./src/fastify.js'],
  output: {
    filename: 'fastify.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compressor: {
  //       warnings: false,
  //     },
  //   }),
  //   new webpack.optimize.OccurenceOrderPlugin()
  // ]
};
