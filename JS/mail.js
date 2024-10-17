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
isUserEmailValid
  ? (document.getElementById(
      "access"
    ).innerHTML = `<h2 class="py-5 text-center fw-bold text-success">BENVENUTO</h2>`)
  : (document.getElementById(
      "access"
    ).innerHTML = `<h2 class="py-5 text-center fw-bold text-danger">CI DISPIACE. NON PUOI ACCEDERE</h2>`);
