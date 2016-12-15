'use strict'

const Show = use('App/Model/Show')
const User = use('App/Model/User')

class ShowController {

  * index(request, response) {
      const shows = yield Show.all()
      response.json(shows)
  }

  * store(request, response) {
    var currentUser = yield request.auth.getUser()
    let show = new Show()
    show.date = request.input('date')
    show.location = request.input('location')
    show.team_id = currentUser.team_id
    yield show.save()
    response.json(show)
  }

  * show(request, response) {
    let show = yield Show
      .query()
      .with('users','games')
      .where('id', request.param('id'))
      .fetch()

    if (show.value().length) {
      show = show.value().pop().toJSON()
      let existinGameIds = []
      show.games = show.games.filter(game => {
          if (!existinGameIds.includes(game.id)) {
            existinGameIds.push(game.id)
            return true
          }

          return false
      })
      const gameIds = show.games.map(game => game.id)
      const gamePlayers = yield User
        .query()
        .select('first_name', 'last_name', 'game_id', 'users.id')
        .join('show_games', 'show_games.user_id', 'users.id')
        .whereIn('show_games.game_id', gameIds)

      show.games = show.games.map(game => {
        game.users = []

        gamePlayers.forEach(player => {
          if (player.game_id === game.id) {
            game.users.push(player)
          }
        })

        return game
      })

      response.json(show)
      return
    }

    response.json(null)
  }

  * update(request, response) {
    const show = yield Show.find(request.param('id'))

    if (show) {
      show.date = request.input('date')
      show.location = request.input('location')
      yield show.save()

      response.json(show)
      return
    }

    response.json(null)
  }

  * destroy(request, response) {
    const show = yield Show.find(request.param('id'))

    if (show) {
      yield show.delete()
      response.json(show)
      return
    }

    response.json(null)
  }

}

module.exports = ShowController
