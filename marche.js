const reponse = await fetch("marche.json");
const animals = await reponse.json();

// Afficher combien d’animaux le joueur possède, sa capacité maximale

//fonction pour choisir un animal aléatoirement
function animalRandom(listName, lengthList) {
    let nbrRandom = Math.floor(Math.random() * ((lengthList - 1) - 0 + 1)) + 0;
    return listName[nbrRandom]
}

function generateAnimalRandom(listName, lengthList, nbrAnimalsToGenerate) {
    for (let i = 0; i < nbrAnimalsToGenerate; i++) {
        const animalToAdd = animalRandom(listName, lengthList)
        // on génère un Index aléatoire qui servira pour la taille de l'animal et son prix
        const Isize = Math.floor(Math.random() * ((2) - 0 + 1)) + 0;

        //création d'une balise pour ajouter l'animal
        const animalContainer = document.createElement("div");
        animalContainer.classList.add("newAnimal-container");
        const animalElement = document.createElement("div");
        animalElement.classList.add("newAnimal-card");


        // On crée les différents éléments et on ajoute les informations
        const typeAnimal = document.createElement("typeAnimal");
        typeAnimal.innerText = animalToAdd.animal;

        const imgAnimal = document.createElement("img");
        imgAnimal.src = animalToAdd.image;
        imgAnimal.style.height = '200px';

        const sizeAnimal = document.createElement("p");
        sizeAnimal.innerText = `Taille : ${animalToAdd.size[Isize]}`;

        const productionAnimal = document.createElement("p");
        productionAnimal.innerText = `Produit : ${animalToAdd.production}`;

        const priceAnimal = document.createElement("p");
        priceAnimal.innerText = `Prix : ${animalToAdd.price[Isize]} 💲`;

        const achatBouton = document.createElement("button");
        achatBouton.classList.add("buttonAchat");
        achatBouton.dataset.id = animalToAdd.animal;
        achatBouton.textContent = "Acheter";


        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".fichesAnimaux");

        // On rattache la balise newAnimal à la section Fiches
        sectionFiches.appendChild(animalContainer);
        animalContainer.appendChild(animalElement);

        // On rattache toutes nos infos à la nouvelle balise animal
        animalElement.appendChild(typeAnimal);
        animalElement.appendChild(document.createElement("br"));
        animalElement.appendChild(document.createElement("br"));
        animalElement.appendChild(imgAnimal);
        animalElement.appendChild(sizeAnimal);
        animalElement.appendChild(productionAnimal);
        animalElement.appendChild(priceAnimal);
        animalElement.appendChild(achatBouton);
    }
}
generateAnimalRandom(animals, animals.length, 3)

function buyAnimal() {
    const buttonsAchat = document.querySelectorAll(".buttonAchat")
    console.log(buttonsAchat)
    for (let iButtons = 0; iButtons < buttonsAchat.length; iButtons++) {
        buttonsAchat[iButtons].addEventListener("click", (e) => {
            // const AnimalToBuy = e.target.querySelector(".data-id");
            console.log(AnimalToBuy);
        })
    }
}
buyAnimal()