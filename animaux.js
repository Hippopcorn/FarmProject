 function setNewAnimalInFarm() {
    // Récupérer les animaux stockés dans le LocalStorage
    const storedAnimals = JSON.parse(localStorage.getItem('animaux')) || []; 

    const animalsListDiv = document.querySelector(".animaux");

    // Parcours des animaux et affichage des informations sans le prix ni le bouton
    storedAnimals.forEach(animal => {
        const animalContainer = document.createElement("div");
        animalContainer.classList.add("animal-container");

        const animalImage = document.createElement("div");
        animalImage.classList.add("animal-image");

        const imgAnimal = document.createElement("img");
        imgAnimal.src = animal.image;
        animalImage.appendChild(imgAnimal)
        

        const animalInfos = document.createElement("div");
        animalInfos.classList.add("animal-infos");

        const animalType = document.createElement("h2");
        animalType.innerText = animal.type;


        const tailleAnimal = document.createElement("p");
        tailleAnimal.innerText = `Taille : ${animal.taille}`;

        const produitAnimal = document.createElement("p");
        produitAnimal.innerText = `Produit : ${animal.produit}`;

        // Ajout des éléments dans le conteneur animal
        animalInfos.appendChild(animalType);
        animalInfos.appendChild(tailleAnimal);
        animalInfos.appendChild(produitAnimal);

        // Ajout du conteneur dans la page
        animalContainer.appendChild(animalImage);
        animalContainer.appendChild(animalInfos);
        animalsListDiv.appendChild(animalContainer);
    });
}
setNewAnimalInFarm();

