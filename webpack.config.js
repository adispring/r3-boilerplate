const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',

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
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/app/index.tmpl.html`,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: './public',
    port: 3000,
    historyApiFallback: true,
    inline: true,
  },
};
