function handlekeyBoard(e){
    const playerPress = e.key;
    const currentAlpabet = getElementById('alphabet');    
    const activeAlphabet = currentAlpabet.innerText;
    const activeAlphabetLowercase =  activeAlphabet.toLowerCase();
    if(playerPress === activeAlphabetLowercase){
        const points = getElementById('points')
        const innerPoints = points.innerText;
        const currentpoint = parseInt(innerPoints);
        const pointPlus = currentpoint + 1;
        points.innerText = pointPlus;
        
        removeBgcolorById(activeAlphabetLowercase)
        continuegame()
        console.log('right');
    }
    else{
        console.log('wrong');
    }
}

document.addEventListener('keyup', handlekeyBoard)


function continuegame(){
    const randonAlphabet = getRandomAlphbet();
    const currentAlpabet = getElementById('alphabet');
    currentAlpabet.innerText = randonAlphabet;
    setBgcolorById(randonAlphabet);
}

function play(){
    hideElement('start_section');
    showElement('play_ground');
    continuegame();
}

