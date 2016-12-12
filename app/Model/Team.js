'use strict'

const Lucid = use('Lucid')

class Team extends Lucid {
    games() {
        return this.hasMany('App/Model/Game')
    }

    users() {
        return this.hasMany('App/Model/User')
    }

    shows() {
        return this.hasMany('App/Model/Show')
    }
}

module.exports = Team
