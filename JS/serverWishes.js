let button = document.getElementById('button');
button.addEventListener("click", () => { openCard() })

const openCard = () => {
    let cards = document.querySelectorAll('.card');

    if (button.innerHTML == 'Otwórz') {
        button.innerHTML = 'Zamknij';
    } else {
        button.innerHTML = 'Otwórz';
    }


    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle('open');
    }
}

