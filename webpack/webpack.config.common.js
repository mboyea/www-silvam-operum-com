const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry of project is at path 'ROOT/src/index.tsx'
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  output: {
    // output of project is at path 'ROOT/bin/'
    path: path.resolve(__dirname, '..', './bin/'),
    filename: 'bundle.js',
  },
  plugins: [
    // template for project is at path 'ROOT/src/index.html'
    new HtmlWebpackPlugin({template: path.resolve(__dirname, '..', './src/index.html')}),
    new webpack.DefinePlugin({
      // ? add env variables
      // ? 'process.env.VAR_NAME': JSON.stringifyify('VAR_VALUE'),
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
}