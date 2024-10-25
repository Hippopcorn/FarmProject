import { getMonney, testMonney, pullMonney } from "./monney.js";
import { getCapacityFarm, checkCapacityFarm } from "./farm.js";
import { checkerVisiteAujourdHui } from "./time.js";

const reponse = await fetch("marche.json");
const animals = await reponse.json();

// Afficher combien d’animaux le joueur possède, sa capacité maximale

//fonction pour choisir un animal aléatoirement
function animalRandom(listName, lengthList) {
    let nbrRandom = Math.floor(Math.random() * ((lengthList - 1) - 0 + 1)) + 0;
    return listName[nbrRandom]
}

window.localStorage.setItem("animauxAVendre", []); 
let animauxAVendre = localStorage.getItem('animauxAVendre');
console.log(animauxAVendre)



function generateAnimalRandom(listName, lengthList, nbrAnimalsToGenerate) {

    let storedAnimals = JSON.parse(localStorage.getItem('animaux')) || []; // Récupère les animaux déjà stockés, sinon un tableau vide

   
    for (let i = 0; i < nbrAnimalsToGenerate; i++) {
        const animalToAdd = animalRandom(listName, lengthList)
        // on génère un Index aléatoire qui servira pour la taille de l'animal et son prix
        const Isize = Math.floor(Math.random() * ((2) - 0 + 1)) + 0;

        // Création d'un objet avec les informations pertinentes
        const animalInfo = {
            type: animalToAdd.animal,
            image: animalToAdd.image,
            taille: animalToAdd.size[Isize],
            produit: animalToAdd.production
        };

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
        achatBouton.dataset.price = animalToAdd.price[Isize];
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

        animauxAVendre.push(animalInfo)

        buyAnimal(storedAnimals, animalInfo, achatBouton.dataset.price, achatBouton);
    }
}

if (checkerVisiteAujourdHui() == false || window.localStorage.getItem("animauxAVendre").length < 3) {
    generateAnimalRandom(animals, animals.length, 3)
}

function afficherInfos() {
    const parentE = document.querySelector(".barreInfos");
    const affichageCapacity = document.createElement("p");
    const capacity = getCapacityFarm();

    const listeAnimaux = JSON.parse(localStorage.getItem('animaux')) || [];
    const capacityActuelle = listeAnimaux.length
    affichageCapacity.innerText = `Capacite de la ferme : ${capacityActuelle} / ${capacity}`
    parentE.appendChild(affichageCapacity)

    const titreMarche = document.createElement("h1");
    titreMarche.innerText = "Bienvenue au marché!"
    parentE.appendChild(titreMarche)

    const affichageSolde = document.createElement("p");
    const solde = getMonney();
    affichageSolde.innerText = `Votre solde : ${solde} $`
    parentE.appendChild(affichageSolde)
}
afficherInfos()


function buyAnimal(storedAnimals, animalInfo, price, achatBouton) {
    // const buttonsAchat = document.querySelectorAll(".buttonAchat")
    
    achatBouton.addEventListener("click", (e) => {
        const testMonneyOk = testMonney(price)
        
        if (testMonneyOk) {
            const testCapacityOk = checkCapacityFarm() 
            console.log(testCapacityOk)

            if (testCapacityOk) {
                // Ajoute cet animal au tableau des animaux stockés
                storedAnimals.push(animalInfo);
    
                // Met à jour le localStorage
                localStorage.setItem('animaux', JSON.stringify(storedAnimals));
                pullMonney(price)
                console.log(`Vous avez payé ${price} $`);
                console.log(`${animalInfo.type} a été ajouté au panier.`);
                location.reload();
            } else {
                console.log("Vous n'avez pas assez de place dans votre ferme");
            }
        } else {
            console.log("Vous n'avez pas assez d'argent");
        }
    })
}



