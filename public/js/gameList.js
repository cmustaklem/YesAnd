fetch('/api/v1/games', {
    method: 'get',
    credentials: 'same-origin'
})

.then(response => response.json()) //response.json parses the data
// .then(response => listPlanets(response.results))
.then(function(items){
    console.log(items)
    items.forEach(function(item){
        var col = document.createElement('div')
        col.className = 'panel panel-default'

        var col2 = document.createElement('div')
        col2.className = 'panel-heading'
        col2.setAttribute("role", "tab")
        col2.setAttribute("id", "heading" + item.id)
        col.appendChild(col2)

        var header = document.createElement('h4')
        header.className = 'panel-title'


        var headerlink = document.createElement('a')
        headerlink.innerHTML = item.name
        headerlink.className = 'collapsed'
        headerlink.setAttribute("role", "button")
        headerlink.setAttribute("data-toggle", "collapse")
        headerlink.setAttribute("data-parent", "#accordion")
        headerlink.setAttribute("href", "#collapse" + item.id)
        headerlink.setAttribute("aria-expanded", "false")
        headerlink.setAttribute("aria-controls", "collapse" + item.id)
        header.appendChild(headerlink)
        col2.appendChild(header)

        var content = document.createElement('div')
        content.className = 'panel-collapse collapse'
        content.setAttribute("id", "collapse" + item.id)
        content.setAttribute("role", "tabpanel")
        content.setAttribute("aria-labelledby", "heading" + item.id)



        var contentitems = document.createElement('div')
        contentitems.className = 'panel-body'
        contentitems.innerHTML = '<p>' + item.description + '</p>' + '<p>' + item.suggestion + '</p>'
        content.appendChild(contentitems)
        col.appendChild(content)

        document.querySelector('#gameAccordion').appendChild(col)
        })
    })
