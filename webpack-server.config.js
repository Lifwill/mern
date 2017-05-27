var path = require('path');

module.exports = {
  entry: './src/server/server.js',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: {
    express: 'express',
  },
};
