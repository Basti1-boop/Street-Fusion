// =====================
// CONTENEURS HTML
// =====================
const affichage = document.getElementById("affichage");
const affichagetacos = document.getElementById("affichagetacos");
const affichageaccompagnements = document.getElementById("affichageaccompagnements");
const affichageboissons = document.getElementById("affichageboissons");

// =====================
// FONCTION DE CRÉATION DE CARTE
// =====================
function creerCarte(produit, container) {
    const carte = document.createElement("div");
    carte.classList.add("carte");

    const img = document.createElement("img");
    img.src = produit.image;
    img.alt = produit.nom;

    const contenu = document.createElement("div");
    contenu.classList.add("carte-contenu");

    const h3 = document.createElement("h3");
    h3.textContent = produit.nom;

    const description = document.createElement("p");
    description.textContent = produit.description;

    const prix = document.createElement("p");
    prix.classList.add("prix");
    prix.textContent = produit.prix;

    contenu.appendChild(h3);
    contenu.appendChild(description);
    contenu.appendChild(prix);

    carte.appendChild(img);
    carte.appendChild(contenu);

    container.appendChild(carte);
}

// =====================
// DONNÉES
// =====================
const burgers = [
    {
        nom: 'Le Montagnard',
        image: './assets/img/burger.jpg',
        description: 'Steak haché de boeuf, Salade, Raclette, Poitrine fumée.',
        prix: '13€'
    },
    {
        nom: 'Fusion Japonaise',
        image: './assets/img/japan.webp',
        description: 'Bœuf wagyu, sauce teriyaki et chou croustillant.',
        prix: '22€'
    },
    {
        nom: 'Le Green 🍃',
        image: './assets/img/vege.jpg',
        description: 'Steak de légumes, sauce blanche, Salade, Cheddar végétal.',
        prix: '15€'
    }
];

const tacos = [
    {
        nom: 'Le Trejo',
        image: './assets/img/tacoss.webp',
        description: 'Guacamole, Tomate, Boeuf, Cheddar Râpé AOP.',
        prix: '10€'
    },
    {
        nom: 'Le Martinez',
        image: './assets/img/nachos.jpg',
        description: 'Nachos, boeuf, Emmental Râpé AOP, Sauce Tomate.',
        prix: '14€'
    },
    {
        nom: 'Le Paulo 🍃',
        image: './assets/img/street_food_5.jpg',
        description: 'Haricots rouges, Tofu, Sauce Tomate, Cheddar végétal râpé.',
        prix: '12€'
    }
];

const accompagnements = [
    {
        nom: 'Frites de patates douces à la truffe noire',
        image: './assets/img/frite.jpeg',
        description: 'Double cuisson, accompagnées de copeaux de truffe noire.',
        prix: '12€'
    },
    {
        nom: 'Butternut rôtie au romarin',
        image: './assets/img/butter.jpg',
        description: 'Butternut BIO du verger',
        prix: '12€'
    },
    {
        nom: 'Fondant au chocolat praliné',
        image: './assets/img/chocolat.jpg',
        description: 'Fondant au cœur coulant praliné.',
        prix: '12€'
    }
];

const boissons = [
    {
        nom: 'Ice Tea pêche maison',
        image: './assets/img/tea.webp',
        description: 'Thé glacé maison à la pêche.',
        prix: '4€'
    },
    {
        nom: 'Limonade artisanale',
        image: './assets/img/limo.webp',
        description: 'Limonade artisanale BIO',
        prix: '4€'
    },
    {
        nom: 'Diabolo Maison',
        image: './assets/img/menthe.jpg',
        description: 'Limonade artisanale, sirop maison.',
        prix: '5€'
    }
];

// =====================
// AFFICHAGE DES CARTES
// =====================
burgers.forEach(burger => creerCarte(burger, affichage));
tacos.forEach(taco => creerCarte(taco, affichagetacos));
accompagnements.forEach(acc => creerCarte(acc, affichageaccompagnements));
boissons.forEach(boisson => creerCarte(boisson, affichageboissons));