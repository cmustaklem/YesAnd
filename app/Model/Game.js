'use strict'

const Lucid = use('Lucid')

class Game extends Lucid {
    sounds () {
        return this.belongsTo('App/Model/Sound')
    }
    teams () {
        return this.hasMany('App/Model/Team')
    }
}

module.exports = Game
