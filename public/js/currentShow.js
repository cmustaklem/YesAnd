// console.log('Made it here')
fetch('/api/v1/shows/' + showID, {
    method: 'get',
    credentials: 'same-origin'
})

// show.games.forEach(function(game) {
//     console.log(game)
//     var cast = game.users.map(function(user) {
//         return '<li>' + user.first_name + ' ' + user.last_name + '</li>'
//     var theGame = game.name
//     var namesuggestion = game.suggestion
//     })
//     })

.then(response => response.json()) //response.json parses the data
// .then(response => listPlanets(response.results))
.then(function(show){
    // console.log(show)
    var cast = show.users.map(function(user) {
        return '<h6>' + '<p>' + user.first_name + ' ' + user.last_name + '</p>' + '</h6>'
    })
    console.log(cast)
    show.games.forEach(function(game) {
        console.log(show.games)
        var col = document.createElement('div')
        col.className = 'panel panel-default'

        var col2 = document.createElement('div')
        col2.className = 'panel-heading'
        col2.setAttribute("role", "tab")
        col2.setAttribute("id", "heading" + game.id)
        col.appendChild(col2)

        var header = document.createElement('h4')
        header.className = 'panel-title'


        var headerlink = document.createElement('a')
        headerlink.innerHTML = game.name
        headerlink.className = 'collapsed'
        headerlink.setAttribute("role", "button")
        headerlink.setAttribute("data-toggle", "collapse")
        headerlink.setAttribute("data-parent", "#accordion")
        headerlink.setAttribute("href", "#collapse" + game.id)
        headerlink.setAttribute("aria-expanded", "false")
        headerlink.setAttribute("aria-controls", "collapse" + game.id)
        header.appendChild(headerlink)
        col2.appendChild(header)

        var content = document.createElement('div')
        content.className = 'panel-collapse collapse'
        content.setAttribute("id", "collapse" + game.id)
        content.setAttribute("role", "tabpanel")
        content.setAttribute("aria-labelledby", "heading" + game.id)

{/* <table class="table table-bordered"> <thead> <tr> <th>#</th> <th>First Name</th> <th>Last Name</th> <th>Username</th> </tr> </thead> <tbody> <tr> <th scope="row">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope="row">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope="row">3</th> <td>Larry</td> <td>the Bird</td> <td>@twitter</td> </tr> </tbody> </table> */}

        var contentitems = document.createElement('div')
        contentitems.className = 'panel-body'
        contentitems.innerHTML = '<p>' + '<h3>' + 'Description-' + ' ' + game.description + '</h3>' + '</p>' + '<p>' + '<h4>' + 'Suggestion-' + ' ' + game.suggestion + '</h4>' + '</p>' + '<p>' + '<h5>' + 'The Cast' + '</h5>' + '</p>' + cast.join('')
        content.appendChild(contentitems)
        col.appendChild(content)

        document.querySelector('#theCurrentShow').appendChild(col)
})
})

        // show.games.forEach(function(game) {
        //     console.log(game)
        //     var cast = game.users.map(function(user) {
        //         return '<p>' + user.first_name + ' ' + user.last_name + '</p>'
        //     })
        //
        //     document.getElementById('theCurrentShow').innerHTML += `
        //     <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        //
        //   <div class="panel panel-default">
        //     <div class="panel-heading" role="tab" id="headingTwo">
        //       <h4 class="panel-title">
        //         <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        //           game.name
        //         </a>
        //       </h4>
        //     </div>
        //     <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
        //       <div class="panel-body">
        //         ${cast}
        //       </div>
        //     </div>
        //   </div>
        //
        // </div>
        //     <div class="panel-body">
        //         <div class="row">
        //             <div class="col-xs-12">
        //                 <h2>${game.name}</h2>
        //             </div>
        //         </div>
        //         <div class="row">
        //             <div class="col-xs-12">
        //                 <div class="col-xs-12">
        //                     <ul class="list-unstyled theGameCast">
        //                         ${cast}
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     `
        //     document.querySelector('#theCurrentShow').appendChild(col)
    //     })
    // })
    // show.users.forEach(function(show){
    //     var col = document.createElement('div')
    //     col.className = 'panel panel-default'
    //
    //     var col2 = document.createElement('div')
    //     col2.className = 'panel-heading'
    //     col2.setAttribute("role", "tab")
    //     col2.setAttribute("id", "heading" + show.id)
    //     col.appendChild(col2)
    //
    //     var header = document.createElement('h4')
    //     header.className = 'panel-title'
    //
    //
    //     var headerlink = document.createElement('a')
    //     headerlink.innerHTML = show.games
    //     headerlink.className = 'collapsed'
    //     headerlink.setAttribute("role", "button")
    //     headerlink.setAttribute("data-toggle", "collapse")
    //     headerlink.setAttribute("data-parent", "#accordion")
    //     headerlink.setAttribute("href", "#collapse" + show.id)
    //     headerlink.setAttribute("aria-expanded", "false")
    //     headerlink.setAttribute("aria-controls", "collapse" + show.id)
    //     header.appendChild(headerlink)
    //     col2.appendChild(header)
    //
    //     var content = document.createElement('div')
    //     content.className = 'panel-collapse collapse'
    //     content.setAttribute("id", "collapse" + show.id)
    //     content.setAttribute("role", "tabpanel")
    //     content.setAttribute("aria-labelledby", "heading" + show.id)
    //
    //
    //
    //     var contentitems = document.createElement('div')
    //     contentitems.className = 'panel-body'
    //     contentitems.innerHTML = '<p>' + games.description + '</p>' + '<p>' + games.suggestion + '</p>' + '<p>' + users.first_name + ' ' + users.last_name + '</p>'
    //     content.appendChild(contentitems)
    //     col.appendChild(content)
