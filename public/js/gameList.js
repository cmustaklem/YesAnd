fetch('api/v1/games', {
    credentials: 'same-origin'
})

.then(response => response.json()) //response.json parses the data
// .then(response => listPlanets(response.results))
.then(function(items){
    items.forEach(function(item){
        // col.appendChild(card)
        var col = document.createElement('div')
        var gams = document.createElement('option')
        gams.innerHTML = item.name
        col.appendChild(gams)

        document.querySelector('#gameDropDownMenu').appendChild(gams)
    })
})

    // function myFunction() {
    //     var x = document.getElementById('#gameDropDownMenu').value;
    //     document.getElementById('#gamenamedescription').innerHTML = ;
    // }




// fetch('/api/v1/games')
//
// .then(response => response.json())
// .then(function(items){
//     console.log(items)
//         var gameOption = document.createElement('option')
//         gameOption.innerHTML = items.name
//         gams.appendChild(gameOption)
//         document.querySelector('#gameDropDownMenu').appendChild(gams)
//     })
//
//     fetch()
//
//     .then(response => response.json()) //response.json parses the data
//     // .then(response => listPlanets(response.results))
//     .then(function(items){
//         console.log(items)
//         items.results.forEach(function(item){
//             var col = document.createElement('div')
//             col.className = 'col-sm-4'
//
//             var dropDown = document.createElement('select')
//             dropDown.className = 'form-control'
//
//
//
//             document.querySelector('#searchResults').appendChild(col)
//         })
//     })
//
//
//
//
//












// var a = '/api/v1/games';
//
// a.forEach(function(element) {
//     console.log(element);
// });
