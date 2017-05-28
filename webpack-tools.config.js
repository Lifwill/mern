var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './tools/populateDatabase.js',
  output: {
    filename: 'populateDatabase.js',
    path: path.resolve(__dirname, 'tools/dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ]
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
};
