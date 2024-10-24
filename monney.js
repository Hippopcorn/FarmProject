const keyMonney = "monney"

export function initMonney() {
    window.localStorage.setItem(keyMonney, 3000)
}
export function getMonney() {
    return parseInt(window.localStorage.getItem(keyMonney), 10)
}

export function testMonney(price) {
    return parseInt(price, 10) <= getMonney()
}

export function pullMonney(price) {
    const monneyFarm = getMonney()- price
    return window.localStorage.setItem(keyMonney, monneyFarm)
}