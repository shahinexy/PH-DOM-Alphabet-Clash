// hide element 
function hideElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
// show element
function showElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
// get element by id
function getElementById(elementId){
    const element = document.getElementById(elementId);
    return element;
}
// random alphabet
function getRandomAlphbet(){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const randomAlphabet = alphabet[Math.round(Math.random()*25)];
    return randomAlphabet;
}
// add alphabet background color
function setBgcolorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
// remove alphabet background color
function removeBgcolorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
// get element value
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementVaue = element.innerText;
    const elementToInt = parseInt(elementVaue);
    return elementToInt;
}
// set element value 
function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}