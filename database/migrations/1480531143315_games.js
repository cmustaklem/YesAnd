'use strict'

const Schema = use('Schema')

class GamesTableSchema extends Schema {

  up () {
    this.create('games', (table) => {
      table.increments()
      table.string('name')
      table.text('description')
      table.text('suggestion')
      table.integer('team_id').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('games')
  }

}

module.exports = GamesTableSchema
