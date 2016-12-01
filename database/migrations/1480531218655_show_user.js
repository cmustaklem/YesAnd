'use strict'

const Schema = use('Schema')

class ShowUserTableSchema extends Schema {

  up () {
    this.create('show_user', (table) => {
      table.increments()
      table.integer('show_id').unsigned()
      table.integer('user_id').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('show_user')
  }

}

module.exports = ShowUserTableSchema
