document.getElementById('submitSoundFile').addEventListener('click', function() {

    postNewSound()
})


function postNewSound() {
    var gameId = document.getElementById('soundEffectGameList')
    var soundfile = document.getElementById('gameSoundfile')
    console.log(gameId, gameId.options, gameId.selectedIndex, gameId.options[gameId.selectedIndex].value)
    console.log(soundfile.files)

    var formData = new FormData()
    formData.append('game_id', gameId.options[gameId.selectedIndex].value)
    formData.append('sound_file', soundfile.files[0])

    fetch('/api/v1/sounds', {
        method: 'post',
        body: formData
    })
}

document.getElementById('soundEffectGameList') {
    presentSounds()
}

function(presentSounds) {
    fetch('https://yesandsound.s3.amazonaws.com/${fileName}', {
        method: 'GET'
    })
}

document.getElementById('existingSoundBoard') {
    playGameSound()
}

function(playGameSound) {
    fetch('https://yesandsound.s3.amazonaws.com/${fileName}', {
        method: 'GET'
    })
}

// document.getElementById('playSound') {
//     playNewSound()
// }


    // fetch('api/v1/sounds', {
    //     method: 'GET',
    // })
    // .then(function(response) {
    //     return response.json()
    // })
    // .then(function(response) {
    //     console.log(response)
    // })



//must form data. I cannot upload formdata for uploading instead of stringify. stringify does not work for sound or image files.
