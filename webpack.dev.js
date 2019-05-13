const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/index.ts'],
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: process.env.npm_package_name + '.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules', 'src'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
    overlay: {
      errors: true,
    },
    open: true,
    inline: true,
    host: 'localhost',
    publicPath: `/`,
    stats: 'errors-only',
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.ejs'),
      title: process.env.npm_package_name,
    }),
    new ErrorOverlayPlugin(),
  ],
};
