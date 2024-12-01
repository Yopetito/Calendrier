const container = document.getElementById("container");
const resetBtn = document.getElementById("resetBtn");

const boxes = [];
for (let i = 1; i <= 24; i++) {
    boxes.push(i);
}

// Mélanger les coffres pour un affichage aléatoire
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Mélanger les coffres
const shuffledBoxes = shuffleArray(boxes);

// Dernier coffre ouvert (initialement aucun)
let lastOpened = 0;

// Ajouter les coffres au container
shuffledBoxes.forEach((boxId) => {
    const coffreContainer = document.createElement("div");
    coffreContainer.className = "coffre-container";

    const coffre = document.createElement("img");
    coffre.className = "coffre";
    coffre.setAttribute("src", "./img/coffre-ferme.webp"); // Image du coffre fermé
    coffre.setAttribute("data-id", boxId); // Ajouter un attribut data-id pour identifier chaque coffre
    coffre.setAttribute("data-open", "false"); // État fermé par défaut

    // Créer un élément pour afficher le numéro
    const numero = document.createElement("div");
    numero.className = "numero";
    numero.textContent = boxId; // Afficher l'ID de chaque coffre

    // Ajouter un événement de clic sur chaque coffre
    coffre.addEventListener("click", function () {
        const isOpen = coffre.getAttribute("data-open") === "true";

        // Vérification si on peut ouvrir ce coffre dans l'ordre
        if (boxId > lastOpened + 1) {
            alert(`Tu dois ouvrir les coffres précédents avant celui-ci.`);
            return; // Empêcher l'ouverture si ce n'est pas dans l'ordre
        }

        if (!isOpen) {
            // Si le coffre est fermé, l'ouvrir
            coffre.setAttribute("src", "./img/coffre-ouvert.webp");
            coffre.setAttribute("data-open", "true");

            // Mettre à jour le dernier coffre ouvert
            lastOpened = boxId;
        }
    });

    coffreContainer.appendChild(coffre);
    coffreContainer.appendChild(numero);
    container.appendChild(coffreContainer);
});


resetBtn.addEventListener("click", function () {
    location.reload();
});
