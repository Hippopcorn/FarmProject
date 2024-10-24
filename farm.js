import { initMonney } from "./monney.js";

const keyCapacityAnimals = "capacityAnimals"

export function initFarm(name) {
    window.localStorage.setItem("nameFarm", name)
    window.localStorage.setItem(keyCapacityAnimals, 5)
    initMonney()
}

export function getCapacityFarm() {
    return parseInt(window.localStorage.getItem(keyCapacityAnimals))
}

export function getNameFarm() {
    return window.localStorage.getItem("nameFarm")
}


export function checkCapacityFarm() {
    const listeAnimaux = JSON.parse(localStorage.getItem('animaux')) || [];
    const capacityActuelle = listeAnimaux.length
    return parseInt(capacityActuelle, 10) < getCapacityFarm()
}