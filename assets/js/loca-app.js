//Initialisation de la map
//L est un objet globale fourni par leaflet
const map = L.map('map').setView([48.446, 1.489], 13); // Ici on va chercher la div map
 
// Ajout des tuiles OpenStreetMap
//Tuiles c'est des images = forme la carte de base afin de regler les zooms et position de la carte
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
 
//  : ajouter une icône pour un restaurant
const icon = L.icon({
    iconUrl: 'https://www.flaticon.com/fr/icones-gratuites/marqueur',
    iconSize: [32, 32],
 
    
});   
 
 
  // Coordonnées des positions du food truck
const positions = {
    "lundi": {
        "midi": { lat: 48.4475, lng: 1.4878 , //  centre-ville
        nom: 'Street-Fusion',
        adresse: ' Cloitre notre-dame',
        horaire: ' 11h30-14h30 ',
        image: './assets/img/cloitre.jpg',
        },
        "soir": { lat: 48.4556, lng: 1.4789 ,  //  Lucé
        nom: 'Street-Fusion',
        adresse: ' 8 rue du clos lucé',
        horaire: ' 18h30-20h30 ',
        image: './assets/img/lucé.jpg',
        },
    },
    "mardi": {
        "midi": { lat: 48.4500, lng: 1.4900 ,//  Place des Épars
        nom: 'Street-Fusion',
        adresse: ' Place des épars',
        horaire: ' 11h30-14h30',
        image: './assets/img/epar.jpg',
        },
        "soir": { lat: 48.4520, lng: 1.4850 , //  Rue Saint-Chéron
        nom: 'Street-Fusion',
        adresse: ' Rue Saint-Chéron',
        horaire: ' 18h30-20h30 ',
        image: './assets/img/st.jpg',
        },
        },
    "mercredi": {
        "midi": { lat: 48.4450, lng: 1.4800, // Marché de Mainvilliers
        nom: 'Street-Fusion',
        adresse: ' Marché de mainvillier',
        horaire: ' 11h30-14h30 ',
        image: './assets/img/main.webp',
        },
        "soir": { lat: 48.4480, lng: 1.4750 ,  // Parking de la gare
        nom: 'Street-Fusion',
        adresse: ' Parking de la gare',
        horaire: ' 18h30-20h30 ',
        image: './assets/img/gare.jpg',
        }
    },
    "jeudi": {
        "midi": { lat: 48.4523, lng: 1.4801, // Parc André-Gagnon
        nom: 'Street-Fusion',
        adresse: ' Parc André-Gagnon',
        horaire: ' 11h30-14h30 ',
        image: './assets/img/Parc.jpg',
    },
        "soir": { lat: 48.4450, lng: 1.4905,  // Parking de la Gare de Chartres
        nom: 'Street-Fusion',
        adresse: ' Parking de la gare',
        horaire: ' 18h30-20h30 ',
        image: './assets/img/gare.jpg',
        }
    },
    "vendredi": {
        "midi": { lat: 48.4389, lng: 1.4832 , // Zone Artisanale de Morancez
        nom: 'Street-Fusion',
        adresse: ' Zone Artisanale de Morancez',
        horaire: ' 11h30-14h30 ',
        image: './assets/img/morancez.jpg',
        },
        "soir": { lat: 48.4567, lng: 1.4754, // Quartier de la Madeleine
        nom: 'Street-Fusion',
        adresse: ' La madelaine',
        horaire: ' 18h30-20h30 ',
        image: './assets/img/madeleine.jpg',
        },
    },
    "samedi": {
        "midi": { lat: 48.4489, lng: 1.4890 ,// Place Billard
        nom: 'Street-Fusion',
        adresse: ' Place Billard',
        horaire: ' 11h30-14h30 ',
        image: './assets/img/place.jpg',
        },
 
        "soir": { lat: 48.4401, lng: 1.4702,  // Zone Commerciale de Gasville-Oisème
        nom: 'Street-Fusion',
        adresse: ' Zone de Gasville-Oisème',
        horaire: ' 18h30-20h30 ',
        image: './assets/img/gv.jpeg',
    },
    },
    "dimanche": {
        "midi": { lat: 48.4534, lng: 1.4876, // Parc des Bords de l'Eure
        nom: 'Street-Fusion',
        adresse: " Parc des bords de l'Eure",
        horaire: ' 11h30-14h30 ',
        image: './assets/img/bord.jpg',
    },
        "soir": { lat: 48.4423, lng: 1.4856,  // Parking du Cinéma Les Enfants du Paradis
        nom: 'Street-Fusion',
        adresse: ' Zone de Gasville-Oisème',
        horaire: ' 18h30-20h30 ',
        image: './assets/img/gv.jpeg',
        },
    }
}
    // evite les doublons
let currentMarker = null;
 
// Fonction pour mettre à jour la position du food truck
function updateFoodTruckPosition(jour, moment) {
    const position = positions[jour][moment];
 
    // Supprimer l'ancien marqueur s'il existe grace a la fonction d'au dessus
        if (currentMarker) {
        map.removeLayer(currentMarker);
    }
 
    // Ajouter un nouveau marqueur
    currentMarker = L.marker([position.lat, position.lng]).addTo(map);
    currentMarker.bindPopup(`<b>Food Truck</b><br>Présent ici ${jour} ${moment}.`).openPopup();
    map.setView([position.lat, position.lng], 15);
 
        // Mettre à jour le bloc d'informations
    const infoBlock = document.getElementById('info');
    infoBlock.innerHTML = `
    <h2>    ${position.nom}    </h2>
    <img src="${position.image}" alt="Food Truck img" class="food-truck-image">
    <p><strong>Adresse :</strong> ${position.adresse}</p>
    <p><strong>Horaires :</strong> ${position.horaire}</p>
        
    `;
    
}
 
 
// Écouteurs d'événements pour les menus déroulants
document.getElementById('jour').addEventListener('change', function() {
    const jour = document.getElementById('jour').value;
    const moment = document.getElementById('moment').value;
    updateFoodTruckPosition(jour, moment);
});
//const est une variable locale donc no problemo
document.getElementById('moment').addEventListener('change', function() {
    const jour = document.getElementById('jour').value;
    const moment = document.getElementById('moment').value;
    updateFoodTruckPosition(jour, moment);
});
 
// Initialisation avec la position par défaut (lundi midi)
updateFoodTruckPosition('lundi', 'midi');
