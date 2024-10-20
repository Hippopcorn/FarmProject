const keyMonney = "monney"

export function initMonney() {
    window.localStorage.setItem(keyMonney, 3000)
}
export function getMonney() {
    return window.localStorage.getItem(keyMonney)
}