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
console.log(isUserEmailValid);

// ! Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
