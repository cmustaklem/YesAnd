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
          response.json(sound)
        }
      })

    })
  }

  * show(request, response) {
    const sound = yield Sound.find(request.param('id'))

    if (sound) {
      response.json(sound)
      return
    }

    response.json(null)
  }

  * destroy(request, response) {
    const sound = yield Sound.find(request.param('id'))

    if (sound) {
      yield sound.delete()
      response.json(sound)
      return
    }

    response.json(null)
  }

}

module.exports = SoundController
