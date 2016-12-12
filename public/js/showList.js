fetch('/api/v1/shows', {
    method: 'get',
    credentials: 'same-origin'
})

.then(response => response.json())
.then(function(items){
    console.log(items)
    items.forEach(function(item){
        var show = document.createElement('li')
        show.innerHTML = '<a href="/show/' + item.id + '">' + item.location + ' ' + item.date + '</a>'
        document.querySelector('#pastShowDropDownList').appendChild(show)
    })
})
