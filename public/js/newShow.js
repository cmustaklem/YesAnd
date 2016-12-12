fetch('api/v1/users', {
    credentials: 'same-origin'
})

.then(response => response.json()) //response.json parses the data
// .then(response => listPlanets(response.results))
.then(function(items){
    items.forEach(function(item){
        var div = document.createElement('div')
        var label = document.createElement('label')
        div.classList = 'playerArrangement';
        div.classList = 'caster';
        label.htmlFor = 'checkbox-id';
        label.classList = 'bold';
        label.appendChild(document.createTextNode(item.first_name + ' ' + item.last_name));
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = item.first_name + ' ' + item.last_name;
        checkbox.value = item.id;
        checkbox.classList = 'checkbox-inline';
        div.appendChild(checkbox);
        div.appendChild(label);

        document.querySelector('#inlineCheckbox1').appendChild(div)
    })
})

document.getElementById('addNewShowPart1').addEventListener('click', function() {

    postFirstHalfOfShow()
})

function postFirstHalfOfShow() {
    var show_date = document.getElementById('show_date').value
    var show_location = document.getElementById('show_location').value
    var cast = document.getElementById('addNewShowPart1')
    var checkedBoxes = getCheckedBoxes("mycheckboxes");

    if(show_date && show_location && cast){
        fetch('/api/v1/shows', {
            method: 'post',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date: show_date,
                location: show_location
            })
            .then(function(response) {
                 return response.json()
            })
            .then(function(response) {
                 fetch('/api/v1/show_user', {
                     method: 'post',
                     credentials: 'same-origin',
                     headers: {
                         'Content-Type': 'application/json'
                     },
                     body: JSON.stringify({
                         user_id: cast
                         show_id: response.id
                })
            })
        })
    })
}
}
        // .then(function(response) {
        //     return response.json()
        // })
        // .then(function(response) {
        //     fetch('/api/v1/show_user', {
        //         method: 'post',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             user_id: cast
        //         })
        //     })
        //     .then(function(response) {
        //         if (response.status >= 200 && response.status <= 400) {
        //             return response.json()
        //         }
        //         else {
        //             alert(response.body)
        //         }
        //     })
        //     .then(function(response) {
        //         window.location.href = '/home'
        //     })
        // })

        // .then(function(response) {
        //     fetch('/api/v1/users', {
        //         method: 'post',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             first_name: firstname,
        //             last_name: lastname,
        //             phone_number: phonenumber,
        //             email: emailaddress,
        //             password: password,
        //             team_id: response.id,
        //             director: 'true'
        //         })
        //     })
            // .then(function(response) {
            //     if (response.status >= 200 && response.status <= 400) {
            //         return response.json()
            //     }
            //     else {
            //         alert(response.body)
            //     }
            // })
            // .then(function(response) {
            //     window.location.href = '/home'
            // })






    // if(show_date && show_location && cast) {
    //     fetch('/api/v1/shows', {
    //         method: 'post',
    //         credentials: 'same-origin',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             date: firstname,
    //             location: lastname
    //         })
    //     })
    //     .then(function(response) {
    //         if (response.status >= 200 && response.status <= 400) {
    //             return response.json()
    //         }
    //         else {
    //             alert('Error.')
    //             return false
    //         }
    //     })
    //     .then(function(response) {
    //         if (response !== false) {
    //             window.location.href = '/playerhome'
    //         }
    //     })
    // }

    // fetch('/api/v1/shows', {
    //     method: 'post',
    //     credentials: 'same-origin',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         first_name: firstname,
    //         last_name: lastname,
    //         phone_number: phonenumber,
    //         email: emailaddress,
    //         password: password,
    //         team_id: window.location.href.split('?')[1].replace('team_id=', '').split('#')[0]
    //     })
    // })
