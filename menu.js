import { getNameFarm, getCapacityFarm } from "./farm.js"
import { getMonney } from "./monney.js";


function afficherNomFarm() {
    const parentE = document.querySelector(".nameFarm");
    const nameFarm = document.createElement("h1");
    nameFarm.innerText = getNameFarm();
    parentE.appendChild(nameFarm)
}
function afficherInfosfarm() {
    //afficher la capacité de la ferme
    const parentE = document.querySelector(".farm");
    const affichageCapacity = document.createElement("p");
    const capacity = getCapacityFarm();
    affichageCapacity.innerText = `Capacite de la ferme : x / ${capacity}`
    parentE.appendChild(affichageCapacity)
    //affiche le solde
    const affichageSolde = document.createElement("p");
    const solde = getMonney();
    affichageSolde.innerText = `Votre solde : ${solde} $`
    parentE.appendChild(affichageSolde)
}

afficherNomFarm()
afficherInfosfarm()

function afficherAnimauxPossédés(){
    const parentE = document.querySelector(".farm");
    // ajouter dans la fonction d'afficher une image pour chaque animal déjà possédé
}