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
console.log(nBomba.sort());

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var nUtente = [];
// parte grafica 
function creaCampo(celle) {
    for(let i = 1; i <= celle; i++) {
        let cella = `<div data-cella="${i}" class="cella">${i}</div>`;
        
        let templateCella = document.createElement('div');
        templateCella.classList.add("quadrato");
        templateCella.innerHTML = cella;
        document.getElementById('campo').appendChild(templateCella);
    }
}

document.getElementById('campo').addEventListener('click',
function(e) {
    
    var scelte = parseInt(e.target.dataset.cella);
    console.log(scelte);
    
    var element = document.querySelectorAll("[data-cella='" + scelte + "']");
    if(nBomba.includes(scelte)){
        var punteggio = nUtente.length;
        console.log('il punteggio è ' + punteggio);
        alert('BOOM!!!!')
        element[0].classList.add("red");
    }
    else 
    {
        element[0].classList.add("green");
        nUtente.push(scelte);
    }
    
}
)
creaCampo(100);

// Ciao alessio, in realtà non ho fatto codice ma ho ripassato quello che bbiamo fatto fino ad ora.
// non ti volevo abbandonare cosi ti faccio questo push completamente inutile.
// Buona giornata 
