var path = require('path');
var SRC_PATH = path.join(__dirname, '/client/src');
var DES_PATH = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_PATH}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DES_PATH
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        include: SRC_PATH,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};