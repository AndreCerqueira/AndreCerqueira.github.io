var csvData = `Copies;Nickname;Background;Name;Name style;Effect;Effect style;Type;Image;Energy Value;Coin Value;Attack Value;Defense Value;Rarity;Tribe Zone;Tribe Text
1;;;Aerith;;{keyword:Choose one:} Gain {Text-Icons/attack.png}{Text-Icons/attack.png}{Text-Icons/attack.png} and {Text-Icons/defense.png}{Text-Icons/defense.png}{Text-Icons/defense.png} {keyword:or} die and grant its stats to an adjacent ally.;;Layouts/defensive.png;Characters/1-Aerith.png;Numbers/1.png;Numbers/4.png;Numbers/3.png;Numbers/3.png;Rarities/legendary.png;;
1;;;Akame;;{keyword:On death:} Kill all enemies in adjacent areas.;;Layouts/offensive.png;Characters/2-Akame.png;Numbers/2.png;Numbers/3.png;Numbers/3.png;Numbers/3.png;Rarities/legendary.png;;
1;;;Amanda;;Allies in the same column gain {Text-Icons/attack-temp.png}.;;Layouts/defensive.png;Characters/3-Amanda.png;Numbers/2.png;Numbers/0.png;Numbers/1.png;Numbers/1.png;Rarities/rare.png;;
1;;;Arboredo;;{keyword:On entering:} Can move.;;Layouts/neutral.png;Characters/4-Arboredo.png;Numbers/1.png;Numbers/1.png;Numbers/3.png;Numbers/1.png;Rarities/rare.png;;
1;;;Bela Ciao;;{keyword:In Center:} Gain {Text-Icons/energy.png}{Text-Icons/energy.png} at the start of your turn.;;Layouts/neutral.png;Characters/5-BelaCiao.png;Numbers/1.png;Numbers/1.png;Numbers/0.png;Numbers/2.png;Rarities/epic.png;;
1;;;Danger;;{keyword:In Center:} Gain {Text-Icons/coin.png} at the end of your turn.;;Layouts/neutral.png;Characters/6-Danger.png;Numbers/2.png;Numbers/1.png;Numbers/1.png;Numbers/3.png;Rarities/epic.png;Tribes/neutral-tribe.png;Pirate
1;;;Bibian;;{keyword:On entering:} Grants {Text-Icons/defense.png} to the ally in the front area.;;Layouts/neutral.png;Characters/7-Bibian.png;Numbers/0.png;Numbers/1.png;Numbers/1.png;Numbers/1.png;Rarities/common.png;;
1;;;Byorn;;{keyword: On killing:} During your turn, avoid damage.;;Layouts/neutral.png;Characters/8-Byorn.png;Numbers/3.png;Numbers/1.png;Numbers/3.png;Numbers/1.png;Rarities/rare.png;;
1;;;Zazel;;{keyword:On entering:} Summons 4 test subjects, in any other area on the same row.;;Layouts/offensive.png;Characters/9-Zazel.png;Numbers/0.png;Numbers/4.png;Numbers/3.png;Numbers/3.png;Rarities/legendary.png;;
1;;;Test Subject;;{keyword:Vanish.} {keyword:On entering an area:} Merge with test subjects in the same area.;;Layouts/offensive.png;Characters/10-Cobaia.png;Numbers/0.png;Numbers/0.png;Numbers/1.png;Numbers/1.png;;Tribes/offensive-tribe.png;Undead
1;;;Diggy Jones;;{keyword:On death:} Steals {Text-Icons/coin.png} from the opponent.;;Layouts/offensive.png;Characters/12-DiggyJones.png;Numbers/0.png;Numbers/1.png;Numbers/1.png;Numbers/1.png;Rarities/rare.png;;
1;;;The Fallen One;{fontSize:11px};{keyword:Choose a valid spawning area.} Choose and summon a character from the graveyard pile.;;Layouts/spell.png;Characters/13-Fallen.png;Numbers/3.png;Numbers/0.png;;;Rarities/legendary.png;Tribes/spell-tribe.png;Curse
1;;;Fungoat;;{keyword: On attack:} Push the enemy to an area in front.;;Layouts/offensive.png;Characters/14-Fungoat.png;Numbers/1.png;Numbers/1.png;Numbers/1.png;Numbers/4.png;Rarities/epic.png;Tribes/offensive-tribe.png;Beast
1;;;Jean François;{fontSize:11px};After another Pirate attacks, this card gains {Text-Icons/defense.png}.;;Layouts/defensive.png;Characters/15-Jean.png;Numbers/2.png;Numbers/1.png;Numbers/2.png;Numbers/2.png;Rarities/rare.png;Tribes/defensive-tribe.png;Pirate
1;;;John Matalho;;Does not lose health from the first damage taken.;;Layouts/offensive.png;Characters/16-JohnMatalho.png;Numbers/2.png;Numbers/0.png;Numbers/1.png;Numbers/1.png;Rarities/common.png;;
1;;;Lírio;;Enemies on entering na adjacent area fight this character first.;;Layouts/defensive.png;Characters/17-Lirio.png;Numbers/3.png;Numbers/3.png;Numbers/3.png;Numbers/5.png;Rarities/rare.png;;
1;;;Malicatus;;{keyword: On killing:} If it survives, gain {Text-Icons/defense.png}.;;Layouts/offensive.png;Characters/18-Malicatus.png;Numbers/2.png;Numbers/3.png;Numbers/3.png;Numbers/4.png;Rarities/epic.png;Tribes/offensive-tribe.png;Undead
1;;;Marco;;Enemies on entering the front area take damage equal to this attack first.;;Layouts/neutral.png;Characters/19-Marco_The_Pirate.png;Numbers/2.png;Numbers/0.png;Numbers/1.png;Numbers/1.png;Rarities/rare.png;Tribes/neutral-tribe.png;Pirate
1;;;Mia;;It has attack equal to the character with the most attack in the area.;;Layouts/defensive.png;Characters/21-Mia.png;Numbers/1.png;Numbers/2.png;Numbers/1.png;Numbers/3.png;Rarities/common.png;;
1;;;Luemas;;{keyword:On entering:} Choose a castle. Gain {Text-Icons/defense.png} for each enemy in its castle and villages.;;Layouts/offensive.png;Characters/22-Luemas.png;Numbers/1.png;Numbers/2.png;Numbers/3.png;Numbers/1.png;Rarities/rare.png;;
1;;;Violence;;{keyword:Choose an ally.} Whenever he attacks, gain {Text-Icons/attack.png} at the end.;;Layouts/spell.png;Characters/24-violence.png;Numbers/1.png;Numbers/1.png;;;Rarities/common.png;Tribes/spell-tribe.png;Curse
1;;;Peter Matalho;{fontSize:11px};{keyword:Invest} {Text-Icons/coin.png}{keyword::} Swaps positions with a character.;;Layouts/defensive.png;Characters/25-Peter_matalho.png;Numbers/2.png;Numbers/2.png;Numbers/1.png;Numbers/2.png;Rarities/epic.png;;
1;;;Raul;;{keyword:On entering:} Gain {Text-Icons/coin.png}.;;Layouts/neutral.png;Characters/26-Raul.png;Numbers/1.png;Numbers/0.png;Numbers/1.png;Numbers/1.png;Rarities/rare.png;;
1;;;Robert;;{keyword:On death:} Deals 2 damage to all adjacent enemies.;;Layouts/offensive.png;Characters/27-Robert.png;Numbers/2.png;Numbers/2.png;Numbers/2.png;Numbers/2.png;Rarities/rare.png;;
1;;;Ruby;;{keyword:On entering:} Grants {Text-Icons/defense.png}{Text-Icons/defense.png} to an adjacent character. If it has only one {Text-Icons/defense.png}, Grant it twice.;;Layouts/defensive.png;Characters/28-Ruby.png;Numbers/2.png;Numbers/2.png;Numbers/2.png;Numbers/2.png;Rarities/epic.png;;
1;;;Roshi;;The next ally summoned is hidden until it attacks, takes damage or use its effect.;;Layouts/neutral.png;Characters/29-Roshi.png;Numbers/2.png;Numbers/1.png;Numbers/2.png;Numbers/3.png;Rarities/rare.png;;
1;;;Santana;;Can only move forward.;;Layouts/neutral-onlyForward.png;Characters/30-Santana.png;Numbers/3.png;Numbers/2.png;Numbers/3.png;Numbers/6.png;Rarities/common.png;;
1;;;Shield Up;;{keyword:Choose a character.} He gains {Text-Icons/defense.png}{Text-Icons/defense.png}.;;Layouts/spell.png;Characters/31-ShieldUp.png;Numbers/2.png;Numbers/1.png;;;Rarities/rare.png;Tribes/spell-tribe.png;Sacred
1;;;Solown;;{keyword:On entering:} Grants {Text-Icons/attack.png}{Text-Icons/attack.png} to an adjacent character.;;Layouts/neutral.png;Characters/32-Solown.png;Numbers/1.png;Numbers/1.png;Numbers/2.png;Numbers/1.png;Rarities/rare.png;;
1;;;Vengeful Block;{fontSize:10px};{keyword:Choose a character.} This turn, the first lethal damage reduces it to 1 Health instead of dying.;;Layouts/spell.png;Characters/34-VengefullBlock.png;Numbers/2.png;Numbers/3.png;;;Rarities/epic.png;;
1;;;Yasmin;;{keyword: On entering:} Grants {Text-Icons/attack.png} to all other allies in the row.;;Layouts/defensive.png;Characters/35-Yasmin.png;Numbers/2.png;Numbers/1.png;Numbers/1.png;Numbers/3.png;Rarities/rare.png;;
1;;;Energy;;{keyword:Vanish.} {keyword:Cannot be reshuffled.}Gain {Text-Icons/energy.png}.;;Layouts/spell.png;Characters/37-Energy.png;;;;;;;
1;;;Jasmin;;{keyword:At the end of your turn:} Moves one area backward.;;Layouts/defensive.png;Characters/39-Jasmin.png;Numbers/3.png;Numbers/0.png;Numbers/4.png;Numbers/1.png;Rarities/common.png;Tribes/defensive-tribe.png;Elemental
1;;;Triagle;;{keyword:On killing:} Steals {Text-Icons/coin.png} from the opponent.;;Layouts/offensive.png;Characters/41-Triagle.png;Numbers/1.png;Numbers/2.png;Numbers/3.png;Numbers/3.png;Rarities/epic.png;Tribes/offensive-tribe.png;Beast
1;;;Pinho;;{keyword:In Center:} Other allied Beasts gain {Text-Icons/attack-temp.png}.;;Layouts/defensive.png;Characters/42-Pinho.png;Numbers/2.png;Numbers/0.png;Numbers/1.png;Numbers/1.png;Rarities/common.png;Tribes/defensive-tribe.png;Beast
1;;;Pum;;Gain {Text-Icons/attack-temp.png}{Text-Icons/attack-temp.png} if there is at least one beast in the column.;;Layouts/offensive.png;Characters/43-Pum.png;Numbers/3.png;;Numbers/2.png;Numbers/2.png;Rarities/common.png;Tribes/offensive-tribe.png;Beast
1;;;Blue Slime;;{keyword:On entering:} Summon a green slime in the front area.;;Layouts/neutral.png;Characters/44-Blue_slime.png;Numbers/2.png;Numbers/0.png;Numbers/1.png;Numbers/1.png;Rarities/common.png;;
1;;;Green Slime;;;;Layouts/neutral.png;Characters/45-Green_slime.png;Numbers/0.png;Numbers/0.png;Numbers/1.png;Numbers/1.png;;;
1;;;Call to arms;;{keyword:Choose a character.} He gains {Text-Icons/attack.png}.;;Layouts/spell.png;Characters/47-Call_to_arms.png;Numbers/1.png;Numbers/0.png;;;Rarities/rare.png;;
1;;;Vespula Hive;{fontSize:11px};{keyword:On death:} Summon a Vespula in the area.;;Layouts/defensive.png;Characters/71-Vespula_Hive.png;Numbers/2.png;Numbers/2.png;Numbers/1.png;Numbers/3.png;Rarities/rare.png;;
1;;;Vespula;;{keyword:Vanish.};;Layouts/offensive.png;Characters/46-Vespula.png;Numbers/0.png;Numbers/0.png;Numbers/3.png;Numbers/1.png;;Tribes/offensive-tribe.png;Beast
1;;;Ant;;{keyword:On summoning a Beast:} This card is summoned from the hand to the front area for free.;;Layouts/offensive.png;Characters/49-ant.png;Numbers/2.png;Numbers/0.png;Numbers/1.png;Numbers/1.png;Rarities/common.png;Tribes/offensive-tribe.png;Beast
1;;;Vultus;;{keyword:In Center:} Elementals cost {Text-Icons/energy.png}{Text-Icons/energy.png} less.;;Layouts/defensive.png;Characters/50-Vultus.png;Numbers/2.png;;Numbers/2.png;Numbers/2.png;Rarities/epic.png;Tribes/defensive-tribe.png;Elemental
1;;;Treasure;;Gain {Text-Icons/coin.png}{Text-Icons/coin.png}. {keyword:Pirate Combo:} Gain {Text-Icons/coin.png}.;;Layouts/spell.png;Characters/52-Treasure.png;Numbers/2.png;Numbers/0.png;;;Rarities/epic.png;;
1;;;Thunder Teach;{fontSize:11px};{keyword:Choose a central area.} Summon a tempest there.;;Layouts/neutral.png;Characters/53-Thunder_teach.png;Numbers/3.png;Numbers/4.png;Numbers/3.png;Numbers/5.png;Rarities/legendary.png;Tribes/neutral-tribe.png;Pirate
1;;;Tempest;;{keyword:Vanish.};;Layouts/neutral.png;Characters/54-Thunder.png;Numbers/0.png;Numbers/0.png;Numbers/5.png;Numbers/3.png;;Tribes/neutral-tribe.png;Elemental
1;;;Teves;;{keyword:On entering:} Gains {Text-Icons/attack.png}{Text-Icons/attack.png} if another Pirate is adjacent.;;Layouts/offensive.png;Characters/55-Teves.png;Numbers/1.png;Numbers/1.png;Numbers/1.png;Numbers/2.png;Rarities/common.png;Tribes/offensive-tribe.png;Pirate
1;;;Vitorius;;{keyword:In Center &} {keyword:Invest} {Text-Icons/coin.png}{keyword::} All allied Pirates gain {Text-Icons/attack-temp.png}{Text-Icons/attack-temp.png} for 1 round or until he dies.;{top:238px};Layouts/defensive.png;Characters/56-Victorius.png;Numbers/2.png;Numbers/2.png;Numbers/1.png;Numbers/4.png;Rarities/common.png;Tribes/defensive-tribe.png;Pirate
1;;;Diogones;;{keyword:At the start of the turn:} If this is the only character in the row and column gain {Text-Icons/coin.png}.;;Layouts/neutral.png;Characters/57-Diogones.png;Numbers/1.png;Numbers/0.png;Numbers/1.png;Numbers/1.png;Rarities/rare.png;Tribes/neutral-tribe.png;Pirate
1;;;Billy;;{keyword:Pirate Combo:} Gains {Text-Icons/attack.png} and {Text-Icons/defense.png}.;;Layouts/defensive.png;Characters/58-Billy.png;Numbers/0.png;Numbers/1.png;Numbers/2.png;Numbers/1.png;Rarities/common.png;Tribes/defensive-tribe.png;Pirate
1;;;Recruit;;{keyword:Invest} {Text-Icons/coin.png}{keyword::} Gains {Text-Icons/attack.png}. Can invest multiple times per turn.;;Layouts/neutral.png;Characters/60-Recruit.png;Numbers/3.png;Numbers/0.png;Numbers/1.png;Numbers/3.png;Rarities/common.png;Tribes/neutral-tribe.png;Pirate
1;;;Skeleton;;{keyword:On death:} Replace this with a remains.;;Layouts/offensive.png;Characters/62-Skeleton.png;Numbers/2.png;Numbers/0.png;Numbers/1.png;Numbers/1.png;Rarities/common.png;Tribes/offensive-tribe.png;Undead
1;;;Samuel Roshvire;{fontSize:9px};{keyword:Invest} {Text-Icons/coin.png}{Text-Icons/coin.png}{Text-Icons/coin.png}{keyword::} This turn, instead of attacking, the first enemy faced dies, and its stats are stolen.;;Layouts/defensive.png;Characters/63-Roshvire.png;Numbers/0.png;Numbers/3.png;Numbers/3.png;Numbers/2.png;Rarities/legendary.png;;
1;;;Conversion;;Transforms a character into an Undead. If already Undead, it gains {Text-Icons/attack.png} and {Text-Icons/defense.png}.;;Layouts/spell.png;Characters/64-Conversion.png;Numbers/0.png;Numbers/1.png;;;Rarities/rare.png;Tribes/spell-tribe.png;Curse
1;;;Snapper;;{keyword:Undead Combo:} Summon a remains in the front area.;;Layouts/neutral.png;Characters/66-Snapper.png;Numbers/1.png;Numbers/1.png;Numbers/1.png;Numbers/4.png;Rarities/rare.png;Tribes/neutral-tribe.png;Undead
1;;;Ardas;;{keyword:When an Undead dies: } Gain {Text-Icons/attack.png};;Layouts/neutral.png;Characters/67-Ardas.png;Numbers/1.png;Numbers/1.png;Numbers/1.png;Numbers/3.png;Rarities/common.png;;
1;;;Drowned;;{keyword:On a coastal area:} Gain {Text-Icons/attack-temp.png}{Text-Icons/attack-temp.png}. Can only be summoned in a coastal area.;;Layouts/offensive.png;Characters/68-Afogado.png;Numbers/3.png;Numbers/0.png;Numbers/1.png;Numbers/2.png;Rarities/common.png;Tribes/offensive-tribe.png;Undead
1;;;Leper Zombie;{fontSize:11px};{keyword:Start of your turn:} Take 1 damage.;;Layouts/offensive.png;Characters/69-Leproso.png;Numbers/3.png;Numbers/0.png;Numbers/4.png;Numbers/2.png;Rarities/common.png;Tribes/offensive-tribe.png;Undead
1;;;Remains;;{keyword:Vanish.};;Layouts/neutral.png;Characters/70-Remains.png;Numbers/0.png;Numbers/0.png;Numbers/1.png;Numbers/1.png;;Tribes/neutral-tribe.png;Undead
1;;;Aloísio;;{keyword:Invest} {Text-Icons/coin.png}{keyword::} Return itself and then an adjacent ally to the top of the deck.;;Layouts/neutral.png;Characters/71-Aloisio.png;Numbers/0.png;Numbers/2.png;Numbers/3.png;Numbers/1.png;Rarities/epic.png;Tribes/neutral-tribe.png;Beast
1;;;Julius;;{keyword:Vanish.} {keyword:On death:} Add Brutus to the bottom of the deck.;;Layouts/neutral.png;Characters/72-Julius.png;Numbers/0.png;Numbers/1.png;Numbers/1.png;Numbers/1.png;Rarities/epic.png;;
1;;;Brutus;;{keyword:Vanish.} {keyword:On death:} Add Maximus to the graveyard.;;Layouts/defensive.png;Characters/73-Brutus.png;Numbers/0.png;Numbers/2.png;Numbers/2.png;Numbers/2.png;;;
1;;;Maximus;;{keyword:On death:} Return itself to the top of the deck.;;Layouts/offensive.png;Characters/74-Maximus.png;Numbers/0.png;Numbers/3.png;Numbers/4.png;Numbers/4.png;;;
1;;;Conversion;;Transforms a character into an Undead. If already Undead; it gains {Text-Icons/attack.png} and {Text-Icons/defense.png}.;;Layouts/spell.png;Characters/64-Conversion.png;Numbers/0.png;Numbers/1.png;;;Rarities/epic.png;Tribes/spell-tribe.png;Curse
1;;;Purification;{fontSize:11px};Destroy an undead.;;Layouts/spell.png;Characters/65-Purification.png;Numbers/1.png;Numbers/0.png;;;Rarities/rare.png;Tribes/spell-tribe.png;Sacred
1;;;Snapper;;{keyword:Undead Combo:} Summon a remains in the front area.;;Layouts/neutral.png;Characters/66-Snapper.png;Numbers/1.png;Numbers/1.png;Numbers/1.png;Numbers/4.png;;Tribes/neutral-tribe.png;Undead
1;;;Ardas;;{keyword:In center:} When an Undead ally dies; it deals 1 damage to the castle. (Max 3);;Layouts/neutral.png;Characters/67-Ardas.png;Numbers/3.png;Numbers/0.png;Numbers/1.png;Numbers/2.png;Rarities/rare.png;;
1;;;Drowned;;{keyword:Maritime.};;Layouts/offensive.png;Characters/68-Afogado.png;Numbers/3.png;Numbers/0.png;Numbers/2.png;Numbers/3.png;Rarities/common.png;Tribes/offensive-tribe.png;Undead
1;;;Leper Zombie;{fontSize:11px};{keyword:Start of your turn:} Take 1 damage.;;Layouts/offensive.png;Characters/69-Leproso.png;Numbers/3.png;Numbers/0.png;Numbers/4.png;Numbers/2.png;Rarities/common.png;Tribes/offensive-tribe.png;Undead
1;;;Remains;;;;Layouts/neutral.png;Characters/70-Remains.png;Numbers/0.png;Numbers/0.png;Numbers/1.png;Numbers/1.png;;Tribes/neutral-tribe.png;Undead`;

var cardList = [];

$(document).ready(function() {
    // Processar os dados CSV
    processData(csvData);

    // Número total de cartas
    const totalCards = cardList.length;

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


