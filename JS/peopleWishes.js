let buttonMleko = document.getElementById("Mleko")
let buttonDorime = document.getElementById("Dorime")
let buttonPola = document.getElementById("Pola")
let buttonDobek = document.getElementById("Dobek")
let buttonZupa = document.getElementById("Zupa")
let buttonGrubus = document.getElementById("Grubus")

buttonMleko.addEventListener("click", () => { changeSite("mleko") })
buttonDorime.addEventListener("click", () => { changeSite("Dorime") })
buttonPola.addEventListener("click", () => { changeSite("Pola") })
buttonDobek.addEventListener("click", () => { changeSite("Dobek") })
buttonZupa.addEventListener("click", () => { changeSite("zupa") })
buttonGrubus.addEventListener("click", () => { changeSite("Grubus") })

const changeSite = (site) => {
    location.href = `./${site}-wishes.html`
}