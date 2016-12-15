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
        label.htmlFor = 'checkbox-id';
        label.classList = 'bold';
        label.appendChild(document.createTextNode(item.first_name + ' ' + item.last_name));
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = item.id;
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
    // var cast = document.getElementById('addNewShowPart1')
    // var checkedBoxes = getCheckedBoxes("inlineCheckbox1");
    var castList = document.querySelectorAll('input[type=checkbox]')
    var castListIds = []

    castList.forEach(function(castMember) {
      if (castMember.checked === true) {
          var castIDNumber = Number(castMember.value)
          castListIds.push(castIDNumber)
      }
      console.log(castListIds)

    })
    // console.log(castList)


    if(show_date && show_location && castListIds.length){
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
        })
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            var showId = response.id
            var showUsers = []

            castListIds.forEach(function (castListID) {
                fetch('/api/v1/show_users', {
                    method: 'post',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user_id: castListID,
                        show_id: showId
                    })
                })
                .then(function(response) {
                    return response.json()
                })
                .then(function(response) {
                    showUsers.push(response)

                    if (showUsers.length === castListIds.length) {
                        window.location.href = '/newshowgames/' + showId
                    }
                })
            })
        })
    }
}
