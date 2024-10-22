import { initMonney } from "./monney.js";

const keyCapacityAnimals = "capacityAnimals"

export function initFarm(name) {
    window.localStorage.setItem("nameFarm", name)
    window.localStorage.setItem(keyCapacityAnimals, 5)
    initMonney()
}

export function getCapacityFarm() {
    return window.localStorage.getItem(keyCapacityAnimals)
}

export function getNameFarm() {
    return window.localStorage.getItem("nameFarm")
}
