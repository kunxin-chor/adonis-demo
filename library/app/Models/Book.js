'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

// Every model is associated with a table in the databaase
// The table is associated with will be the lowercase plural version of the name of the model
// The model's name for this case is "Book"
// so the database table it is automatically associated with is "books"
class Book extends Model {
}

module.exports = Book
