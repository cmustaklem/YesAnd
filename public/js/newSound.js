document.getElementById('signUpTeamButton').addEventListener('click', function() {

    postNewUserInfo()
})


function postNewUserInfo() {
    var soundfile = document.getElementById('teamName')


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
    })
}