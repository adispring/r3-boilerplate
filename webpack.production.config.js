const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: `${__dirname}/app/main.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },

  module: {
    // loaders: [ // no longer using module.loaders, use rules instead
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          env: {
            development: {
              plugins: [['react-transform', {
                transforms: [{
                  transform: 'react-transform-hmr',
                  // if you use React Native, pass 'react-native' instead:
                  imports: ['react'],
                  // this is important for Webpack HMR:
                  locals: ['module'],
                }],
               // note: you can put more transforms into array
               // this is just one of them!
              }]],
            },
          },
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/app/index.tmpl.html`,
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          autoprefixer,
        ],
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('style.css'),
  ],
};
