'use strict'

const User = use('App/Model/User')
const Hash = use('Hash')

class AuthController {

    * login(request, response) {
        const email = request.input('email')
        const password = request.input('password')

        const loginMessage = {
            success: 'Logged-in Successfully!',
            error: 'Invalid Credentials'
        }

        // Attempt to login with email and password
        const authCheck = yield request.auth.attempt(email, password)
        if (authCheck) {
            // return response.redirect('/')
            response.json({user: yield request.auth.getUser()})
        }

        response.json([ loginMessage.error ])
    }

    * logout(request, response) {
        yield request.auth.logout()
        return response.redirect('/')
    }
}

module.exports = AuthController
