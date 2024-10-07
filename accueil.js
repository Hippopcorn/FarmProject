//Récupérer le nom de la ferme
formulaireFarmName = document.querySelector(".FormNameFarm");

formulaireFarmName.addEventListener("submit", function (event) {
    event.preventDefault();
    NameChoice = event.target.querySelector("[name="farmName]").value  
    console.log(NameChoice);
})
