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

	// document.getElementById('submitSoundFile').addEventListener('click', function() {
	//
	//     postNewSound()
	// })
	//
	//
	// function postNewSound() {
	//     var gameId = document.getElementById('soundEffectGameList')
	//     var soundfile = document.getElementById('gameSoundfile')
	//     console.log(gameId, gameId.options, gameId.selectedIndex, gameId.options[gameId.selectedIndex].value)
	//     console.log(soundfile.files)
	//
	//     var formData = new FormData()
	//     formData.append('game_id', gameId.options[gameId.selectedIndex].value)
	//     formData.append('sound_file', soundfile.files[0])
	//
	//     fetch('/api/v1/sounds', {
	//         method: 'post',
	//         credentials: 'same-origin',
	//         body: formData
	//     })
	// }
	//
	// // document.getElementById('soundEffectGameList') {
	// //     presentSounds()
	// // }
	//
	// function(presentSounds) {
	//     fetch('https://yesandsound.s3.amazonaws.com/${fileName}', {
	//         method: 'GET'
	//     })
	// }
	//
	// document.getElementById('existingSoundBoard') {
	//     playGameSound()
	// }
	//
	// function(playGameSound) {
	//     fetch('https://yesandsound.s3.amazonaws.com/${fileName}', {
	//         method: 'GET'
	//     })
	// }
	//
	// // document.getElementById('playSound') {
	// //     playNewSound()
	// // }
	//
	//
	//     // fetch('api/v1/sounds', {
	//     //     method: 'GET',
	//     // })
	//     // .then(function(response) {
	//     //     return response.json()
	//     // })
	//     // .then(function(response) {
	//     //     console.log(response)
	//     // })
	//
	//
	//
	// //must form data. I cannot upload formdata for uploading instead of stringify. stringify does not work for sound or image files.
	"use strict";

/***/ }
/******/ ]);