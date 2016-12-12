'use strict'

const Lucid = use('Lucid')

class User extends Lucid {
  static get hidden () {
    return ['password']
  }

  token() {
    return this.hasOne('App/Model/Token')
  }

  team() {
    return this.belongsTo('App/Model/Team')
  }

  shows() {
    return this.hasManyThrough('App/Model/Show', 'App/Model/ShowUser')
  }

  games() {
    return this.hasManyThrough('App/Model/Game', 'App/Model/ShowGame')
  }
}

module.exports = User
