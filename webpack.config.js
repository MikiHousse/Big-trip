const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'source-map',
  devServer: {
    client: {
      directory: path.resolve(__dirname, 'public'),
    },
    watchContentBase: true,
  },
};