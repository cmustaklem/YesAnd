import React from 'react'
import AddNewPlayers from '../components/AddNewPlayers'
import ReactDOM from 'react-dom'
// import Todos from '../components/Todos'
//we are using ReactDOM because the values within this global js file will be consistently updated and placed onto the HTML file. It is rendering the Todos component. It is rendering within the #todoApp div.

function renderView() {
   ReactDOM.render(
       <AddNewPlayers />,
       document.getElementById('addNewProspects')
   )
}

renderView()


// var player = 1;
// var value
// function add_fields() {
//     player++;
//     var addToList = document.getElementById('addPlayers')
//     var addingplayerline = document.createElement("div");
//     addingplayerline.innerHTML = '<div class="form-group"> Add Player ' + player +':</div><div class="content addNewPlayerRow"><span><input type="email" class="addNewPlayerRow" name="newplayeremailaddress" placeholder="newplayer@funnymail.com" value="" /></span></div>';
//
//     addToList.appendChild(addingplayerline)
// }
