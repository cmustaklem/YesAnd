'use strict'

const Team = use('App/Model/Team')

class TeamController {

  * index(request, response) {
    const teams = yield Team.all()
    response.json(teams)
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    let team = new Team()
    team.name = request.input('name')
    team.city = request.input('city')
    team.state = request.input('state')
    team.phone = request.input('phone')
    team.website = request.input('website')
    team.logo = request.input('logo')
    yield team.save()
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

module.exports = TeamController
