'use strict'

const Schema = use('Schema')

class ShowGameTableSchema extends Schema {

  up () {
    this.create('show_game', (table) => {
      table.increments()
      table.string('display_order')
      table.integer('show_id').unsigned()
      table.integer('game_id').unsigned()
      table.integer('user_id').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('show_game')
  }

}

module.exports = ShowGameTableSchema
