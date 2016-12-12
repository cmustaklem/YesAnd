'use strict'

const Team = use('App/Model/Team')

class TeamController {

  * index(request, response) {
    const teams = yield Team.all()
    response.json(teams)
  }

  * store(request, response) {
    let team = new Team()
    team.name = request.input('name')
    team.city = request.input('city')
    team.state = request.input('state')
    team.website = request.input('website')
    yield team.save()
    response.json(team)
  }

  * show(request, response) {
    const team = yield Team.find(request.param('id'))

    if (team) {
      response.json(team)
      return
    }

    response.json(null)
  }

  * update(request, response) {
    const team = yield Team.find(request.param('id'))

    if (team) {
      team.name = request.input('name')
      team.city = request.input('city')
      team.state = request.input('state')
      team.website = request.input('website')
      yield team.save()

      response.json(team)
      return
    }

    response.json(null)
  }

  * destroy(request, response) {
    const team = yield Team.find(request.param('id'))

    if (team) {
      yield team.delete()
      response.json(team)
      return
    }

    response.json(null)
  }

}

module.exports = TeamController
