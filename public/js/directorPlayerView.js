document.getElementById('signUpTeamButton').addEventListener('click', function() {

    postNewUserInfo()
})

document.getElementById('directorViewOfPlayers')(function() {
    pullUserInfo()
})

function pullUserInfo() {
    fetch('api/v1/users', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
        
    })
}

function postNewUserInfo() {
    var userFirstName = document.getElementById('userFirstName')
    var userLastName = document.getElementById('userLastName')
    var userPhoneNumber = document.getElementById('userPhoneNumber')
    var userEmailAddress = document.getElementById('userEmailAddress')
    var userPassword = document.getElementById('userPassword')
    var directorCheckBox = document.getElementById('directorCheckBox')


    fetch('api/v1/teams', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userFirstName: userFirstName.value
            userLastName: userLastName.value
            userPhoneNumber: userPhoneNumber.value
            userEmailAddress: userEmailAddress.value
            userPassword: userPassword.value
            directorCheckBox: directorCheckBox.value
            // teamname: teamname.value,
            // city: city.value,
            // state: state.value
        })
    })
}
