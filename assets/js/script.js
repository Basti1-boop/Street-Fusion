const actualites = [
    {
        titre: "Nouveau Burger du Mois",
        description: "Découvrez notre burger 'Fusion Japonaise' : un mélange audacieux de bœuf wagyu, sauce teriyaki et chou croustillant.",
        image: "./assets/img/food.jpg"
    },
    {
        titre: "On sera au Festival d'Été !",
        description: "Retrouvez-nous du 15 au 17 juillet au Festival des Saveurs de Paris. Au programme : dégustations et animations.",
        image: "./assets/img/food_truck_event.jpg"
    },
    {
        titre: "Promo Été : 2 Burgers Achetés = 1 Accompagnement Offert",
        description: "Profitez de notre offre spéciale jusqu'au 31 août. Une raison de plus pour venir nous voir !",
        image: "./assets/img/presentation.jpg"
    }
];

// Sélectionne la grille des actualités
const actuGrid = document.getElementById('actu-grid');

// Fonction pour afficher les actualités
function afficherActualites() {
    actualites.forEach(actualite => {
        const actuCard = document.createElement('div');
        actuCard.className = 'actu-card';

        const actuImage = document.createElement('img');
        actuImage.src = actualite.image;
        actuImage.alt = actualite.titre;
        actuCard.appendChild(actuImage);

        const actuName = document.createElement('h3');
        actuName.textContent = actualite.titre;
        actuCard.appendChild(actuName);

        const actuDescription = document.createElement('p');
        actuDescription.textContent = actualite.description;
        actuCard.appendChild(actuDescription);

        // Utilise actuGrid au lieu de projectsGrid
        actuGrid.appendChild(actuCard);
    });
}

// Appelle la fonction pour afficher les actualités
// Utilise DOMContentLoaded pour s'assurer que le DOM est chargé
document.addEventListener('DOMContentLoaded', afficherActualites);
