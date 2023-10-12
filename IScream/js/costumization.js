
const selectCharacterColor = document.getElementById('characterColor');
const inputCharacterName = document.getElementById('characterName');

let characterColor = sessionStorage.getItem('characterColor');
if (!characterColor) characterColor = 'pink';

changeCharacterColor(characterColor);
selectCharacterColor.value = characterColor;

let characterName = sessionStorage.getItem('characterName');
if (!characterName) characterName = 'Gelato';
inputCharacterName.value = characterName;

function confirm() {
    let characterColor = selectCharacterColor.value;
    let characterName = inputCharacterName.value;

    sessionStorage.setItem('characterColor', characterColor);
    sessionStorage.setItem('characterName', characterName);

    window.location.href = 'index.html';
}


selectCharacterColor.addEventListener('change', function() {
    const color = selectCharacterColor.value;

    changeCharacterColor(color);
});

