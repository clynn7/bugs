const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'htdocs/js'),
    publicPath: "/js/"
  },
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, "htdocs"),
    compress: true,
    port: 8888
  }
};
