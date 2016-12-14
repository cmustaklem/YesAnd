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
        col.appendChild(gams)
        document.querySelector('#gameListing').appendChild(gams)
        // console.log(item.description);
        // var click = document.getElementById('gameDropDown')
    })
})

var showID = window.location.href.split('/')[4]

fetch('/api/v1/show_user', {
    credentials: 'same-origin'
})
.then(response => response.json())
.then(function(items){
    items.forEach(function(item){
        // col.appendChild(card)
        var div = document.createElement('div')
        var label = document.createElement('label')
        div.classList = 'playerArrangement';
        label.htmlFor = 'checkbox-id';
        label.classList = 'bold';
        label.appendChild(document.createTextNode(item.user_id));
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = item.id;
        div.appendChild(checkbox);
        div.appendChild(label);
        document.querySelector('#inlineCheckbox2').appendChild(div)
        console.log(item.id)
    })
})

document.getElementById('addGameShow').addEventListener('click', function() {

    postGameDetails()
})
// document.getElementById('addGameShow').addEventListener('click', function() {
//
//     createGameListItem()
// })

function createGameListItem() {
    var form = document.createElement('form')
    form.className = 'shadow'
    var div = document.createElement('div')
    div.className = 'panel-body'
    form.appendChild(div)
    var row = document.createElement('div')
    row.className = 'row'
    form.appendChild(row)
    var title = document.createElement('div')
    title.className = 'col-sm-3'
    title.innerHTML = '<h2>' + daGame + '</h2>'
    row.appendChild(title)
    var castPlayers = document.createElement('div')
    castPlayers.className = 'col-sm-9'
    row.appendChild(castPlayers)
    var ul = document.createElement('ul')
    row.appendChild(ul)
    var li = document.createElement('li')
    // li.innerHTML = item.first_name + ' ' + item.last_name
    row.appendChild(li)
}

function postGameDetails() {
    daGame = document.getElementById('gameListing').value;
    var castList = document.querySelectorAll('input[type=checkbox]')
    var castListIds = []

    castList.forEach(function(castMember) {
        if (castMember.checked === true) {
            var castIDNumber = Number(castMember.value)
            castListIds.push(castIDNumber)
        }
        // else {
        //     console.log('its not working yo!')
        // }
     })
     createGameListItem()
}