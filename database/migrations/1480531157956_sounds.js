'use strict'

const Schema = use('Schema')

class SoundsTableSchema extends Schema {

  up () {
    this.create('sounds', (table) => {
      table.increments()
      table.binary('sound_file')
      table.integer('game_id').unsigned()
      table.integer('team_id').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('sounds')
  }

}

module.exports = SoundsTableSchema
