// ! Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const userNum = Math.floor(Math.random() * 6) + 1;
const comNum = Math.floor(Math.random() * 6) + 1;
document.getElementById(
  "game"
).innerHTML = `<h2 class="text-center py-3">Il tuo numero: ${userNum}</h2> <br/> <h2 class="text-center py-3">Il numero del computer: ${comNum}</h2>`;

if (userNum > comNum) {
  document.getElementById(
    "results"
  ).innerHTML = `<h2 class="text-center py-3 text-success">HAI VINTO!!!</h2>`;
} else if (userNum < comNum) {
  document.getElementById(
    "results"
  ).innerHTML = `<h2 class="text-center py-3 text-danger">HAI PERSO!!! RITENTA</h2>`;
} else {
  document.getElementById(
    "results"
  ).innerHTML = `<h2 class="text-center py-3 text-warning">PARITÀ!!! RITENTA</h2>`;
}
