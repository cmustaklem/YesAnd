'use strict'

const Lucid = use('Lucid')

class ShowUser extends Lucid {
    shows () {
        return this.hasMany('App/Model/Show')
  }
    users () {
        return this.hasMany('App/Model/User')
  }
}

module.exports = ShowUser
