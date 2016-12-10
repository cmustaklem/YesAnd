'use strict'

const Lucid = use('Lucid')

class Sound extends Lucid {
    games () {
        return this.hasMany('App/Model/Game')
    }
    teams () {
        return this.hasMany('App/Model/Team')
    }
}

module.exports = Sound
