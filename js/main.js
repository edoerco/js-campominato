// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
var nBomba = [];
var maxNumber = 100;
var bombs = 16;
while(nBomba.length < bombs){  //modificare il numero di 'bombe'
    var random = Math.floor(Math.random() * maxNumber) + 1;
    // I numeri non possono essere duplicati.
    if(nBomba.indexOf(random) === -1) {
        nBomba.push(random); 
    } 
}
console.log(nBomba);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var nUtente = [];
var games = 84;

while(nUtente.length < games) {
    var scelte = parseInt(prompt('Inserisci un numero da 1 a 100'));

    // L’utente non può inserire più volte lo stesso numero.
    if((nUtente.indexOf(scelte) === -1) && (isNaN(scelte) == false) && (scelte >= 1 && scelte <= maxNumber) && (nBomba.includes(scelte) == false)) {
        nUtente.push(scelte); 
    } 
    
    // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    // La partita termina quando il giocatore inserisce un numero “vietato”  
    if (nBomba.includes(scelte)) {
        alert('Partita terminata');
        break;
    }
    // o raggiunge il numero massimo possibile di numeri consentiti.
    if(nUtente.length == games) {
        alert('Hai vinto');
    }
}
console.log(nUtente)

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
var punteggio = nUtente.length;
console.log('il punteggio è ' + punteggio);
