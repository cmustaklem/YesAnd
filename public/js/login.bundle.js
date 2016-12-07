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

	// console.log('Hello World')


	var login = document.querySelector('#loginButton');
	var password = document.querySelector('#passwordLogin');

	password.addEventListener('keypress', pressEnter);
	login.addEventListener('click', loginHandler);

	function pressEnter(event) {
	  // console.log(event)
	  if (event.key === 'Enter') {
	    loginHandler();
	  }
	}

	function loginHandler() {

	  var email = document.querySelector('#emailAddressLogin').value;
	  var password = document.querySelector('#passwordLogin').value;
	  console.log(email, password);

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