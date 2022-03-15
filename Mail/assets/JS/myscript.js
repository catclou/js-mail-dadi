// 1) creo una lista di chi può accedere
let listaAccesso = ["indirizzo_imbarazzante_creato_alle_scuole_medie@hotmail.it", "candy.candy.forzanapoli@outlook.com", "pippo.baudo@gmail.com", "franco_califano@tiscali.it", "bruno.liegi.bastonliegi@hotmail.it", "anna.pannocchia@gmail.com", "herbert_ballerina@libero.it", "tuo_cugggino@alice.it"];

// 2) chiedo all'utente la sua email
let richiestaAccesso = prompt("Digita il tuo indirizzo email");

let validazioneAccesso = false;

// 3) controllo che sia nella lista di chi può accedere
for (i=0; i < listaAccesso.length; i++) {
    if (richiestaAccesso == listaAccesso[i]) {
        validazioneAccesso = true;
    }
}

// 4) stampo un messaggio appropriato sull'esito del controllo
if (validazioneAccesso == true) {
    document.getElementById("target").innerHTML = `L'indirizzo ${richiestaAccesso} può accedere`;
} else {
    document.getElementById("target").innerHTML = `L'indirizzo ${richiestaAccesso} non può accedere`;
}