/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	document.getElementById('signUpUserButton').addEventListener('click', function () {

	    postNewUserInfo();
	});

	function postNewUserInfo() {
	    var firstname = document.getElementById('userFirstName');
	    var lastname = document.getElementById('userLastName');
	    var phonenumber = document.getElementById('userPhoneNumber');
	    var emailaddress = document.getElementById('userEmailAddress');
	    var password = document.getElementById('userPassword');
	    console.log(firstname.value);

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
	    }).then(function (response) {
	        return response.json();
	    }).then(signedupHandler);
	}

	function signedupHandler(response) {
	    if (typeof response.user != 'undefined') {
	        //  sessionStorage.setItem('user', response.user.api_token)
	        window.location.href = '/home';
	    } else {
	        response.forEach(function (error) {

	            var errorDiv = document.createElement('div');
	            errorDiv.classList.add('alert', 'alert-danger');
	            errorDiv.innerHTML = error;
	            document.querySelector('#errors').appendChild(errorDiv);
	        });
	    }
	}

/***/ }
/******/ ]);