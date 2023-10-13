const tempoInicial = 20;
let tempoRestante = tempoInicial; 
let jogoIniciado = true;
let playerPosition = { x: 0, y: 0 }; 
let temporizador;
let isAnimating = false;

let bestScore = localStorage.getItem('bestScore');
if (!bestScore) bestScore = 0;
document.getElementById("game-best-score").innerHTML = "<strong> Best Score: " + bestScore + "</strong>";
const placar = document.getElementById('game-score');

const elementoContagemRegressiva = document.getElementById('contagemRegressiva');

let characterColor = sessionStorage.getItem('characterColor');
if (!characterColor) characterColor = 'pink';

criarTabuleiro();
atribuirCoresTabuleiro();
iniciarTemporizador();

function iniciarTemporizador() {
    temporizador = setInterval(() => {
        tempoRestante--;
        if (tempoRestante < 0) tempoRestante = 0;
        elementoContagemRegressiva.innerText = tempoRestante;

        if (tempoRestante <= 0) {
            clearInterval(temporizador);
            
            if (score >= bestScore) {
                bestScore = score;
                localStorage.setItem('bestScore', score);
            }

            showGameOverModal(); 
        }
    }, 1000);
}

playerPosition = spawnPlayer();
changeCharacterColor(characterColor);
changeCharacterMeltedColor(characterColor);

document.addEventListener('keyup', (event) => {
    if (!jogoIniciado || !playerPosition || tempoRestante <= 0 || isAnimating) return;

    const cell = tabuleiro.querySelector(`#cell-${playerPosition.x}-${playerPosition.y}`);
    const character = cell.querySelector('.character-container');
    let isValidMove = false;
    if (!character) return;

    let animationClass = '';
    let newPosition = { ...playerPosition }; 

    switch(event.key) {
        case 'ArrowUp':
            if (playerPosition.x > 0) {
                animationClass = 'move-up';
                isValidMove = true;
                newPosition.x--;
            }
            break;
        case 'ArrowDown':
            if (playerPosition.x < numRows - 1) {
                animationClass = 'move-down';
                isValidMove = true;
                newPosition.x++;
            }
            break;
        case 'ArrowLeft':
            if (playerPosition.y > 0) {
                animationClass = 'move-left';
                isValidMove = true;
                newPosition.y--;
            }
            break;
        case 'ArrowRight':
            if (playerPosition.y < numCols - 1) {
                animationClass = 'move-right';
                isValidMove = true;
                newPosition.y++;
            }
            break;
        default:
            return;
    }
    
    if (!isValidMove) return;
    
    isAnimating = true;
    
    character.classList.add(animationClass);

    character.addEventListener('animationend', () => {
        character.classList.remove(animationClass);
        const newCell = document.getElementById(`cell-${newPosition.x}-${newPosition.y}`);
        if (newCell) newCell.appendChild(character);
        playerPosition = newPosition; 

        const powerUp = newCell.querySelector('.power-up');
        if (powerUp) {
            catchPowerUp(powerUp, newCell); 
        }

        incrementMoveCounter();
        ajustarTempoEPontuacao(newCell);
        mudarCorDasOutrasCelulas(newCell);

        isAnimating = false;
    }, {once: true});
});

function ajustarTempoEPontuacao(celula) {
    if (celula.classList.contains('celula-vermelho')) {
        tempoRestante -= 3;
    } else if (celula.classList.contains('celula-laranja')) {
        score += 1;
    } else if (celula.classList.contains('celula-azul')) {
        tempoRestante += 1;
        score += 3;
    }

    if (tempoRestante < 0) tempoRestante = 0;
    elementoContagemRegressiva.innerText = tempoRestante;
    placar.innerText = 'Score: ' + score;
}

function pauseGame() {
    const pauseButton = document.querySelector('#pauseButton');

    if (jogoIniciado) {
        jogoIniciado = false;
        clearInterval(temporizador);
        clearInterval(powerUpInterval); 
        pauseButton.innerText = 'Continue'; 
        pauseButton.classList.remove('playing');
        pauseButton.classList.add('paused');
    } else {
        jogoIniciado = true;
        iniciarTemporizador();
        iniciarPowerUps();
        pauseButton.innerText = 'Pause';
        pauseButton.classList.remove('paused');
        pauseButton.classList.add('playing');
    }
}

function restartGame() {
    modal.style.display = "none";
    jogoIniciado = true;

    document.getElementById("game-best-score").innerHTML = "<strong> Best Score: " + bestScore + "</strong>";
    score = 0;
    tempoRestante = tempoInicial;
    placar.innerText = 'Score: 0';
    
    clearInterval(temporizador); 
    iniciarTemporizador(); 
    reatribuirCoresTabuleiro();
    removeAllPowerUps();
    clearAllInventorySlots();
    removePlayer();
    playerPosition = spawnPlayer();
    changeCharacterColor(characterColor);
}

function exitGame() {
    window.location.href = 'index.html';
}