const vingtQuatreHeures = 24 * 60 * 60 * 1000 //une journée en millisecondes

export function setDateVisite(){
    window.localStorage.setItem("derniereVisite", new Date().toDateString())
}

export function checkerVisiteAujourdHui() {
    const derniereVisite = window.localStorage.getItem("derniereVisite");
    console.log(derniereVisite)
    const aujourdHui = new Date().toDateString();
    console.log(aujourdHui)

    if (derniereVisite !== aujourdHui) {
        setDateVisite()
        return false
    }
    return true
}