'use strict'

const Lucid = use('Lucid')

class Game extends Lucid {
    sounds () {
        return this.belongsTo('App/Model/Sound')
    }
    show_game () {
        return this.belongsTo('App/Model/ShowGame')
    }
    teams () {
        return this.hasMany('App/Model/Team')
    }
}

module.exports = Game
