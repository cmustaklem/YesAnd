'use strict'

const Lucid = use('Lucid')

class Sound extends Lucid {
    game() {
        return this.belongsTo('App/Model/Game')
    }

    team() {
        return this.belongsTo('App/Model/Team')
    }
}

module.exports = Sound
