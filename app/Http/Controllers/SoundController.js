'use strict'

const Sound = use('App/Model/Sound')

class SoundController {

  * index(request, response) {
    const sounds = yield Sound.all()
    response.json(sounds)
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    let sound = new Sound()
    sound.sound_file = request.input('sound_file')
    sound.game_id = request.input('game_id')
    yield sound.save()
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

module.exports = SoundController
