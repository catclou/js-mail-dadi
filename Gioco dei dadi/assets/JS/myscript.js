// 1) Creare un dado per l'utente
let userDice = Math.random();
userDice = Math.floor((userDice * 6) + 1);
document.getElementById("userNumber").innerHTML = `Your number is ${userDice}`;

// 2) Creare un dado per il computer
let computerDice = Math.random();
computerDice = Math.floor((computerDice * 6) + 1);
document.getElementById("computerNumber").innerHTML = `Computer's number is ${computerDice}`;

// 3) Confrontare i risultati
if (userDice > computerDice) {
    document.getElementById("winner").innerHTML = `You win`;
} else if (userDice < computerDice) {
    document.getElementById("winner").innerHTML = `Computer wins`;
} else {
    document.getElementById("winner").innerHTML = `It's a tie!`;
}