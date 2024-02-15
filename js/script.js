function play(){
    hideElement('start_section');
    showElement('play_ground');
    continuegame();
}

function continuegame(){
    const randonAlphabet = getRandomAlphbet();
    const currentAlpabet = getElementById('alphabet');
    currentAlpabet.innerText = randonAlphabet;
    setBgcolorById(randonAlphabet);
}

