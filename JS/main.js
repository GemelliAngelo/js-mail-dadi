// ! Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.
const validEmails = [
  "hello@gmail.com",
  "me@gmail.com",
  "here@gmail.com",
  "admin@gmail.com",
];
const userEmail = prompt("Inserisci la tua Email");

for (let i = 0; i < validEmails.length; i++) {
  if (validEmails[i] === userEmail) {
    console.log("Benvenuto");
  } else {
    console.log("Non puoi accedere");
  }
}

// ! Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
