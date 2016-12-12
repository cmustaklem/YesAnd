'use strict'

const Helpers = use('Helpers')
const Game = use('App/Model/Game')

class GameController {

  * index(request, response) {
    const games = yield Game.all()
    response.json(games)
  }

  * store(request, response) {
    var currentUser = yield request.auth.getUser()

    let game = new Game()
    game.name = request.input('name')
    game.description = request.input('description')
    game.suggestion = request.input('suggestion')
    game.team_id = currentUser.team_id
    yield game.save()

    response.json(game)
  }

  * show(request, response) {
    const game = yield Game.find(request.param('id'))

    if (game) {
      response.json(game)
      return
    }

    response.json(null)
  }

  * update(request, response) {
    const game = yield Game.find(request.param('id'))

    if (game) {
      game.name = request.input('name')
      game.description = request.input('description')
      game.suggestion = request.input('suggestion')
      yield game.save()

      response.json(game)
      return
    }

    response.json(null)
  }

  * destroy(request, response) {
    const game = yield Game.find(request.param('id'))

    if (game) {
      yield game.delete()
      response.json(game)
      return
    }

    response.json(null)
  }

}

module.exports = GameController
