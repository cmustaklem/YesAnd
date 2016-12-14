document.getElementById('gameSubmit').addEventListener('click', function() {

    postGameInfo()
})


function postGameInfo() {
    var gameName = document.getElementById('gameName')
    var gameDescription = document.getElementById('gameDescription')
    var gameSuggestion = document.getElementById('gameSuggestion')

    fetch('api/v1/games', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify({
            name: gameName.value,
            description: gameDescription.value,
            suggestion: gameSuggestion.value
        })
    })
}

function myFunction() {
    window.location.href = '/thankyougame'
}
