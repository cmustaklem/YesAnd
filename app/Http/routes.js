'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.get('/', function * (request, response) {
  yield response.sendView('login')
})

Route.get('/home', function * (request, response) {
  yield response.sendView('layoutmainscreen')
})
Route.get('/directorview', function * (request, response) {
  yield response.sendView('layoutmaindirectorscreen')
})
Route.get('/newgame', function * (request, response) {
  yield response.sendView('newGame')
})

// Route.on('/').render('welcome')
