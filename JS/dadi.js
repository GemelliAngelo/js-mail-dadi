// ! Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const userNum = Math.floor(Math.random() * 6) + 1;
const comNum = Math.floor(Math.random() * 6) + 1;
console.log(`Il tuo numero: ${userNum}`);
console.log(`Il numero del computer: ${comNum}`);

if (userNum > comNum) {
  console.log("COMPLIMENTI!! HAI VINTO");
} else if (userNum < comNum) {
  console.log("HAI PERSO!! RITENTA");
} else {
  console.log("PARITÀ!! RITENTA");
}
