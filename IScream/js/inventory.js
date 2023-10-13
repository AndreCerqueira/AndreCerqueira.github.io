let inventario = [null, null, null];
const inventarioElement = document.getElementById('inventario');


// Criar slots de inventário
for (let i = 0; i < 3; i++) {
    const slot = document.createElement('div');
    slot.className = 'slot';
    slot.id = 'slot' + (i + 1);

    // Adicionar um número ao slot
    const number = document.createElement('div');
    number.className = 'slot-number';
    number.innerText = i + 1;
    slot.appendChild(number);

    const item = document.createElement('img');
    slot.appendChild(item);

    // Adicionar div bloqueada a cada slot
    const divBloqueado = document.createElement('div');
    divBloqueado.className = 'bloqueado inativo';
    slot.appendChild(divBloqueado);

    inventarioElement.appendChild(slot);
}

document.addEventListener('keydown', (event) => {
    if (!jogoIniciado || tempoRestante <= 0) return;

    switch(event.key) {
        case '1':
            removeFromInventario(0);
            break;
        case '2':
            removeFromInventario(1);
            break;
        case '3':
            removeFromInventario(2);
            break;
        default:
            return;
    }
});

function catchPowerUp(powerUp, cell) {
    const slotVazio = inventario.indexOf(null);

    if (slotVazio !== -1) {
        const imageUrl = powerUp.style.backgroundImage.slice(5, -2);
        inventario[slotVazio] = imageUrl;
        updateInventario();
    }

    cell.removeChild(powerUp);
}

function updateInventario() {
    
    for (let i = 0; i < inventario.length; i++) {
        const slot = document.getElementById('slot' + (i + 1));
        const item = slot.querySelector('img');
        const slotNumber = slot.querySelector('.slot-number');
        const bloqueado = slot.querySelector('.bloqueado');
        

        if (inventario[i]) {
            item.src = inventario[i]; 

            if (inventario[i].includes('pedrinha')) {
                bloqueado.classList.remove('inativo');
                slotNumber.style.display = 'none';
            }
            else {
                bloqueado.classList.add('inativo');
                slotNumber.style.display = 'block';
            }

        } else {
            item.src = '';
            bloqueado.classList.add('inativo');
            slotNumber.style.display = 'block';
        }
    }
}

function removeFromInventario(slot) {
    if (inventario[slot] && inventario[slot].includes('pedrinha')) return;

    if (inventario[slot] && inventario[slot].includes('gelinho'))
        triggerGelinhoPowerUp();

    if (inventario[slot] && inventario[slot].includes('conezinho'))
        triggerConezinhoPowerUp();

    inventario[slot] = null;
    updateInventario();
}

function clearAllInventorySlots(){
    inventario = [null, null, null];
    updateInventario();
}
