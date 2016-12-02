document.getElementById('signUpUserButton').addEventListener('click', function() {

    postNewUserInfo()
})


function postNewUserInfo() {
    var firstname = document.getElementById('userFirstName')
    var lastname = document.getElementById('userLastName')
    var phonenumber = document.getElementById('userPhoneNumber')
    var emailaddress = document.getElementById('userEmailAddress')
    var password = document.getElementById('userPassword')

    // var gameName = document.getElementById('gameName')
    // var gameDescription = document.getElementById('gameDescription')
    // var gameSuggestion = document.getElementById('gameSuggestion')
    console.log(firstname)

    fetch('api/v1/users', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: firstname.value,
            lastname: lastname.value,
            phonenumber: phonenumber.value,
            emailaddress: emailaddress.value,
            password: password.value
        })
    })
}
