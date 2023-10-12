const tempoInicial = 20;
let tempoRestante = tempoInicial; 
let jogoIniciado = true;
let playerPosition = { x: 0, y: 0 }; 
let temporizador;

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


// Criar slots de inventário
for (let i = 0; i < 3; i++) {
    const slot = document.createElement('div');
    slot.className = 'slot';
    slot.id = 'slot' + (i + 1);

    // Adicionar um item de exemplo ao slot (opcional)
    const item = document.createElement('img');
    // item.src = 'caminho/para/o/item' + (i + 1) + '.png'; // Substitua com o caminho real para as imagens dos itens
    // item.alt = 'Item ' + (i + 1);
    // item.className = 'item';
    slot.appendChild(item);

    inventario.appendChild(slot);
}


function iniciarTemporizador() {
    // Função para iniciar o temporizador
    temporizador = setInterval(() => {
        tempoRestante--;
        if (tempoRestante < 0) tempoRestante = 0;
        elementoContagemRegressiva.innerText = tempoRestante;

        if (tempoRestante <= 0) {
            clearInterval(temporizador);
            
            if (score >= bestScore) {
                localStorage.setItem('bestScore', score);
            }

            showGameOverModal(); 
        }
    }, 1000);
}


playerPosition = spawnPlayer();
changeCharacterColor(characterColor);


document.addEventListener('keyup', (event) => {
    if (!jogoIniciado || !playerPosition || tempoRestante <= 0) return;

    const cell = tabuleiro.querySelector(`#cell-${playerPosition.x}-${playerPosition.y}`);
    const character = cell.querySelector('.character-container');
    let isValidMove = false;
    if (!character) return;

    switch(event.key) {
        case 'ArrowUp':
            if (playerPosition.x > 0) {
                isValidMove = true;
                playerPosition.x--;
            }
            break;
        case 'ArrowDown':
            if (playerPosition.x < numRows - 1) {
                isValidMove = true;
                playerPosition.x++;
            }
            break;
        case 'ArrowLeft':
            if (playerPosition.y > 0) {
                isValidMove = true;
                playerPosition.y--;
            }
            break;
        case 'ArrowRight':
            if (playerPosition.y < numCols - 1) {
                isValidMove = true;
                playerPosition.y++;
            }
            break;
        default:
            return; // Se não for uma tecla de seta, saia da função
    }
    
    if (!isValidMove) return;

    const newCell = document.getElementById(`cell-${playerPosition.x}-${playerPosition.y}`);
    if (newCell) newCell.appendChild(character); // Mova o contêiner do personagem para a nova célula

    ajustarTempoEPontuacao(newCell);
    reatribuirCoresTabuleiro();
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
        pauseButton.innerText = 'Continue'; 
        pauseButton.classList.remove('playing');
        pauseButton.classList.add('paused');
    } else {
        jogoIniciado = true;
        iniciarTemporizador();
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
    removePlayer();
    playerPosition = spawnPlayer();
}

function exitGame() {
    window.location.href = 'index.html';
}