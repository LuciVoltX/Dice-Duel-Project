
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let diceImage1 = `./images/dice${randomNumber1}.png`;

let leftDice = document.querySelector(".img1");
leftDice.setAttribute("src", diceImage1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let diceImage2 = `./images/dice${randomNumber2}.png`;

let rightDice = document.querySelector(".img2");
rightDice.setAttribute("src", diceImage2);

let heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    heading.textContent = "🚩 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    heading.textContent = "Player 2 Wins! 🚩";
} else {

    heading.textContent ="It's a Draw!";
}