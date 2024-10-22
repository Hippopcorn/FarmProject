export function setNewAnimalInFarm() {
    // Récupérer les animaux stockés dans le LocalStorage
    const storedAnimals = JSON.parse(localStorage.getItem('animaux')) || []; 

    const animalsListDiv = document.querySelector(".animaux");

    // Parcours des animaux et affichage des informations sans le prix ni le bouton
    storedAnimals.forEach(animal => {
        const animalContainer = document.createElement("div");
        animalContainer.classList.add("animal-container");

        const animalType = document.createElement("h2");
        animalType.innerText = animal.type;

        const imgAnimal = document.createElement("img");
        imgAnimal.src = animal.image;
        imgAnimal.classList.add("animal-image");

        const tailleAnimal = document.createElement("p");
        tailleAnimal.innerText = `Taille : ${animal.taille}`;

        const produitAnimal = document.createElement("p");
        produitAnimal.innerText = `Produit : ${animal.produit}`;

        // Ajout des éléments dans le conteneur animal
        animalContainer.appendChild(animalType);
        animalContainer.appendChild(imgAnimal);
        animalContainer.appendChild(tailleAnimal);
        animalContainer.appendChild(produitAnimal);

        // Ajout du conteneur dans la page
        animalsListDiv.appendChild(animalContainer);
    });
}
setNewAnimalInFarm();

