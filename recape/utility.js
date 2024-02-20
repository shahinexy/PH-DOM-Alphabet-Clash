function setInnerText(id, value){
    const result = document.getElementById(id).innerText = value;
    return result;
}

function setInnerNumber(id, value){
    const number = document.getElementById(id).innerText;
    const numberToInt = parseInt(number) = value;
    return numberToInt;
}