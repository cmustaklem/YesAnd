'use strict'

const Helpers = use('Helpers')
const Sound = use('App/Model/Sound')
const temp = require('temp')
const fs = require('fs')
const AWS = require('aws-sdk')

// const Buffer = require('buffer')

class SoundController {

  * index(request, response) {
    const sounds = yield Sound.all()
    response.json(sounds)
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    const fileName = request.file('sound_file').clientName()

    const s3 = new AWS.S3({
      region: 'us-east-2',
      endpoint: 's3-us-east-2.amazonaws.com',
      signatureVersion: 'v4',
      params: {
        Bucket: 'yesandsound'
      }
    })

    let sound = new Sound()
    sound.sound_file = `https://yesandsound.s3.amazonaws.com/${fileName}`
    sound.game_id = request.input('game_id')
    yield sound.save()

    fs.readFile(request.file('sound_file').tmpPath(), (error, data) => {

      s3.upload({
        Key: fileName,
        Body: data
      }, (error, data) => {
        if (error) {
          return response.json(error)
        }
        else {
          response.json(`https://yesandsound.s3.amazonaws.com/${fileName}`)
        }
      })

    })
  }

  * show(request, response) {
    let sound = yield Sound.findBy('id', request.param('id'))

    temp.track()
    var tempFile = Helpers.storagePath('SlapTest.mp3')

    temp.open('x', function(error, info) {
      if (!error) {
        fs.write(info.fd, sound.sound_file)
        fs.close(info.fd, function(error) {
          response
            .header('Content-Type', 'audio/mpeg')
            .header('Content-Length', Buffer.byteLength(sound.sound_file))
            .download(info.path)
        })
      }
    })
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
    const sound_file = request.file('sound_file', {
        maxSize: '4mb',
        allowedExtensions: ['wav', 'mp3', 'wv', 'jpeg', 'ogg', 'jpeg', 'awb', 'jpeg', 'm4p', 'm4b', 'mmf', 'oba', 'oga', 'png']
    })

    const sound_id = request.param('id')
    const sound = yield Sound.findOrFail(sound_id)
    sound.sound_file = sound_file

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
