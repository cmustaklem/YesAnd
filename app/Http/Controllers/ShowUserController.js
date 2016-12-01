'use strict'

const ShowUser = use('App/Model/ShowUser')

class ShowUserController {

  * index(request, response) {
    const showusers = yield ShowUser.all()
    response.json(showusers)
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    let showuser = new ShowUser()
    showuser.show_id = request.input('show_id')
    showuser.user_id = request.input('user_id')
    yield showuser.save()
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

module.exports = ShowUserController
