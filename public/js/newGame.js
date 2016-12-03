// import React from 'react'
// import ReactDOM from 'react-dom'
// import newGame from '../components/NewGame'
// //we are using ReactDOM because the values within this global js file will be consistently updated and placed onto the HTML file. It is rendering the Todos component. It is rendering within the #todoApp div.
//
// function renderView() {
//    ReactDOM.render(
//        <newGame />,
//        document.getElementById('newgame')
//    )
// }
//
// renderView()



document.getElementById('gameSubmit').addEventListener('click', function() {

    postGameInfo()
})


function postGameInfo() {
    var gameName = document.getElementById('gameName')
    var gameDescription = document.getElementById('gameDescription')
    var gameSuggestion = document.getElementById('gameSuggestion')
    console.log(gameName.value)

    fetch('api/v1/games', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: gameName.value,
            description: gameDescription.value,
            suggestion: gameSuggestion.value
        })
    })
}
