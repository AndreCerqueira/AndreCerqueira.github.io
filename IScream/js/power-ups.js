
let powerUpInterval;
let moveCounter = 0;
let powerUpGranted = false;

const powerUps = {
    "gelinho": "url(../img/gelinho.svg)",
    "pedrinha": "url(../img/pedrinha.svg)",
    "conezinho": "url(../img/conezinho.svg)"
}

function criarPowerUp() {
    const powerUp = document.createElement('div');
    powerUp.className = 'power-up';

    const keys = Object.keys(powerUps);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const tipoPowerUp = powerUps[randomKey];
    powerUp.style.backgroundImage = tipoPowerUp;

    return powerUp;
}

function incrementMoveCounter() {
    moveCounter++;

    if (moveCounter === 4) {
        tryToSpawnPowerUp();
        moveCounter = 0;
    }
}

function tryToSpawnPowerUp() {
    let shouldSpawnPowerUp = Math.random() < 0.5; // 30% de chance de spawnar um power-up

    if (shouldSpawnPowerUp || powerUpGranted) {
        spawnPowerUp();
        powerUpGranted = false;
    }
    else {
        powerUpGranted = true;
    }
}


function spawnPowerUp() {
    if (!jogoIniciado || tempoRestante <= 0) return;

    const powerUp = criarPowerUp();

    let x, y, cell;
    do {
        x = Math.floor(Math.random() * numRows);
        y = Math.floor(Math.random() * numCols);
        cell = document.getElementById(`cell-${x}-${y}`);
    } while (cell && (cell.contains(document.querySelector('.character-container')) || cell.contains(document.querySelector('.power-up'))));

    if (cell) {
        cell.appendChild(powerUp);
    }


    let despawnMoves = 3;
    if (powerUp.style.backgroundImage.includes('pedrinha'))
        despawnMoves += 3;

    document.addEventListener('keyup', function despawnListener(event) { // Adicionado o parâmetro 'event'

        if (!lastMoveWasValid) return;
        lastMoveWasValid = false;
        
        console.log('contou como despawnMoves');

        despawnMoves--;

        if (despawnMoves <= 0) {
            if (powerUp.parentNode === cell) {
                cell.removeChild(powerUp);
            }
            document.removeEventListener('keyup', despawnListener);
        }
    });
}

function removeAllPowerUps() {
    const powerUps = document.querySelectorAll('.power-up');
    powerUps.forEach(powerUp => powerUp.parentNode.removeChild(powerUp));
}

function triggerGelinhoPowerUp() {
    forcarTudoAzul();
}

function triggerConezinhoPowerUp() {

    // contar em let inventario = [null, null, null]; os que tem conezinho
    let count = inventario.filter(item => item && item.includes('conezinho')).length;
    
    score += 5 * count;
    placar.innerText = 'Score: ' + score;
}