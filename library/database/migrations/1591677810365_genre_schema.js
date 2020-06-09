'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GenreSchema extends Schema {
  up () {
    this.create('genres', (table) => {
      table.increments()
      table.timestamps()

      table.string('display_name', 100).notNullable();
      table.string('identifier', 100).notNullable();
    })
  }

  down () {
    this.drop('genres')
  }
}

module.exports = GenreSchema
