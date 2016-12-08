'use strict'

const Lucid = use('Lucid')

class Team extends Lucid {
    games () {
    return this.belongsTo('App/Model/Game')
}
    sounds () {
    return this.belongsTo('App/Model/Sound')
}
    users () {
    return this.belongsTo('App/Model/User')
}
    shows () {
    return this.belongsTo('App/Model/Show')
}
    users () {
    return this.hasMany('App/Model/User')
}
}

module.exports = Team
