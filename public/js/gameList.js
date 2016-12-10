fetch('/api/v1/games', {
    method: 'get',
    credentials: 'same-origin'
})
//
.then(response => response.json()) //response.json parses the data
// .then(response => listPlanets(response.results))
.then(function(items){
    items.forEach(function(item){
        // col.appendChild(card)
        var col = document.createElement('div')
        col.className = 'panel-heading'
        var col = document.createElement('div')
        col.className = 'row'

        var card = document.createElement('div')
        card.className = 'col-sm-6'
        col.appendChild(card)

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

function myFunction() {
    var x = document.getElementById("gameDropDownMenu").value;

    // document.getElementById("gameDescription").innerHTML = "You selected: " + x;
    console.log(x)
    fetch('/api/v1/games', {
        method: 'get',
        credentials: 'same-origin'
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(response) {
        if (response.name = x) {
            // console.log(response.name)
        var col = document.createElement('div')
        col.className = 'row'

        var card = document.createElement('div')
        card.className = 'col-sm-6'
        col.appendChild(card)

        var span = document.createElement('span')
        span.innerHTML = response.name
        card.appendChild(span)
        var span = document.createElement('span')
        span.innerHTML = response.description
        card.appendChild(span)
        var span = document.createElement('span')
        span.innerHTML = response.suggestion
        card.appendChild(span)

        document.querySelector('#gameDescription').appendChild(col)
}
})

}





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
