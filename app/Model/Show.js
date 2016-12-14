'use strict'

const Lucid = use('Lucid')

class Show extends Lucid {
    games() {
        return this.belongsToMany('App/Model/Game', 'show_games')
    }

    users() {
        return this.belongsToMany('App/Model/User', 'show_users')
    }

    team() {
        return this.hasOne('App/Model/Team')
    }
}

module.exports = Show
