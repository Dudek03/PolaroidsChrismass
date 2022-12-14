const main = () => {
    let lampCount = 41
    let lampList = document.getElementById("lamp-list")
    for (let i = 0; i < lampCount; i++) {
        let li = document.createElement("li")
        lampList.appendChild(li)
    }
}

main()