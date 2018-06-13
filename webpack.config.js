const path = require('path');

module.exports = {
  entry: {
    "index.html": './public/index.html',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './server.js',
  },
  loader: {
    test: /\.html/,
    loader: 'file?name=[name].[ext]',
  },
  mode: 'production',
  output: {
    filename: 'proxy.bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};
