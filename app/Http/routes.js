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

//API routes
Route.post('/api/v1/auth', 'AuthController.login')
Route.get('/api/v1/auth/logout', 'AuthController.logout')

//Guest routes
Route.get('/', function * (request, response) {
  yield response.sendView('login')
})

Route.get('/signup', function * (request, response) {
  yield response.sendView('signup')
})

Route.get('/forgotpassword', function * (request, response) {
  yield response.sendView('forgotPassword')
})

Route.get('/newpassword', function * (request, response) {
  yield response.sendView('newPassword')
})

Route.get('/newuser', function * (request, response) {
  yield response.sendView('newUser')
})


//Authenticated routes
Route.group('v1', function () {
  Route.post('/invite', 'UserController.invite')
  Route.resource('/users', 'UserController')
  Route.resource('/games', 'GameController')
  Route.resource('/shows', 'ShowController')
  Route.resource('/sounds', 'SoundController')
  Route.resource('/teams', 'TeamController')
  Route.resource('/show_games', 'ShowGameController')
  Route.resource('/show_users', 'ShowUserController')
}).prefix('/api/v1').middleware('auth')

Route.group('authenticated', function() {

  Route.get('/home', function * (request, response) {
    yield response.sendView('welcome')
  })

  Route.get('/newshow', function * (request, response) {
    yield response.sendView('newShow')
  })

  Route.get('/show/:id', function * (request, response) {
    yield response.sendView('currentShow', {showId: request.param('id')})
  })

  Route.get('/newshowgames/:id', function * (request, response) {
    yield response.sendView('newshow2', {showId: request.param('id')})
  })

  Route.get('/shows', function * (request, response) {
    yield response.sendView('showlist')
  })

    // Route.get('/shows/:id', function * (request, response) {
    //   yield response.sendView('shows', {showId: request.param('id')})
    // })

  Route.get('/newshowgames/:id', function * (request, response) {
    yield response.sendView('shows', {show_id: request.param('id')})
  })

  Route.get('/newgame', function * (request, response) {
    yield response.sendView('newGame')
  })

  Route.get('/games', function * (request, response) {
    yield response.sendView('gameList')
  })

  Route.get('/sounds', function * (request, response) {
    yield response.sendView('sounds')
  })

  Route.get('/directorplayeredit', function * (request, response) {
    yield response.sendView('directorPlayerEditView')
  })

  Route.get('/playeredit', function * (request, response) {
    yield response.sendView('playerEditView')
  })

  Route.get('/addnewplayer', function * (request, response) {
    yield response.sendView('addNewPlayer')
  })

  Route.get('/thankyougame', function * (request, response) {
    yield response.sendView('thankYouGame')
  })

  Route.get('/thankyoushow', function * (request, response) {
    yield response.sendView('thankYouShow')
  })
}).middleware('auth')
