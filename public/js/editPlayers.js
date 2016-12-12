fetch('/api/v1/users', {
    method: 'get',
    credentials: 'same-origin'
})
//
.then(response => response.json()) //response.json parses the data
// .then(response => listPlanets(response.results))
.then(function(items){
    items.forEach(function(item){
        // col.appendChild(card)
        var card = document.createElement('li')
        var col = document.createElement('li')
        col.innerHTML = item.first_name + ' ' + item.last_name
        col.appendChild(card)
        document.querySelector('#listOfPlayersEdit').appendChild(col)

        // var span = document.createElement('span')
        // span.innerHTML = response.name
        // card.appendChild(span)
        // var span = document.createElement('span')
        // span.innerHTML = response.description
        // card.appendChild(span)
        // var span = document.createElement('span')
        // span.innerHTML = response.suggestion
        // card.appendChild(span)

        // document.querySelector('#gameDescription').appendChild(col)

        // var card = document.createElement('div')
        // card.className = 'col-sm-6'
        // col.appendChild(card)
        // gams.className = ""
        // gams.htmlFor = 'checkbox-id';
        // gams.innerHTML = item.name
        // col.appendChild(gams)
        // document.querySelector('#gameDropDownMenu').appendChild(gams)
        // // console.log(item.description);
        // var click = document.getElementById('gameDropDown')
    })
})
