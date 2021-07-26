// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
var nBomba = [];
while(nBomba.length < 5){  //modificare il numero di 'bombe'
    var random = Math.floor(Math.random() * 100) + 1;
    // I numeri non possono essere duplicati.
    if(nBomba.indexOf(random) === -1) nBomba.push(random); 
}
console.log(nBomba);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var nUtente = [];
var i = 1;
while(i <= 5) {
    var scelte = parseInt(prompt('Inserisci un numero da 1 a 100'));
    nUtente.push(scelte);
    i++; 
}
console.log(nUtente)
// L’utente non può inserire più volte lo stesso numero.

// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.