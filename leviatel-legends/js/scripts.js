// Script para alternar entre as seções de Cards, Map e Decks
document.addEventListener("DOMContentLoaded", function () {
    const cardsLink = document.getElementById("cardsLink");
    const mapLink = document.getElementById("mapLink");
    const decksLink = document.getElementById("decksLink");
    const cardsSection = document.getElementById("cardsSection");
    const mapSection = document.getElementById("mapSection");
    const decksSection = document.getElementById("decksSection");

    // Mostrar a seção de Cards por padrão
    cardsSection.style.display = "block";
    mapSection.style.display = "none";
    decksSection.style.display = "none";
    cardsLink.classList.add("active");

    // Alternar para a seção de Cards
    cardsLink.addEventListener("click", function (e) {
        e.preventDefault();
        cardsSection.style.display = "block";
        mapSection.style.display = "none";
        decksSection.style.display = "none";
        cardsLink.classList.add("active");
        mapLink.classList.remove("active");
        decksLink.classList.remove("active");
    });

    // Alternar para a seção de Map
    mapLink.addEventListener("click", function (e) {
        e.preventDefault();
        cardsSection.style.display = "none";
        mapSection.style.display = "block";
        decksSection.style.display = "none";
        cardsLink.classList.remove("active");
        mapLink.classList.add("active");
        decksLink.classList.remove("active");
    });

    // Alternar para a seção de Decks
    decksLink.addEventListener("click", function (e) {
        e.preventDefault();
        cardsSection.style.display = "none";
        mapSection.style.display = "none";
        decksSection.style.display = "block";
        cardsLink.classList.remove("active");
        mapLink.classList.remove("active");
        decksLink.classList.add("active");
    });
});