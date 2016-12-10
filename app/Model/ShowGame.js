'use strict'

const Lucid = use('Lucid')

class ShowGame extends Lucid {
    shows () {
        return this.hasMany('App/Model/Show')
    }
    games () {
        return this.hasMany('App/Model/Game')
    }
    users () {
        return this.hasMany('App/Model/User')
    }
}

module.exports = ShowGame
