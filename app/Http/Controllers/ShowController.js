'use strict'

const Show = use('App/Model/Show')

class ShowController {

  * index(request, response) {
      const shows = yield Show.all()
      response.json(shows)
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    var currentUser = yield request.auth.getUser()
    let show = new Show()
    show.date = request.input('date')
    show.location = request.input('location')
    show.team_id = currentUser.team_id
    yield show.save()
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

module.exports = ShowController
