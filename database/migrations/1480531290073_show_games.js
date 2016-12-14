'use strict'

const Schema = use('Schema')

class ShowGamesTableSchema extends Schema {

  up () {
    this.create('show_games', (table) => {
      table.increments()
      table.string('display_order')
      table.integer('show_id').unsigned()
      table.integer('game_id').unsigned()
      table.integer('user_id').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('show_games')
  }

}

module.exports = ShowGamesTableSchema
