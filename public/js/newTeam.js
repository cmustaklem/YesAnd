document.getElementById('signUpTeamButton').addEventListener('click', function() {

    postNewUserInfo()
})


function postNewUserInfo() {
    var teamname = document.getElementById('teamName').value
    var website = document.getElementById('teamWebsite').value
    var city = document.getElementById('teamCity').value
    var state = document.getElementById('teamState').value
    var firstname = document.getElementById('firstName').value
    var lastname = document.getElementById('lastName').value
    var phonenumber = document.getElementById('phoneNumber').value
    var emailaddress = document.getElementById('emailAddressLogin').value
    var password = document.getElementById('passwordLogin').value
    // console.log(firstname)

    if(teamname && website && city && state && firstname && lastname && phonenumber && emailaddress && password){
        fetch('/api/v1/teams', {
            method: 'post',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: teamname,
                website: website,
                city: city,
                state: state
            })
        })
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            fetch('/api/v1/users', {
                method: 'post',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name: firstname,
                    last_name: lastname,
                    phone_number: phonenumber,
                    email: emailaddress,
                    password: password,
                    team_id: response.id,
                    director: 'true'
                })
            })
            .then(function(response) {
                if (response.status >= 200 && response.status <= 400) {
                    return response.json()
                }
                else {
                    alert(response.body)
                }
            })
            .then(function(response) {
                window.location.href = '/home'
            })
        })
    }
}
