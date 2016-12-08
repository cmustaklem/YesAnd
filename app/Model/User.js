'use strict'

const Lucid = use('Lucid')

class User extends Lucid {
    apiTokens () {
    return this.hasMany('App/Model/Token')
  }
    teams () {
    return this.belongsTo('App/Model/Team')
  }
    show_user () {
    return this.belongsTo('App/Model/ShowUser')
  }
    show_game () {
    return this.belongsTo('App/Model/ShowGame')
  }
    teams () {
    return this.hasMany('App/Model/Team')
}
}

module.exports = User
