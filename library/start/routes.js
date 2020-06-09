'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// is only meant for a static route (no programming logic)
Route.on('/').render('welcome')

// GET sayHello --> "hello world"
Route.get('/sayHello', (context)=>{
  return "hello world";
})

// GET greetings --> render a template named 'greet.edge'
Route.get('/greet/:name', (context)=>{
  let name = context.params.name;
  return context.view.render('greet', {
     name
  });
})

Route.get('/home', (context)=>{
  return context.view.render('home.index');
})

// Form: display the form
Route.get('/search', (context)=>{
  return context.view.render('books.search')
})

Route.post('/search', (context)=>{
  let submittedData = context.request.post();
  return context.view.render('books.results',{
    'search':submittedData.title
  })
})

// BookController
Route.get('/books', 'BookController.get');
Route.get('/books/create', 'BookController.showCreateForm')
Route.post('/books/create', 'BookController.create')
Route.get('/books/edit/:bookid', 'BookController.showEditForm').as('book.edit')
Route.post('/books/edit/:bookid', 'BookController.update')
