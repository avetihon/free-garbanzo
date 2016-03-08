const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  postcss: () => {
    return [autoprefixer];
  },
  watch: true,
  devServer: {
    port: 3000,
  },
};
