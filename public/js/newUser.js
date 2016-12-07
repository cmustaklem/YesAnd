document.getElementById('signUpUserButton').addEventListener('click', function() {

    postNewUserInfo()
})


function postNewUserInfo() {
    var firstname = document.getElementById('userFirstName')
    var lastname = document.getElementById('userLastName')
    var phonenumber = document.getElementById('userPhoneNumber')
    var emailaddress = document.getElementById('userEmailAddress')
    var password = document.getElementById('userPassword')
    console.log(firstname.value)

    fetch('api/v1/users', {
        method: 'post',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            first_name: firstname.value,
            last_name: lastname.value,
            phone_number: phonenumber.value,
            email: emailaddress.value,
            password: password.value
        })
    })

    .then(response => response.json())

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
