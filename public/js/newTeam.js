document.getElementById('signUpTeamButton').addEventListener('click', function() {

    postNewUserInfo()
})


function postNewUserInfo() {
    var teamname = document.getElementById('teamName')
    var city = document.getElementById('teamCity')
    var state = document.getElementById('teamState')
    var firstname = document.getElementById('userFirstName')
    var lastname = document.getElementById('userLastName')
    var phonenumber = document.getElementById('userPhoneNumber')
    var emailaddress = document.getElementById('userEmailAddress')
    var password = document.getElementById('userPassword')
    console.log(firstname)

    fetch('api/v1/teams', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            teamname: teamname.value,
            city: city.value,
            state: state.value
        })
    }),
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
