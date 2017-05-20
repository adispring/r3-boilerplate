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
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },

  devServer: {
    contentBase: './public',
    port: 3000,
    historyApiFallback: true,
    inline: true,
  },
};
