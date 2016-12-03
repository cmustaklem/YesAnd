module.exports = {
  entry: {
    login: './public/js/login.js',
    gameAdd: './public/js/gameAdd.js',
    newGame: './public/js/newGame.js',
    newUser: '.public/js/newUser.js',
    newTeam: '.public/js/newTeam.js',
    newSound: '.public/js/newSound.js',
    playerInvite: '.public/js/playerInvite.js',
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
