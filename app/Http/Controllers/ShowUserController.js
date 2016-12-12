'use strict'

const ShowUser = use('App/Model/ShowUser')

class ShowUserController {

  * index(request, response) {
    const showusers = yield ShowUser.all()
    response.json(showusers)
  }

  * store(request, response) {
    let showuser = new ShowUser()
    showuser.show_id = request.input('show_id')
    showuser.user_id = request.input('user_id')
    yield showuser.save()
    response.json(showuser)
  }

  * show(request, response) {
    const showUser = yield ShowUser.find(request.param('id'))

    if (showUser) {
      response.json(showUser)
      return
    }

    response.json(null)
  }

  * destroy(request, response) {
    const showUser = yield ShowUser.find(request.param('id'))

    if (showUser) {
      yield showUser.delete()
      response.json(showUser)
      return
    }

    response.json(null)
  }

}

module.exports = ShowUserController
