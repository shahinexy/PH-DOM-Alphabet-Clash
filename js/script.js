// points and life section
const audio = new Audio();
let audioPlay = false

function handlekeyBoard(e) {
    if(audioPlay == false){
        return;
    }

    const playerPress = e.key;

    // for end the game middle of playing.
    if (playerPress == 'Escape') {
        gameover()
    }

    const currentAlpabet = getElementById('alphabet');
    const activeAlphabet = currentAlpabet.innerText;
    const activeAlphabetLowercase = activeAlphabet.toLowerCase();
    if (playerPress === activeAlphabetLowercase) {
        // const points = getElementById('points')
        // const innerPoints = points.innerText;
        // const currentpoint = parseInt(innerPoints);
        // const pointPlus = points + 1;
        // points.innerText = pointPlus;

        const points = getElementValueById('points')
        const pointPlus = points + 1;
        setElementValueById('points', pointPlus);

        removeBgcolorById(activeAlphabetLowercase)
        continuegame()

        audio.src = 'audio/right.mp3';
        audio.play()
    }
    else {
        // const life = getElementById('life');
        // const innerLife = life.innerText;
        // const currentLife = parseInt(innerLife);
        // const decressLife = currentLife - 1;
        // life.innerText = decressLife;

        const life = getElementValueById('life');
        const fileDecress = life - 1;
        setElementValueById('life', fileDecress);

        if (fileDecress === 0) {
            gameover();
        }

        audio.src = 'audio/wrong.mp3';
        audio.play()
    }
}

document.addEventListener('keyup', handlekeyBoard)

// game continue section
function continuegame() {
    const randonAlphabet = getRandomAlphbet();
    const currentAlpabet = getElementById('alphabet');
    currentAlpabet.innerText = randonAlphabet;
    setBgcolorById(randonAlphabet);
}

// game start section
function play() {
    // hide everything and only show playground
    hideElement('start_section');
    showElement('play_ground');
    continuegame();

    hideElement('end_game');

    // reset score and life for play again
    setElementValueById('life', 5);
    setElementValueById('points', 0);

    audioPlay = true;
}

// game over section
function gameover() {
    hideElement('play_ground');
    showElement('end_game')

    // game result 
    const point = getElementValueById('points');
    setElementValueById('score', point)

    // reset alphabet bg color
    const currentLeter = getElementById('alphabet');
    const current = currentLeter.innerText;
    removeBgcolorById(current)

    audioPlay = false;

}