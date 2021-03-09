const carouselTranslation = document.querySelector('.carouselTranslation');
const carouselCard = document.querySelectorAll('.carouselCard');
const numberOfCard = carouselCard.length;
const navButton = document.querySelectorAll('.navButton');

let currentCard = 0;
let divRotation = 45;

// We are just saying that if we can place 3 cards on the web page we do it, and if we can not, then each card width has to be equal to 270px
    let width = Math.max(270, window.innerWidth / 3);

// Card height is always equal to half the screen device
    let height = window.innerHeight / 2;

// Center cards in the middle of the web page 
    let translation = window.innerWidth/2 - width / 2;
    carouselTranslation.style.transform = `translateX(${translation}px)`;

// Resize cards according to the screen device
    carouselCard.forEach(e => {
        e.style.width = `${width}px`;
        e.style.height = `${height}px`;
    });

// The following loop takes every cards (except the first one) and rotate them
    for (let i = 1; i < numberOfCard; i++) {
        const carouselContent = carouselCard[i].querySelector('.carouselContent');
        carouselContent.style.transform = `rotateY(-${divRotation}deg)`;
    }

/**
 * @param evt 
 * 
 * Purpose of this function is to rotate, with 45 deg, every cards after the current card, and with -45deg every cards before the current card, and do it each time previous or next button is clicked
*/
function cardFunction(evt) {
    if (evt.target.id === "previous" && currentCard !== 0) {
        currentCard -= 1;
        translation += width;
    }
    else if (evt.target.id === "next" && currentCard !== numberOfCard - 1) {
        currentCard += 1;
        translation -= width;
    }

    for (let i = 0; i < numberOfCard; i++) {
        const carouselContent = carouselCard[i].querySelector('.carouselContent');

        if (i === currentCard) {
            carouselContent.style.transform = 'rotateY(0deg)';
        }
        else if (i < currentCard) {
            carouselContent.style.transform = `rotateY(${divRotation}deg)`;
        }
        else if (i > currentCard) {
            carouselContent.style.transform = `rotateY(-${divRotation}deg)`;
        }
    }

    carouselTranslation.style.transform = `translateX(${translation}px)`;
}

navButton.forEach(e => {
    e.addEventListener('click', cardFunction)
});