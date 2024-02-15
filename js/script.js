// points and life section
function handlekeyBoard(e){
    const playerPress = e.key;
    const currentAlpabet = getElementById('alphabet');    
    const activeAlphabet = currentAlpabet.innerText;
    const activeAlphabetLowercase =  activeAlphabet.toLowerCase();
    if(playerPress === activeAlphabetLowercase){
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
    }
    else{
        // const life = getElementById('life');
        // const innerLife = life.innerText;
        // const currentLife = parseInt(innerLife);
        // const decressLife = currentLife - 1;
        // life.innerText = decressLife;

        const life = getElementValueById('life');
        const fileDecress = life - 1;
        setElementValueById('life', fileDecress);

        if(fileDecress === 0){
            gameover();
        }
    }
}

document.addEventListener('keyup', handlekeyBoard)

// game continue section
function continuegame(){
    const randonAlphabet = getRandomAlphbet();
    const currentAlpabet = getElementById('alphabet');
    currentAlpabet.innerText = randonAlphabet;
    setBgcolorById(randonAlphabet);
}

// game start section
function play(){
    hideElement('start_section');
    showElement('play_ground');
    continuegame();

    hideElement('end_game');
}

// game over section
function gameover(){
    hideElement('play_ground');
    showElement('end_game')


}