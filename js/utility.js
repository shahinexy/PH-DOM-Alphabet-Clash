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