'use strict'

const ShowGame = use('App/Model/ShowGame')

class ShowGameController {

  * index(request, response) {
    const teams = yield Team.all()
    response.json(teams)
  }

  * store(request, response) {
    let showgame = new ShowGame()
    showgame.show_id = request.input('show_id')
    showgame.game_id = request.input('game_id')
    showgame.user_id = request.input('user_id')
    yield showgame.save()
    response.json(showgame)
  }

  * show(request, response) {
    const showGame = yield ShowGame.find(request.param('id'))

    if (showGame) {
      response.json(showGame)
      return
    }

    response.json(null)
  }

  * destroy(request, response) {
    const showGame = yield ShowGame.find(request.param('id'))

    if (showGame) {
      yield showGame.delete()
      response.json(showGame)
      return
    }

    response.json(null)
  }

}

module.exports = ShowGameController
