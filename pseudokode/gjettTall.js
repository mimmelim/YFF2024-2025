/*
Lag pseudokode og/eller flytskjema til oppgava:
Lag et JavaScript-program som velger et tilfeldig heltall mellom 1 og 10. Deretter skal brukeren skrive inn et tall for å gjette hvilket tall programmet har valgt.
Hvis tallet brukeren gjetter er riktig, skal programmet vise meldingen "Bra jobba!".
Hvis tallet ikke stemmer, skal programmet vise meldingen "Feil, prøv igjen!".
*/
//deklarer variabel med tilfeldig verdi mellom 1 og 10
let tilf = Math.floor(Math.random()*10)+1;
//deklarer variabel og hent brukers respons
let respons = 8;
//ALT 1:
//hvis respons er riktig
if(respons >= 18){
    //skriv tilbakemelding
    console.log("du er gammel nok til å kjøre bil");
}
//ellers
else{
    //skriv tilbakemelding
    console.log("Du er ikke gammel nok til å kjøre bil");
}

//ALT 2:
//sålenge respons ikke riktig
    //skriv tilb.mld 'prøv igjen'
//skriv tilb.mld 'grættis'