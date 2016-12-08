// console.log('Hello World')

var team
var login = document.querySelector('#loginButton')
var password = document.querySelector('#passwordLogin')

password.addEventListener('keypress', pressEnter)
login.addEventListener('click', loginHandler)

function pressEnter(event) {
    // console.log(event)
    if (event.key === 'Enter') {
        loginHandler()
    }
}

function loginHandler() {

  var email = document.querySelector('#emailAddressLogin').value
  var password = document.querySelector('#passwordLogin').value
  console.log(email, password)


//we will need to make a new route api/v1/auth 1. attempt login 2. return user or return user 3.
  fetch('api/v1/auth', {
    body: JSON.stringify({
      email: email,
      password: password
    }),
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
// .then(function(response){
//   team = response.user.team_id
//   console.log(team)
// })
  .then(signedupHandler)
}

function signedupHandler(response){
 if ( typeof response.user != 'undefined'){
  //  sessionStorage.setItem('user', response.user.api_token)
   window.location.href = '/home'
 }
   else{
     response.forEach(function(error){
       var errorDiv = document.createElement('div')
       errorDiv.classList.add('alert', 'alert-danger')
       errorDiv.innerHTML = error
       document.querySelector('#errors').appendChild(errorDiv)
     })
   }
}
