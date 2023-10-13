

const characterColor = sessionStorage.getItem('characterColor');
changeCharacterColor(characterColor);


function openGame() {
    document.location.href = "game.html";
}

function openCostumization() {
    document.location.href = "costumization.html";
}

function openInstructions() {
    document.location.href = "instructions.html";
}


function openIndex() {
    document.location.href = "index.html";
}