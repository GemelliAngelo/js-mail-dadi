// ! Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.
const validEmails = [
  "hello@gmail.com",
  "me@gmail.com",
  "manager@gmail.com",
  "here@gmail.com",
  "admin@gmail.com",
];
const userEmail = prompt("Inserisci la tua Email");
let isUserEmailValid = false;

for (let i = 0; i < validEmails.length; i++) {
  if (userEmail === validEmails[i]) {
    isUserEmailValid = true;
  }
}
console.log(isUserEmailValid ? "BENVENUTO" : "CI DISPIACE. NON PUOI ACCEDERE");

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
