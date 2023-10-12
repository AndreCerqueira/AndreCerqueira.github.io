const modal = document.getElementById("gameOverModal");
// const span = document.getElementsByClassName("close")[0];

// Função para mostrar o modal
function showGameOverModal() {
    document.getElementById("modal-score").innerHTML = "Score: " + score;
    document.getElementById("modal-best-score").innerHTML = "<strong> Best Score: " + bestScore + "</strong>";
    modal.style.display = "block";
    jogoIniciado = false;
}

// Função para fechar o modal
/*span.onclick = function() {
    modal.style.display = "none";
}

// Fechar o modal se o usuário clicar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/