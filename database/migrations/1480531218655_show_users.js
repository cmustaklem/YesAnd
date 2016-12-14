'use strict'

const Schema = use('Schema')

class ShowUsersTableSchema extends Schema {

  up () {
    this.create('show_users', (table) => {
      table.increments()
      table.integer('show_id').unsigned()
      table.integer('user_id').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('show_users')
  }

}

module.exports = ShowUsersTableSchema
