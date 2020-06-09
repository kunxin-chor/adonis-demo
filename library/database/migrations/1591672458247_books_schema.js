'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BooksSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments()  // auto_incrementing PK
      table.timestamps()  // add in 'created_at' and 'updated_at' datetime field

      // our own fields for the book:
      table.string('title', 100).notNullable();
      table.string('isbn', 32).notNullable();
      table.string('author', 100).notNullable();

    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BooksSchema
