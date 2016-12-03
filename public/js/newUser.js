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
}
