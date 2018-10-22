const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const webpack = require('webpack');
const _ = require('lodash');

module.exports = {
  entry: path.resolve('src', 'index.ts'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    publicPath: '/',
    filename: process.env.npm_package_name + '.js',
    library: _.camelCase(process.env.npm_package_name),
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules', 'src'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
};
