

document.addEventListener("DOMContentLoaded", function () {
    const mapGrid = document.getElementById("mapGrid");
    
    // Ajustar a grade para ocupar mais espaço e remover espaçamentos laterais
    mapGrid.style.display = "grid";
    mapGrid.style.gridTemplateColumns = "repeat(7, 1fr)";
    mapGrid.style.gridTemplateRows = "repeat(7, 1fr)";
    mapGrid.style.width = "100%";
    mapGrid.style.height = "100%";
    mapGrid.style.gap = "0";

    // Função para criar a grid 7x7 com imagens
    function createMapGrid() {
        let areaIndex = 1; // Começa com area-1
        for (let row = 0; row < 7; row++) {
            for (let col = 0; col < 7; col++) {
                const cell = document.createElement("div");
                cell.classList.add("map-cell");
                cell.style.width = "100%";
                cell.style.height = "100%";
                cell.id = `area-${areaIndex}`;
                
                // Cria a imagem correspondente à área
                const areaImg = document.createElement("img");
                areaImg.src = `assets/Areas/area-${areaIndex}.png`;
                areaImg.classList.add('img-fluid', 'mx-auto', 'area-img', 'hover-zoom', 'clickable');
                areaImg.style.width = "100%";
                areaImg.style.height = "100%";
                areaImg.style.objectFit = "cover";

                areaImg.addEventListener("click", () => abreModalArea(cell.id));  // Passando o id da célula
                
                // Adiciona a imagem à célula
                cell.appendChild(areaImg);
                mapGrid.appendChild(cell);
                
                areaIndex++; // Incrementa o índice da área
            }
        }
    }

    // Gerar a grade com imagens ao carregar a página
    createMapGrid();
});


$(document).ready(function() {
    // Container onde as áreas serão adicionadas
    const areaContainer = document.getElementById('areaContainer');

    // Loop para adicionar todas as áreas
    for (let i = 0; i < 5; i++) {
        // Cria um elemento de imagem para cada área
        const areaImg = document.createElement('img');
        areaImg.src = `assets/Areas/area-${i+50}.png`; // Caminho da imagem da área
        areaImg.classList.add('img-fluid', 'mx-auto', 'area-img', 'hover-zoom', 'clickable');

        // Cria uma div para cada área e adiciona a imagem dentro dela
        const areaDiv = document.createElement('div');
        areaDiv.classList.add('col-2', 'text-center', 'mt-4', 'area-item'); // col-3 para 4 áreas por linha
        areaDiv.appendChild(areaImg);
        areaDiv.id = `area-${i+50}`;

        // Adiciona evento de clique para abrir detalhes da área
        areaImg.addEventListener('click', function() {
            abreModalArea(areaDiv.id);
        });

        // Verifica se é o primeiro elemento da linha e cria uma nova linha se necessário
        if (i % 5 === 0) {
            const row = document.createElement('div');
            row.classList.add('row', 'justify-content-center');
            areaContainer.appendChild(row);
        }

        // Adiciona a div da área à última linha criada
        areaContainer.lastElementChild.appendChild(areaDiv);
    }
});


function abreModalArea(areaId) {
    const id = areaId.replace("area-", "");  // Remove "area-" do id
    $('#modalAreaImage').attr('src', `assets/Areas/area-${id}.png`);
    const area = areasInfo[id];  // Acessa as informações da área pelo ID
    
    if (area) {
        $('#modalAreaName').html('<b>' + area.nome + '</b>');
        
        // Formatar a descrição para ter quebras de linha e números em negrito
        let formattedDescription = area.descricao.split('.').map((sentence, index) => {
            // Adiciona a numeração no início de cada frase
            if (sentence.trim()) {
                return `<b>${index + 1}.</b> ${sentence.trim()}.<br>`;
            }
            return ''; // Retorna vazio para qualquer linha vazia
        }).join('');

        // getEffect(area.descricao);
        if (id >= 50 && id != 54){
            formattedDescription = getEffect(area.descricao);
        }

        $('#modalAreaEffect').html(formattedDescription);  // Define a descrição da área no modal
        $('#areaModal').modal('show');  // Abre o modal
    } else {
        console.error("Área não encontrada! " + id);
    }
}