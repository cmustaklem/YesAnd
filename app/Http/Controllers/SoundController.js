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
    sound.team_id = request.input('team_id')
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

  * updateSound(request, response) {
    const sound_file = request.file('avatar', {
        maxSize: '2mb',
        allowedExtensions: ['jpg', 'png', 'jpeg']
    })

    const sound_id = request.param('id')
    const sound = yield Sound.findOrFail(sound_id)
    sound.sound_file = sound_file.

  //   yield avatar.move(Helpers.storagePath(), fileName)
  //   if (!avatar.moved()) {
  //     response.badRequest(avatar.errors())
  //     return
  //   }
  //   user.avatar = avatar.uploadPath()
  //   yield user.save()
  //   response.ok('Avatar updated successfully')
  }

}

module.exports = SoundController
