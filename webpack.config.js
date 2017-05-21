const webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',

  entry: `${__dirname}/app/main.js`,
  output: {
    path: `${__dirname}/public`,
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
    new webpack.BannerPlugin('Copyright Flying Unicorns inc.'),
  ],

  devServer: {
    contentBase: './public',
    port: 3000,
    historyApiFallback: true,
    inline: true,
  },
};
