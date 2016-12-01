'use strict'

const ShowGame = use('App/Model/ShowGame')

class ShowGameController {

  * index(request, response) {
    const teams = yield Team.all()
    response.json(teams)
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    let showgame = new ShowGame()
    showgame.show_id = request.input('show_id')
    showgame.game_id = request.input('game_id')
    showgame.user_id = request.input('user_id')
    yield showgame.save()
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

module.exports = ShowGameController
