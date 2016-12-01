'use strict'

const Schema = use('Schema')

class TeamsTableSchema extends Schema {

  up () {
    this.create('teams', (table) => {
      table.increments()
      table.string('name')
      table.string('city')
      table.string('state')
      table.string('phone')
      table.string('website')
      table.timestamps()
    })
  }

  down () {
    this.drop('teams')
  }

}

module.exports = TeamsTableSchema
