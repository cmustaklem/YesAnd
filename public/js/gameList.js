import React from 'react'
import ListOfGames from '/components/ListOfGames'
import ReactDOM from 'react-dom'



function renderView() {
   ReactDOM.render(
       <ListOfGames />,
       document.getElementById('gameDropDown')
   )
}
renderView()





// fetch('/api/v1/games', {
//     method: 'get',
//     credentials: 'same-origin'
// })
//
// .then(response => response.json()) //response.json parses the data
// // .then(response => listPlanets(response.results))
// .then(function(items){
//     console.log(items)
//     items.results.forEach(function(item){
//         var col = document.createElement('div')
//         col.className = 'panel-group'
//         col.setAttribute("aria-multiselectable", "true;");
//
//         var card = document.createElement('div')
//         card.className = 'card'
//         col.appendChild(card)
//
//         var img = document.createElement('img')
//         img.setAttribute('src', item.Images[0].url_fullxfull)
//         img.className = 'previewImage'
//         card.appendChild(img)
//
//         var span = document.createElement('span')
//         span.innerHTML = item.title
//         card.appendChild(span)
//
//         var row = document.createElement('div')
//         row.className = 'row'
//         card.appendChild(row)
//
//         var colLeft = document.createElement('div')
//         // colLeft.setAttribute(item.Shop.shop_name)
//         colLeft.className = 'col-xs-6 text-muted itemSeller'
//         colLeft.innerHTML = item.Shop.shop_name
//         row.appendChild(colLeft)
//
//         var colRight = document.createElement('div')
//         colRight.className = 'col-xs-6 text-right text-success'
//         colRight.innerHTML = '$' + item.price
//         row.appendChild(colRight)
//
//         document.querySelector('#gameDropDown').appendChild(col)
//     })
// })






//
// .then(response => response.json()) //response.json parses the data
// // .then(response => listPlanets(response.results))
// .then(function(items){
//     items.forEach(function(item){
//         // col.appendChild(card)
//         var col = document.createElement('div')
//         col.className = 'panel-heading'
//         var col = document.createElement('div')
//         col.className = 'row'
//
//         var card = document.createElement('div')
//         card.className = 'col-sm-6'
//         col.appendChild(card)

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
//     })
// })

// function myFunction() {
//     var x = document.getElementById("gameDropDownMenu").value;
//
//     // document.getElementById("gameDescription").innerHTML = "You selected: " + x;
//     console.log(x)
//     fetch('/api/v1/games', {
//         method: 'get',
//         credentials: 'same-origin'
//     })
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(response) {
//         if (response.name = x) {
//             // console.log(response.name)
//         var col = document.createElement('div')
//         col.className = 'row'
//
//         var card = document.createElement('div')
//         card.className = 'col-sm-6'
//         col.appendChild(card)
//
//         var span = document.createElement('span')
//         span.innerHTML = response.name
//         card.appendChild(span)
//         var span = document.createElement('span')
//         span.innerHTML = response.description
//         card.appendChild(span)
//         var span = document.createElement('span')
//         span.innerHTML = response.suggestion
//         card.appendChild(span)
//
//         document.querySelector('#gameDescription').appendChild(col)
// }
// })
//
// }





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
