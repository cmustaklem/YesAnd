var daGame = ''

fetch('/api/v1/games', {
    credentials: 'same-origin'
})

.then(response => response.json()) //response.json parses the data
// .then(response => listPlanets(response.results))
.then(function(items){
    items.forEach(function(item){
        // col.appendChild(card)
        var col = document.createElement('div')
        var gams = document.createElement('option')
        gams.className = ""
        gams.htmlFor = 'checkbox-id';
        gams.innerHTML = item.name
        gams.value = item.id
        col.appendChild(gams)
        document.querySelector('#gameListing').appendChild(gams)
        // console.log(item.description);
        // var click = document.getElementById('gameDropDown')
    })
})



fetch('/api/v1/shows/' + showID, {
    credentials: 'same-origin'
})
.then(response => response.json())

.then(function(show){
    console.log(show)
    show.users.forEach(function(user){
        // col.appendChild(card)
        var div = document.createElement('div')
        var label = document.createElement('label')
        div.classList = 'playerArrangement2';
        label.htmlFor = 'checkbox-id';
        label.classList = 'bold';
        label.appendChild(document.createTextNode(user.first_name + ' ' + user.last_name));
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = user.id;
        checkbox.className = 'chk';
        div.appendChild(checkbox);
        div.appendChild(label);
        document.querySelector('#inlineCheckbox2').appendChild(div)
        // console.log(item.id)
    })

    show.games.forEach(function(game) {
        console.log(game)
        var cast = game.users.map(function(user) {
            return '<li>' + user.first_name + ' ' + user.last_name + '</li>'
        })

        document.getElementById('existingGameTable').innerHTML += `
        <div class="panel-body">
            <div class="row">
                <div class="col-xs-12">
                    <h2>${game.name}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <div class="col-xs-12">
                        <ul class="list-unstyled theGameCast">
                            ${cast}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `
    })
})

document.getElementById('addGameShow').addEventListener('click', function() {

    getValueUsingClass()
})

function getValueUsingClass(){
    /* declare an checkbox array */
    daGame = document.getElementById('gameListing').value;
    var castListIds = [];
    var castMembers = []

    /* look for all checkboes that have a class 'chk' attached to it and check if it was checked */
    $(".chk:checked").each(function() {
        castListIds.push($(this).val());
    });



    /* check if there is selected checkboxes, by default the length is 1 as it contains one single comma */
    castListIds.forEach(function(castListID) {
        fetch('/api/v1/show_games', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify({
                show_id: showID,
                game_id: daGame,
                user_id: castListID
            })
        })
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            castMembers.push(response)

            if (castListIds.length === castMembers.length) {
                window.location.reload()
            }
        })
    })
}

function myFunction() {
    window.location.href = '/thankyoushow'
}


// function postGameDetails() {
//
//
//
// });

// daGame = document.getElementById('gameListing').value;
// var castList = document.querySelectorAll('input[type=checkbox]')
// var castListChecked = document.querySelectorAll('input[type=checkbox]:checked')
// var castListIds = []
// console.log(castListChecked[0].value)
//
// if (castListChecked[0].checked === true) {
//     var castIDNumber = Number(castList.value)
//     castListIds.push(castList[0].value)
//     console.log(castListIds)
// }
//
// else {
//     console.log('HBO')
// }


// castListIds.forEach(function(castMember) {
//
//     else {
//         console.log('its not working yo!')
//     }
//  })
//  console.log(daGame)
// //  console.log(castListIds)
//  createGameListItem()
// }

// function createGameListItem() {
//     var form = document.createElement('form')
//     form.className = 'shadow'
//     var div = document.createElement('div')
//     div.className = 'panel-body'
//     form.appendChild(div)
//     var row = document.createElement('div')
//     row.className = 'row'
//     form.appendChild(row)
//     var title = document.createElement('div')
//     title.className = 'col-sm-3'
//     title.innerHTML = '<h2>' + daGame + '</h2>'
//     row.appendChild(title)
//     var castPlayers = document.createElement('div')
//     castPlayers.className = 'col-sm-9'
//     row.appendChild(castPlayers)
//     var ul = document.createElement('ul')
//     row.appendChild(ul)
//     var li = document.createElement('li')
//     // li.innerHTML = item.first_name + ' ' + item.last_name
//     row.appendChild(li)
// }
