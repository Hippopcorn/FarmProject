import { initFarm } from "./farm.js";

//Récupérer le nom de la ferme
const formulaireFarmName = document.querySelector(".formNameFarm");

formulaireFarmName.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameChoice = event.target.querySelector("[name=farmName]").value
    initFarm(nameChoice)
    window.location.replace("http://127.0.0.1:5500/menu.html");
})
