'use strict'

const Lucid = use('Lucid')

class ShowUser extends Lucid {
    show() {
        return this.belongsTo('App/Model/Show')
    }

    user() {
        return this.belongsTo('App/Model/User')
    }
}

module.exports = ShowUser
