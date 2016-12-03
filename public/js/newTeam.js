document.getElementById('signUpTeamButton').addEventListener('click', function() {

    postNewUserInfo()
})


function postNewUserInfo() {
    var teamname = document.getElementById('teamName')
    var website = document.getElementById('teamWebsite')
    var city = document.getElementById('teamCity')
    var state = document.getElementById('teamState')
    var firstname = document.getElementById('firstName')
    var lastname = document.getElementById('lastName')
    var phonenumber = document.getElementById('phoneNumber')
    var emailaddress = document.getElementById('emailAddressLogin')
    var password = document.getElementById('passwordLogin')
    // console.log(firstname)

    fetch('api/v1/teams', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: teamname.value,
            website: website.value,
            city: city.value,
            state: state.value
        })
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(response) {
        fetch('api/v1/users', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: firstname.value,
                last_name: lastname.value,
                phone_number: phonenumber.value,
                email: emailaddress.value,
                password: password.value,
                team_id: response.id
            })
        })
    })
}
