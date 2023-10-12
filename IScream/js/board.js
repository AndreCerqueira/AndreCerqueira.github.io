
const numRows = 3;
const numCols = 3;
const tabuleiro = document.getElementById('tabuleiro');

// Função para embaralhar um array
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
}

// Função para criar o tabuleiro
function criarTabuleiro() {

    for (let y = 0; y < numRows; y++) {
        for (let x = 0; x < numCols; x++) {
            const celula = document.createElement('div');
            celula.className = 'celula';
            celula.id = `cell-${y}-${x}`;
            tabuleiro.appendChild(celula);
        }
    }
}

function atribuirCoresTabuleiro() {
    let cores;

    if (score < 30) {
        cores = ['celula-azul', 'celula-azul', 'celula-laranja', 'celula-laranja', 'celula-laranja', 'celula-laranja', 'celula-vermelho', 'celula-vermelho', 'celula-vermelho'];
    } else if (score < 60) {
        cores = ['celula-azul', 'celula-laranja', 'celula-laranja', 'celula-laranja', 'celula-laranja', 'celula-laranja', 'celula-vermelho', 'celula-vermelho', 'celula-vermelho'];
    } else if (score < 90) {
        cores = ['celula-azul', 'celula-laranja', 'celula-laranja', 'celula-laranja', 'celula-laranja', 'celula-vermelho', 'celula-vermelho', 'celula-vermelho', 'celula-vermelho'];
    } else {
        cores = ['celula-azul', 'celula-laranja', 'celula-laranja', 'celula-laranja', 'celula-vermelho', 'celula-vermelho', 'celula-vermelho', 'celula-vermelho', 'celula-vermelho'];
    }

    const coresEmbaralhadas = embaralhar(cores);
    const celulas = document.querySelectorAll('.celula');

    celulas.forEach((celula, index) => {
        celula.classList.add(coresEmbaralhadas[index]);
    });
}

function reatribuirCoresTabuleiro() {
    // Remove as cores atuais das células
    const celulas = document.querySelectorAll('.celula');
    celulas.forEach(celula => {
        celula.classList.remove('celula-vermelho', 'celula-laranja', 'celula-azul');
    });

    // Atribui novas cores às células
    atribuirCoresTabuleiro();
}

