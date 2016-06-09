const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/js/main.js',
  output: {
    publicPath: './dist/',
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader: 'url-loader?limit=100000',
      },
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
  resolve: {
    modulesDirectories: ['node_modules'],
  },
  postcss: () => [autoprefixer],
  watch: true,
  devServer: {
    port: 3000,
  },
};
