var path = require('path');

module.exports = {
  entry: './src/client/App.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist/public')
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
        //loaders: ["react-hot", 'babel-loader'],
        //query: {
        //    presets : ['es2015', 'react']
        //}
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};
