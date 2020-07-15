// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita
// è palindroma

// Senza funzione

// <<Variabile da inserire>>

// var parola = prompt("Inserisci una parola e scopri se è palindroma");

// <<Scompongo la parola in singoli caratteri in un array>>

// var parolaScomposta = [];
// for (var i = 0; i < parola.length; i++) {
//     parolaScomposta.push(parola[i]);
// }

// <<Creo array reverse e var parola reverse>>

// var alorapScomposta = parolaScomposta.reverse();
// var alorap = "";

// <<Unisco i caratteri del array reverse
// per creare parola reverse>>

// for (var j = 0; j < alorapScomposta.length; j++) {
//     alorap += alorapScomposta[j];
// }

// <<Verifica se palindromo o meno>>

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
