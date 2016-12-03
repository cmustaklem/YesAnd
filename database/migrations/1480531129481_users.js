'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('first_name')
      table.string('last_name')
      table.string('email').unique()
      table.string('phone_number')
      table.string('password')
      table.boolean('director')
      table.integer('team_id').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UsersTableSchema
