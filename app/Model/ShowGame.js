'use strict'

const Lucid = use('Lucid')

class ShowGame extends Lucid {
    show() {
        return this.belongsTo('App/Model/Show')
    }

    game() {
        return this.belongsTo('App/Model/Game')
    }

    user() {
        return this.belongsTo('App/Model/User')
    }
}

module.exports = ShowGame
