module.exports = {
  entry: {
    login: './public/js/login.js',
  },
  output: {
    path: './public/js/',
    publicPath: '/public/js/',
    filename: '[name].bundle.js',
  },
  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['latest', 'react']
        }
      }
    ]
  }
}
