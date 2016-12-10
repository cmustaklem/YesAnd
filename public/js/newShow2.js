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
        gams.className = ""
        gams.htmlFor = 'checkbox-id';
        gams.innerHTML = item.name
        col.appendChild(gams)
        document.querySelector('#gameListing').appendChild(gams)
        // console.log(item.description);
        // var click = document.getElementById('gameDropDown')
    })
})







// function addText(){
//     var input = document.getElementById('inputTask').value;
//     var node=document.createElement("p");
//     var textnode=document.createTextNode(input);
//     node.appendChild(textnode);
//     document.getElementById('addTask').appendChild(node);
//
//     var removeTask = document.createElement('input');
//     removeTask.setAttribute('type', 'button');
//     removeTask.setAttribute("value", "Remove");
//     removeTask.setAttribute("id", "removeButton");
//     removeTask.addEventListener('click', function(e) {
//         node.parentNode.removeChild(node);
//     }, false);
//     node.appendChild(removeTask);
//
//
// }


// fetch('api/v1/users', {
//     credentials: 'same-origin'
// })
//
// // var checkbox = document.createElement('input');
// // checkbox.type = 'checkbox';
// // checkbox.name = item.first_name + ' ' + item.last_name;
// // checkbox.value = item.first_name + ' ' + item.last_name;
//
//
//
// .then(response => response.json()) //response.json parses the data
// // .then(response => listPlanets(response.results))
// .then(function(items){
//     items.forEach(function(item){
//         // col.appendChild(card)
//         // var col = document.createElement('label')
//         // var players = document.createElement('checkbox-inline')
//         // players.innerHTML = item.first_name + ' ' + item.last_name
//         // col.appendChild(players)
//         var div = document.createElement('div')
//         var label = document.createElement('label')
//         div.classList = 'playerArrangement';
//         label.htmlFor = 'checkbox-id';
//         label.classList = 'bold';
//         label.appendChild(document.createTextNode(item.first_name + ' ' + item.last_name));
//         var checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         checkbox.name = item.first_name + ' ' + item.last_name;
//         checkbox.value = item.first_name + ' ' + item.last_name;
//         checkbox.classList = 'checkbox-inline';
//         div.appendChild(checkbox);
//         div.appendChild(label);
//
//         document.querySelector('#inlineCheckbox1').appendChild(div)
//     })
// })
//
// document.getElementById('addNewShowPart1').addEventListener('click', function() {
//
//     postFirstHalfOfShow()
// })
//
// function postFirstHalfOfShow() {
//     var show_date = document.getElementById('show_date').value
//     var show_location = document.getElementById('show_location').value
//     var cast = document.getElementById('addNewShowPart1')
//
//
//     if(show_date && show_location && cast){
//         fetch('/api/v1/shows', {
//             method: 'post',
//             credentials: 'same-origin',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 date: show_date,
//                 location: show_location
//             })
//         })
//         // .then(function(response) {
//         //     return response.json()
//         // })
//         // .then(function(response) {
//         //     fetch('/api/v1/show_user', {
//         //         method: 'post',
//         //         headers: {
//         //             'Content-Type': 'application/json'
//         //         },
//         //         body: JSON.stringify({
//         //             user_id: cast
//         //         })
//         //     })
//         //     .then(function(response) {
//         //         if (response.status >= 200 && response.status <= 400) {
//         //             return response.json()
//         //         }
//         //         else {
//         //             alert(response.body)
//         //         }
//         //     })
//         //     .then(function(response) {
//         //         window.location.href = '/home'
//         //     })
//         // })
//     }
//
// }
//         // .then(function(response) {
//         //     fetch('/api/v1/users', {
//         //         method: 'post',
//         //         headers: {
//         //             'Content-Type': 'application/json'
//         //         },
//         //         body: JSON.stringify({
//         //             first_name: firstname,
//         //             last_name: lastname,
//         //             phone_number: phonenumber,
//         //             email: emailaddress,
//         //             password: password,
//         //             team_id: response.id,
//         //             director: 'true'
//         //         })
//         //     })
//             // .then(function(response) {
//             //     if (response.status >= 200 && response.status <= 400) {
//             //         return response.json()
//             //     }
//             //     else {
//             //         alert(response.body)
//             //     }
//             // })
//             // .then(function(response) {
//             //     window.location.href = '/home'
//             // })
//
//
//
//
//
//
//     // if(show_date && show_location && cast) {
//     //     fetch('/api/v1/shows', {
//     //         method: 'post',
//     //         credentials: 'same-origin',
//     //         headers: {
//     //             'Content-Type': 'application/json'
//     //         },
//     //         body: JSON.stringify({
//     //             date: firstname,
//     //             location: lastname
//     //         })
//     //     })
//     //     .then(function(response) {
//     //         if (response.status >= 200 && response.status <= 400) {
//     //             return response.json()
//     //         }
//     //         else {
//     //             alert('Error.')
//     //             return false
//     //         }
//     //     })
//     //     .then(function(response) {
//     //         if (response !== false) {
//     //             window.location.href = '/playerhome'
//     //         }
//     //     })
//     // }
//
//     // fetch('/api/v1/shows', {
//     //     method: 'post',
//     //     credentials: 'same-origin',
//     //     headers: {
//     //         'Content-Type': 'application/json'
//     //     },
//     //     body: JSON.stringify({
//     //         first_name: firstname,
//     //         last_name: lastname,
//     //         phone_number: phonenumber,
//     //         email: emailaddress,
//     //         password: password,
//     //         team_id: window.location.href.split('?')[1].replace('team_id=', '').split('#')[0]
//     //     })
//     // })
