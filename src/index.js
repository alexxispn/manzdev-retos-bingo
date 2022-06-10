const buttonPlay = document.querySelector("#play");
const buttonNew = document.querySelector("#new");
const ballBig = document.querySelector("#big");
const cardPlayer = document.querySelector("#player-card")
const cardCpu = document.querySelector("#cpu-card");
const historyNumbers = document.querySelector("h3")

// This function create an array from 1 to 90 and shuffle them.
const arrayNumbers = (Array.from({ length: 90 }, (_, i) => i + 1)).sort(() => Math.random() - 0.5);

// Here we shuffle the previous array and slice 15 random numbers.
const numbersPlayer = (Object.values(arrayNumbers).sort(() => Math.random() - 0.5)).slice(0, 15);
const numbersCpu = (Object.values(arrayNumbers).sort(() => Math.random() - 0.5)).slice(0, 15);

// This function insert the previous 15 numbers inside our card on the html.
const createCard = (card, numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        card.innerHTML += `<div class="ball ball-${numbers[i]}">${numbers[i]}</div>`
    }
}
const newGame = () => {

    createCard(cardPlayer, numbersPlayer);
    createCard(cardCpu, numbersCpu);
}


// This function generate a new random number (moreless) and show on the big ball.
let ballNumber = 0

buttonPlay.addEventListener("click", () => {
    historyNumbers.textContent += `${arrayNumbers[ballNumber]}, `;
    ballBig.textContent = `${arrayNumbers[ballNumber]}`;
    checkCard(arrayNumbers[ballNumber])
    ballNumber++
});

// This function check if the number generated before is on the card and cross them.
const checkCard = (number) => {
    document.querySelectorAll(`.ball-${number}`).forEach((ball) => {
        ball.classList.add("red");
        ball.innerHTML += `<div class="cross"></div>`;
    });
};

newGame();
