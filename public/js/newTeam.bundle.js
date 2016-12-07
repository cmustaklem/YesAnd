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

	document.getElementById('signUpTeamButton').addEventListener('click', function () {

	    postNewUserInfo();
	});

	function postNewUserInfo() {
	    var teamname = document.getElementById('teamName');
	    var website = document.getElementById('teamWebsite');
	    var city = document.getElementById('teamCity');
	    var state = document.getElementById('teamState');
	    var firstname = document.getElementById('firstName');
	    var lastname = document.getElementById('lastName');
	    var phonenumber = document.getElementById('phoneNumber');
	    var emailaddress = document.getElementById('emailAddressLogin');
	    var password = document.getElementById('passwordLogin');
	    // console.log(firstname)

	    fetch('api/v1/teams', {
	        method: 'post',
	        headers: {
	            'Content-Type': 'application/json'
	        },
	        body: JSON.stringify({
	            name: teamname.value,
	            website: website.value,
	            city: city.value,
	            state: state.value
	        })
	    }).then(function (response) {
	        return response.json();
	    }).then(function (response) {
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
	                password: password.value,
	                team_id: response.id
	            })
	        });
	    });
	}

/***/ }
/******/ ]);