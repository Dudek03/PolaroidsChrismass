let button = document.getElementById('button');
button.addEventListener("click", () => { openCard() })

const openCard = () => {
    let cards = document.querySelectorAll('.card');

    if (button.innerHTML == 'Open Card') {
        button.innerHTML = 'Close Card';
    } else {
        button.innerHTML = 'Open Card';
    }


    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle('open');
    }
}

