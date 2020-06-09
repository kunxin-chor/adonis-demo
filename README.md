# INTRODUCTION


## SETUP

In the terminal, type in:

```
npm i -g @adonisjs/cli
adonis new <project-name>
cd <project-name>
adonis serve --dev
```

## Routes

Set up routes in `start/routes.js`


### Call a function and return a string
```
Route.get('/sayHello', ()=>'Hello World');
```

## Views
In the terminal type in the command to create a new view:

```
adonis make:view hello-world
```

Views will be created in the `resources\views` folder.

Now to do revnder the view:
```
Route.get('/helloWorld', (context)=>{
  return context.view.render('hello-world');
});
```

### Render a view nested in folder
To render a view in a folder, we use `.` instead `\`:

```

Route.get('/quickbrown', (context)=>{
  // render a route inside `views\inner\` folder:
  return context.view.render('inner.quickbrown');
})
```

### Required parameter
```
Route.get('/greet/:name', (context)=>{
    return "Hello " + context.params.name);
})
```

## Form Processing
Create a view `add-two-form.edge` and render it with a route:

```
// render form
Route.get('/addtwo', (context)=>{
  return context.view.render('add-two-form');
})
```

## Models and Database
Reminder: when using the GitPod template, the database user is `gitpod` with no password.

### Install driver for MySQL
```
yarn add mysql
```

Log into `mysql` and run the following series of instructions:
```
mysql -u root
ALTER USER 'gitpod'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;
create database adonis;
```


Update .env to setup user and password for your MySQL installation. See the below (make the changes to `DB_CONNECTION`, and `DB_USER`)

```
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=DDyOHwsD97a0DytF7GceHPWnQXc0oI1Q
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=gitpod
DB_PASSWORD=password
DB_DATABASE=adonis
SESSION_DRIVER=cookie
HASH_DRIVER=bcrypt
```

### Run the migrations
At the terminal:

```adonis migration:run```

### Creating migrations

In the terminal , type in:
`adonis make:migration books`

The convention is always plural

Open the resultant file (it should end with `books_schema.js`)

Add the additional fields in the file, inside the `up` function:

```
  up () {
    this.create('books', (table) => {
      table.increments() // add auto-increment field
      table.timestamps() // add the created_at and updated_at field

      // new fields below:
      table.string("title", 100).notNullable();
      table.string('isbn', 100).notNullable();
      table.string('author', 100).notNullable();
    })
  }
```