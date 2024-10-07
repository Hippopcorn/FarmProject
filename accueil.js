//Récupérer le nom de la ferme
const formulaireFarmName = document.querySelector(".formNameFarm");

formulaireFarmName.addEventListener("submit", function (event) {
    event.preventDefault();
    const NameChoice = event.target.querySelector("[name=farmName]").value  
    console.log(NameChoice);
})
