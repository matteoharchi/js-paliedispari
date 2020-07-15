// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita
// è palindroma

// Senza funzione
// var parola = prompt("Inserisci una parola e scopri se è palindroma");
// var parolaScomposta = [];
// for (var i = 0; i < parola.length; i++) {
//     parolaScomposta.push(parola[i]);
// }
// var alorapScomposta = parolaScomposta.reverse();
// var alorap = "";
// for (var j = 0; j < alorapScomposta.length; j++) {
//     alorap += alorapScomposta[j];
// }
// if (alorap == parola) {
//     alert("La parola è palindroma!")
// } else {
//     alert("La parola non è palindroma!")
// }

// con funzione

var mot = prompt("Inserisci una parola e scopri se è palindroma!");
palindromia(mot);


function palindromia(parolaccia) {
    var palindromia = "";
    var parolacciaScomposta = [];
    for (var i = 0; i < parolaccia.length; i++) {
        parolacciaScomposta.push(parolaccia[i]);
    }
    var parlacciaScompostaReverse = parolacciaScomposta.reverse();
    var parolacciaReverse = "";
    for (var i = 0; i < parolacciaScomposta.length; i++) {
        parolacciaReverse += parolacciaScomposta[i];
    }
    if (parolaccia == parolacciaReverse) {
        alert("La parola è palindroma!");
    } else {
        alert("La parola non è palindroma!");
    }
}
