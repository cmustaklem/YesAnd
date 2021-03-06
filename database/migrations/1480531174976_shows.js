'use strict'

const Schema = use('Schema')

class ShowsTableSchema extends Schema {

  up () {
    this.create('shows', (table) => {
      table.increments()
      table.string('date')
      table.string('location')
      table.integer('team_id').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('shows')
  }

}

module.exports = ShowsTableSchema
