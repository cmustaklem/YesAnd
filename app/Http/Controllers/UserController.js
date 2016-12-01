'use strict'

const User = use('App/Model/User')

class UserController {

  * index(request, response) {
    const users = yield User.all()
    response.json(users)
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    let user = new User()
    user.first_name = request.input('first_name')
    user.last_name = request.input('last_name')
    user.email = request.input('email')
    user.password = request.input('password')
    user.director = request.input('director')
    user.team_id = request.input('team_id')
    user.picture = request.input('picture')
    yield user.save()
    response.json(true)
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = UserController
