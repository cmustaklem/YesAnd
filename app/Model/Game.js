'use strict'

const Lucid = use('Lucid')

class Game extends Lucid {
    sounds() {
        return this.hasMany('App/Model/Sound')
    }

    teams() {
        return this.hasOne('App/Model/Team')
    }
}

module.exports = Game
