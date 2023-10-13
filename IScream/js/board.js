
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

function obterCoresBaseadasNaPontuacao() {
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

    return cores;
}

function atribuirCoresTabuleiro() {
    const cores = obterCoresBaseadasNaPontuacao();
    const coresEmbaralhadas = embaralhar(cores);
    const celulas = document.querySelectorAll('.celula');

    celulas.forEach((celula, index) => {
        celula.classList.add(coresEmbaralhadas[index]);
    });
}

function mudarCorDasOutrasCelulas(celulaAtual) {
    let cores = obterCoresBaseadasNaPontuacao();

    // Remover a cor da célula atual do array de cores
    const corAtual = celulaAtual.classList.contains('celula-azul') ? 'celula-azul' :
                     celulaAtual.classList.contains('celula-laranja') ? 'celula-laranja' : 'celula-vermelho';
    const index = cores.indexOf(corAtual);
    if (index > -1) {
        cores.splice(index, 1);
    }

    const coresEmbaralhadas = embaralhar(cores);
    const celulas = document.querySelectorAll('.celula');

    let i = 0; // Índice para coresEmbaralhadas
    celulas.forEach(celula => {
        if (celula !== celulaAtual) {
            celula.classList.remove('celula-azul', 'celula-laranja', 'celula-vermelho');
            celula.classList.add(coresEmbaralhadas[i]);
            i++;
        }
    });
}

// function tudo azul
function forcarTudoAzul() {
    const celulas = document.querySelectorAll('.celula');
    celulas.forEach(celula => {
        celula.classList.remove('celula-vermelho', 'celula-laranja');
        celula.classList.add('celula-azul');
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

