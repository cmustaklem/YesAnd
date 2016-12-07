'use strict'

const Mail = use('Mail')
const User = use('App/Model/User')
const Hash = use('Hash')
const Encryption = use('Encryption')



class UserController {

  * index(request, response) {
    const users = yield User.all()
    response.json(users)
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    var team_id
    
    if (isNaN(request.input('team_id'))) {
      team_id = Encryption.decrypt(decodeURIComponent(request.input('team_id')))
    } else {
      team_id = request.input('team_id')
    }

    let user = new User()
    user.first_name = request.input('first_name')
    user.last_name = request.input('last_name')
    user.email = request.input('email')
    user.password = yield Hash.make(request.input('password'))
    user.phone_number = request.input('phone_number')
    user.team_id = team_id
    user.director = (request.input('director') === 'true')
    // user.picture = request.input('picture')
    yield user.save()
    response.json(user)
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

  * invite(request, response) {
    const currentUser = yield request.auth.getUser()
    const team_id = encodeURIComponent(Encryption.encrypt(String(currentUser.team_id)))
    // console.log(Encryption.encrypt(String(currentUser.team_id)))
    yield Mail.send('emails.welcome', {team_id: team_id}, (message) => {
        message.to(request.input('email'))
        message.from('charles.mustaklem@gmail.com')
        message.subject('Your Improv Team is inviting you!')
    })

    response.json(true)
  }
}

module.exports = UserController
