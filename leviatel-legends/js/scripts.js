var cardList = [];

window.onload = function() {
    fetchCSV();
};

$(document).ready(function() {
    // Número total de cartas
    const totalCards = 70;

    // Container onde as cartas serão adicionadas
    const cardContainer = document.getElementById('cardContainer');

    // Loop para adicionar todas as cartas
    for (let i = 0; i < totalCards; i++) {
        // Formata o número da carta com zero à esquerda se for menor que 10
        const cardNumber = (i < 10) ? `0${i}` : `${i}`;

        // Cria um elemento de imagem para cada carta
        const cardImg = document.createElement('img');
        cardImg.src = `assets/Card-Images/${cardNumber}.png`; // Caminho da imagem da carta

        // Adiciona classes Bootstrap para estilização
        cardImg.classList.add('img-fluid', 'mx-auto', 'card-img', 'hover-zoom', 'clickable'); // Adiciona a classe 'hover-zoom' para efeito de zoom e 'clickable' para indicar que é clicável

        // Cria uma div para cada carta e adiciona a imagem dentro dela
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col', 'text-center', 'mt-4', 'card-item'); // Adiciona a classe 'card-item' para espaçamento vertical
        cardDiv.appendChild(cardImg);

        // Adiciona evento de clique para abrir detalhes da carta (a ser implementado)
        cardImg.addEventListener('click', function() {
            // Aqui você pode adicionar a lógica para abrir detalhes da carta, como um modal
            abreModal(cardNumber, i);
            console.log(`Clicou na carta ${cardNumber}`);
        });

        // Verifica se é o primeiro elemento da linha e cria uma nova linha se necessário
        if (i % 5 === 0) {
            const row = document.createElement('div');
            row.classList.add('row');
            cardContainer.appendChild(row);
        }

        // Adiciona a div da carta à última linha criada
        cardContainer.lastElementChild.appendChild(cardDiv);
    }
});


// Função para abrir o modal com detalhes da carta
function abreModal(numeroCarta, index) {
    // Aqui você pode implementar a lógica para abrir um modal
    console.log(`Abrir modal da carta ${numeroCarta}`);
    // Exemplo utilizando Bootstrap modal:
    $('#myModal').modal('show');

    // Atualiza imagem modalCardImage
    $('#modalCardImage').attr('src', `assets/Card-Images/${numeroCarta}.png`);
    
    console.log(cardList[index]);
    
    const tribeKey = Object.keys(cardList[index]).pop();
    console.log(cardList[index][tribeKey]);
    
    // get name from cardList
    let cardName = cardList[index]["Name"];
    $('#modalCardName').html('<b>' + cardName+ '</b>');
    $('#modalCardEffect').html(getEffect(cardList[index]["Effect"]));
    $('#type').html('<b>Type: </b><a>' + getType(cardList[index]["Type"]) + '</a>');
    $('#rarity').html('<b>Rarity: </b><a>' + getRarity(cardList[index]["Rarity"]) + '</a>');
    $('#tribe').html('<b>Tribe: </b><a>' + getTribe(cardList[index][tribeKey]) + '</a>');
}


// Função para ler o arquivo CSV
function fetchCSV() {
    fetch('/leviatel-legends/assets/Cards.csv')
        .then(response => response.text())
        .then(data => processData(data));
}

// Função para processar os dados CSV
function processData(csvData) {
    // Dividir o CSV em linhas
    const lines = csvData.split('\n');

    // A primeira linha contém os nomes das colunas
    const headers = lines[0].split(';');

    // Iterar pelas linhas (começando da segunda linha, pois a primeira é o cabeçalho)
    for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i].split(';');

        // Criar um objeto para armazenar os dados do card
        const card = {};
        for (let j = 0; j < headers.length; j++) {
            // Adicionar o valor da coluna ao objeto card
            card[headers[j]] = currentLine[j];
        }

        // Adicionar o card à lista de cards
        cardList.push(card);
    }
}


function getTribe(csvTribe) {
    if (csvTribe == "\r") {
        return "None";
    }
    return csvTribe;
}

function getType(csvType) {
    if (!csvType) {
        return "None";
    }
    
    // csvType = Layouts/neutral.png, type = Neutral
    let newType = csvType.split("/");
    newType = newType[1].split(".");
    newType[0] = newType[0].charAt(0).toUpperCase() + newType[0].slice(1);
    return newType[0];
}


function getRarity(csvRarity) {
    if (!csvRarity) {
        return "Token";
    }
    
    // csvRarity = Layouts/common.png, rarity = Common
    let newRarity = csvRarity.split("/");
    newRarity = newRarity[1].split(".");
    newRarity[0] = newRarity[0].charAt(0).toUpperCase() + newRarity[0].slice(1);
    return newRarity[0];
}


function getEffect(csvEffect) {
    // Highlight keywords
    const keywordRegex = /\{keyword:([^}]+)\}/g;
    const highlightedEffect = csvEffect.replace(keywordRegex, (match, keyword) => {
        return `<span style="color: #DDBE78; font-weight: bold;">${keyword}</span>`;
    });

    // Replace text icons with images
    const iconRegex = /\{Text-Icons\/([^}]+)\}/g;
    const finalEffect = highlightedEffect.replace(iconRegex, (match, iconName) => {
        return `<img src="assets/Text-Icons/${iconName}" alt="${iconName}" style="width: 20px; height: 20px;">`;
    });

    return finalEffect;
}


