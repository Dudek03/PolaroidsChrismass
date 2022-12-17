let buttonMleko = document.getElementById("Mleko")

buttonMleko.addEventListener("click", () => { changeSite("mleko") })



const changeSite = (site) => {
    location.href = `./${site}-wishes.html`
}