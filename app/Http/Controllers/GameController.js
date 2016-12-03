'use strict'

const Helpers = use('Helpers')
const Game = use('App/Model/Game')

class GameController {

  * index(request, response) {
    const games = yield Game.all()
    response.json(games)
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    let game = new Game()
    game.name = request.input('name')
    game.description = request.input('description')
    game.suggestion = request.input('suggestion')
    game.team_id = request.input('team_id')
    yield game.save()
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

module.exports = GameController
