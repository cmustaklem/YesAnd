fetch('api/v1/users', {
    credentials: 'same-origin'
})

// var checkbox = document.createElement('input');
// checkbox.type = 'checkbox';
// checkbox.name = item.first_name + ' ' + item.last_name;
// checkbox.value = item.first_name + ' ' + item.last_name;



.then(response => response.json()) //response.json parses the data
// .then(response => listPlanets(response.results))
.then(function(items){
    items.forEach(function(item){
        // col.appendChild(card)
        // var col = document.createElement('label')
        // var players = document.createElement('checkbox-inline')
        // players.innerHTML = item.first_name + ' ' + item.last_name
        // col.appendChild(players)
        var div = document.createElement('div')
        var label = document.createElement('label')
        div.classList = 'playerArrangement';
        label.htmlFor = 'checkbox-id';
        label.classList = 'bold';
        label.appendChild(document.createTextNode(item.first_name + ' ' + item.last_name));
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = item.first_name + ' ' + item.last_name;
        checkbox.value = item.first_name + ' ' + item.last_name;
        checkbox.classList = 'checkbox-inline text-center';
        div.appendChild(checkbox);
        div.appendChild(label);

        document.querySelector('#inlineCheckbox1').appendChild(div)
    })
})
