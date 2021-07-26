// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
var nBomba = [];
while(nBomba.length < 16){  //modificare il numero di 'bombe'
    var random = Math.floor(Math.random() * 100) + 1;
    // I numeri non possono essere duplicati.
    if(nBomba.indexOf(random) === -1) nBomba.push(random); 
}
console.log(nBomba);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var nUtente = [];
var items = 10;

while(nUtente.length < items) {
    var scelte = parseInt(prompt('Inserisci un numero da 1 a 100'));

    // L’utente non può inserire più volte lo stesso numero.
    if((nUtente.indexOf(scelte) === -1) && (isNaN(scelte) == false) && (scelte >= 1 && scelte <= 100)) nUtente.push(scelte); 
    
    // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    // La partita termina quando il giocatore inserisce un numero “vietato”  
    if (nBomba.includes(scelte)) {
        alert('Partita terminata');
        break;
    }
    // o raggiunge il numero massimo possibile di numeri consentiti.
    if(nUtente.length == items) {
        alert('Hai vinto');
    }
}
console.log(nUtente)

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.











// funzioni