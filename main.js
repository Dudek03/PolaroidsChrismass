const main = () => {
    let lampCount = 41
    let lampList = document.getElementById("lamp-list")
    for (let i = 0; i < lampCount; i++) {
        let li = document.createElement("li")
        lampList.appendChild(li)
    }
}

let serverButton = document.getElementById("server")
let peopleButton = document.getElementById("people")


serverButton.addEventListener("click", () => {location.href="./server-wishes.html"})
peopleButton.addEventListener("click", () => {location.href="./wishes-for-people.html"})
main()