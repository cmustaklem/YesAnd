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

// Route.get('/', 'ListController.show')

// Route.get('/login', 'AuthController.index')
// Route.post('/login', 'AuthController.login')
//
// Route.get('/signup', 'RegisterController.index')
// Route.post('signup', 'RegisterController.doRegister')

Route.group('v1', function () {
  Route.post('/auth', 'AuthController.login')
  Route.resource('/users', 'UserController')
  Route.resource('/games', 'GameController')
  Route.resource('/shows', 'ShowController')
  Route.resource('/sounds', 'SoundController')
  Route.resource('/teams', 'TeamController')
  Route.resource('/show_game', 'ShowGameController')
  Route.resource('/show_user', 'ShowUserController')
  Route.post('/invite', 'UserController.invite')
}).prefix('/api/v1')

Route.get('/', function * (request, response) {
  yield response.sendView('login')
})

Route.get('/home', function * (request, response) {
  yield response.sendView('layoutmaindirectorscreen')
})
Route.get('/directorview', function * (request, response) {
  yield response.sendView('layoutmaindirectorscreen')
})
Route.get('/newgame', function * (request, response) {
  yield response.sendView('newGame')
})
// Route.get('/signup', function * (request, response) {
//   yield response.sendView('signup')
// })
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
Route.get('/newshow2', function * (request, response) {
  yield response.sendView('newShow2')
})
Route.get('/sounds', function * (request, response) {
  yield response.sendView('sounds')
})
Route.get('/existingsounds', function * (request, response) {
  yield response.sendView('existingsounds')
})
Route.get('/showofshows', function * (request, response) {
  yield response.sendView('shows')
})
Route.get('/playeredit', function * (request, response) {
  yield response.sendView('editPlayer')
})
Route.get('/directorplayeredit', function * (request, response) {
  yield response.sendView('directorPlayerEditView')
})
Route.get('/playerInvite', function * (request, response) {
  yield response.sendView('playerinvite')
})
Route.get('/forgotpassword', function * (request, response) {
  yield response.sendView('forgotPassword')
})
Route.get('/newpassword', function * (request, response) {
  yield response.sendView('newPassword')
})
Route.get('/activeshow', function * (request, response) {
  yield response.sendView('activeShow')
})
Route.get('/playeredit', function * (request, response) {
  yield response.sendView('playerEditView')
})
Route.get('/directorhome', function * (request, response) {
  yield response.sendView('directorhome')
})
Route.get('/playerhome', function * (request, response) {
  yield response.sendView('playerhome')
})
Route.get('/addnewplayer', function * (request, response) {
  yield response.sendView('addNewPlayer')
})

Route.put('/sounds/:id', 'SoundController.updateSound')
Route.post('/users', 'UsersController.store')
