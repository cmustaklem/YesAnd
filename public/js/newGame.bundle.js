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

	document.getElementById('gameSubmit').addEventListener('click', function () {

	    postGameInfo();
	});

	function postGameInfo() {
	    var gameName = document.getElementById('gameName');
	    var gameDescription = document.getElementById('gameDescription');
	    var gameSuggestion = document.getElementById('gameSuggestion');

	    fetch('api/v1/games', {
	        method: 'post',
	        headers: {
	            'Content-Type': 'application/json'
	        },
	        credentials: 'same-origin',
	        body: JSON.stringify({
	            name: gameName.value,
	            description: gameDescription.value,
	            suggestion: gameSuggestion.value
	        })
	    });
	}

	function myFunction() {
	    window.location.href = '/thankyougame';
	}

/***/ }
/******/ ]);