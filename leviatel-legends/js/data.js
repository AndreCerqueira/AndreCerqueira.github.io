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

const areasInfo = {
    1: { id: 1, nome: "Ocean", descricao: "Upon entering, the character restores its movement, allowing it to move up to two more times this turn. The character can also teleport to another ocean in a valid direction, but only once per turn." },
    2: { id: 2, nome: "Coast", descricao: "" },
    3: { id: 3, nome: "Village", descricao: "You can summon allies from your hand. If an ally is alone in this enemy area, during your turn, it deals damage equal to its attack. It can only deal damage once per turn." },
    4: { id: 4, nome: "Castle", descricao: "You can summon allies from your hand. If an ally is alone in this enemy area, during your turn, it deals damage equal to its attack. It can only deal damage once per turn." },
    5: { id: 5, nome: "Village", descricao: "You can summon allies from your hand. If an ally is alone in this enemy area, during your turn, it deals damage equal to its attack. It can only deal damage once per turn." },
    6: { id: 6, nome: "Coast", descricao: "" },
    7: { id: 7, nome: "Ocean", descricao: "Upon entering, the character restores its movement, allowing it to move up to two more times this turn. The character can also teleport to another ocean in a valid direction, but only once per turn." },
    8: { id: 8, nome: "Coast", descricao: "" },
    9: { id: 9, nome: "Forest", descricao: "" },
    10: { id: 10, nome: "Forest", descricao: "" },
    11: { id: 11, nome: "Forest", descricao: "" },
    12: { id: 12, nome: "Forest", descricao: "" },
    13: { id: 13, nome: "Forest", descricao: "" },
    14: { id: 14, nome: "Coast", descricao: "" },
    15: { id: 15, nome: "Village", descricao: "You can summon allies from your hand. If an ally is alone in this enemy area, during your turn, it deals damage equal to its attack. It can only deal damage once per turn." },
    16: { id: 16, nome: "Forest", descricao: "" },
    17: { id: 17, nome: "Center", descricao: "" },
    18: { id: 18, nome: "Center", descricao: "" },
    19: { id: 19, nome: "Center", descricao: "" },
    20: { id: 20, nome: "Forest", descricao: "" },
    21: { id: 21, nome: "Village", descricao: "You can summon allies from your hand. If an ally is alone in this enemy area, during your turn, it deals damage equal to its attack. It can only deal damage once per turn." },
    22: { id: 22, nome: "Castle", descricao: "You can summon allies from your hand. If an ally is alone in this enemy area, during your turn, it deals damage equal to its attack. It can only deal damage once per turn." },
    23: { id: 23, nome: "Forest", descricao: "" },
    24: { id: 24, nome: "Center", descricao: "" },
    25: { id: 25, nome: "Core", descricao: "At the end of the turn, if you have an ally in this area, deal 1 damage to all players." },
    26: { id: 26, nome: "Center", descricao: "" },
    27: { id: 27, nome: "Forest", descricao: "" },
    28: { id: 28, nome: "Castle", descricao: "You can summon allies from your hand. If an ally is alone in this enemy area, during your turn, it deals damage equal to its attack. It can only deal damage once per turn." },
    29: { id: 29, nome: "Village", descricao: "You can summon allies from your hand. If an ally is alone in this enemy area, during your turn, it deals damage equal to its attack. It can only deal damage once per turn." },
    30: { id: 30, nome: "Forest", descricao: "" },
    31: { id: 31, nome: "Center", descricao: "" },
    32: { id: 32, nome: "Center", descricao: "" },
    33: { id: 33, nome: "Center", descricao: "" },
    34: { id: 34, nome: "Forest", descricao: "" },
    35: { id: 35, nome: "Village", descricao: "You can summon allies from your hand. If an ally is alone in this enemy area, during your turn, it deals damage equal to its attack. It can only deal damage once per turn." },
    36: { id: 36, nome: "Coast", descricao: "" },
    37: { id: 37, nome: "Forest", descricao: "" },
    38: { id: 38, nome: "Forest", descricao: "" },
    39: { id: 39, nome: "Forest", descricao: "" },
    40: { id: 40, nome: "Forest", descricao: "" },
    41: { id: 41, nome: "Forest", descricao: "" },
    42: { id: 42, nome: "Coast", descricao: "" },
    43: { id: 43, nome: "Ocean", descricao: "Upon entering, the character restores its movement, allowing it to move up to two more times this turn. The character can also teleport to another ocean in a valid direction, but only once per turn." },
    44: { id: 44, nome: "Coast", descricao: "" },
    45: { id: 45, nome: "Village", descricao: "You can summon allies from your hand. If an ally is alone in this enemy area, during your turn, it deals damage equal to its attack. It can only deal damage once per turn." },
    46: { id: 46, nome: "Castle", descricao: "You can summon allies from your hand. If an ally is alone in this enemy area, during your turn, it deals damage equal to its attack. It can only deal damage once per turn." },
    47: { id: 47, nome: "Village", descricao: "You can summon allies from your hand. If an ally is alone in this enemy area, during your turn, it deals damage equal to its attack. It can only deal damage once per turn." },
    48: { id: 48, nome: "Coast", descricao: "" },
    49: { id: 49, nome: "Ocean", descricao: "Upon entering, the character restores its movement, allowing it to move up to two more times this turn. The character can also teleport to another ocean in a valid direction, but only once per turn." },
    50: { id: 50, nome: "Fort", descricao: "If is controlled, the player can trade {Text-Icons/energy.png} for {Text-Icons/attack.png}, once per turn." },
    51: { id: 51, nome: "Gold Mine", descricao: "If is controlled, the player can trade {Text-Icons/energy.png} for {Text-Icons/coin.png}, once per turn." },
    52: { id: 52, nome: "Catapult", descricao: "A character in the Catapult Area can be launched forward in this column, paying 1 {Text-Icons/energy.png} per area traveled. If an enemy is in the path, the character stops there." },
    53: { id: 53, nome: "Portal", descricao: "A character in the Portal Area can pay {Text-Icons/energy.png} to move to another Portal or to the Core Area." },
    54: { id: 54, nome: "Extra Village", descricao: "You can summon allies from your hand. If an ally is alone in this enemy area, during your turn, it deals damage equal to its attack. It can only deal damage once per turn." }
};

const deckData = {
    "decks": [
      {
        "name": "Beast Deck",
        "difficulty": 1,
        "cards": [
          { "id": "00", "rarity": "legendary", "name": "Aerith", "copies": 1 },
          { "id": "12", "rarity": "epic", "name": "Fungoat", "copies": 2 },
          { "id": "33", "rarity": "epic", "name": "Triagle", "copies": 1 },
          { "id": "39", "rarity": "rare", "name": "Vespula Hive", "copies": 1 },
          { "id": "28", "rarity": "rare", "name": "Solown", "copies": 1 },
          { "id": "25", "rarity": "rare", "name": "Roshi", "copies": 1 },
          { "id": "02", "rarity": "rare", "name": "Amanda", "copies": 1 },
          { "id": "27", "rarity": "rare", "name": "Shield Up", "copies": 1 },
          { "id": "34", "rarity": "common", "name": "Pinho", "copies": 2 },
          { "id": "35", "rarity": "common", "name": "Pum", "copies": 2 },
          { "id": "41", "rarity": "common", "name": "Ant", "copies": 2 }
        ]
      },
      {
        "name": "Pirate Deck",
        "difficulty": 2,
        "cards": [
            { "id": "44", "rarity": "legendary", "name": "Thunder Teach", "copies": 1 },
            { "id": "05", "rarity": "epic", "name": "Danger", "copies": 2 },
            { "id": "43", "rarity": "epic", "name": "Treasure", "copies": 1 },
            { "id": "13", "rarity": "rare", "name": "Jean François", "copies": 2 },
            { "id": "48", "rarity": "rare", "name": "Diogones", "copies": 1 },
            { "id": "38", "rarity": "rare", "name": "Call to arms", "copies": 1 },
            { "id": "17", "rarity": "rare", "name": "Marco", "copies": 1 },
            { "id": "49", "rarity": "common", "name": "Billy", "copies": 2 },
            { "id": "46", "rarity": "common", "name": "Teves", "copies": 2 },
            { "id": "47", "rarity": "common", "name": "Vitorius", "copies": 1 },
            { "id": "50", "rarity": "common", "name": "Recruit", "copies": 1 }
        ]
      },
      {
        "name": "Undead Deck",
        "difficulty": 3,
        "cards": [
            { "id": "08", "rarity": "legendary", "name": "Zazel", "copies": 1 },
            { "id": "59", "rarity": "epic", "name": "Aloísio", "copies": 1 },
            { "id": "24", "rarity": "epic", "name": "Ruby", "copies": 1 },
            { "id": "04", "rarity": "epic", "name": "Bela Ciao", "copies": 1 },
            { "id": "54", "rarity": "rare", "name": "Snapper", "copies": 2 },
            { "id": "53", "rarity": "rare", "name": "Conversion", "copies": 1 },
            { "id": "28", "rarity": "rare", "name": "Solown", "copies": 1 },
            { "id": "30", "rarity": "rare", "name": "Yasmin", "copies": 1 },
            { "id": "56", "rarity": "common", "name": "Drowned", "copies": 1 },
            { "id": "57", "rarity": "common", "name": "Leper Zombie", "copies": 2 },
            { "id": "51", "rarity": "common", "name": "Skeleton", "copies": 2 },
            { "id": "55", "rarity": "common", "name": "Ardas", "copies": 1 },
        ]
      },
      {
        "name": "Maximus Control Deck",
        "difficulty": 4,
        "cards": [
            { "id": "11", "rarity": "legendary", "name": "The Fallen One", "copies": 1 },
          { "id": "60", "rarity": "epic", "name": "Julius", "copies": 1 },
          { "id": "05", "rarity": "epic", "name": "Danger", "copies": 2 },
          { "id": "21", "rarity": "epic", "name": "Peter Matalho", "copies": 1 },
          { "id": "22", "rarity": "rare", "name": "Raul", "copies": 2 },
          { "id": "07", "rarity": "rare", "name": "Byorn", "copies": 1 },
          { "id": "38", "rarity": "rare", "name": "Call to arms", "copies": 1 },
          { "id": "10", "rarity": "rare", "name": "Diggy Jones", "copies": 1 },
          { "id": "14", "rarity": "common", "name": "John Matalho", "copies": 2 },
          { "id": "18", "rarity": "common", "name": "Mia", "copies": 1 },
          { "id": "32", "rarity": "common", "name": "Jasmin", "copies": 1 },
          { "id": "26", "rarity": "common", "name": "Santana", "copies": 1 },
        ]
      }
    ]
  }