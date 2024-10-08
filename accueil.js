//Récupérer le nom de la ferme
const formulaireFarmName = document.querySelector(".formNameFarm");

formulaireFarmName.addEventListener("submit", function (event) {
    event.preventDefault();
    const NameChoice = event.target.querySelector("[name=farmName]").value  
    console.log(NameChoice);
    window.location.replace("http://127.0.0.1:5500/menu.html");
})
