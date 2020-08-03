'use strict'
const Book = use('App/Models/Book')
const Plugins = use("PaulChor/Plugins")

class BookController {
    // a function inside a class is known as a 'method'
    async get(context) {
      let text = "quick brown fox";
       text = Plugins.run_filter("process_text", text)
       console.log("After filter, text=", text);
        Plugins.run_action('greet');
        let books = await Book.all()
        books = books.toJSON();
        return context.view.render('books.show_books',{
            books
        })
    }
    showCreateForm(context) {
        return context.view.render('books.create_form')
    }
    async create(context) {
        let formdata = context.request.post();
        let title = formdata.title;
        let author =formdata.author;
        let isbn = formdata.isbn;

        let newBook = new Book();
        newBook.title = title;
        newBook.author = author;
        newBook.isbn = isbn;
        await newBook.save();
        return "Book added";
    }
    async showEditForm(context) {
      let bookid = context.params.bookid;
      let book = await Book.find(bookid);
      return context.view.render('books.edit_form',{
        book
      })
    }
    async update(context) {
      let bookid = context.params.bookid;
      let book = await Book.find(bookid);
      // let {title, author, isbn} = context.request.post();
      // book.update({
      //   title, author, isbn
      // })

      let submittedData = context.request.post();
      book.merge({
        'title': submittedData.title,
        'author': submittedData.author,
        'isbn': submittedData.isbn
      })
      await book.save()
      return context.response.redirect('/books/');
    }
}

// default export
module.exports = BookController
