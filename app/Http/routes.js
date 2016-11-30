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
Route.get('/signup', function * (request, response) {
  yield response.sendView('signup')
})
Route.get('/newuser', function * (request, response) {
  yield response.sendView('newUser')
})
Route.get('/showlist', function * (request, response) {
  yield response.sendView('showlist')
})
Route.get('/gamelist', function * (request, response) {
  yield response.sendView('gameList')
})
Route.get('/newshow', function * (request, response) {
  yield response.sendView('newShow')
})

// Route.on('/').render('welcome')
