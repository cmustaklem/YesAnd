'use strict'

const Lucid = use('Lucid')

class Show extends Lucid {
        games () {
        return this.belongsTo('App/Model/Game')
    }
        show_user () {
        return this.belongsTo('App/Model/ShowUser')
    }
        teams () {
        return this.hasMany('App/Model/Team')
  }
}

module.exports = Show
