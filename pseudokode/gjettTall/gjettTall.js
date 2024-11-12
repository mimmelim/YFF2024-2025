/*
Lag pseudokode og/eller flytskjema til oppgava:
Lag et JavaScript-program som velger et tilfeldig heltall mellom 1 og 10. Deretter skal brukeren skrive inn et tall for å gjette hvilket tall programmet har valgt.
Hvis tallet brukeren gjetter er riktig, skal programmet vise meldingen "Bra jobba!".
Hvis tallet ikke stemmer, skal programmet vise meldingen "Feil, prøv igjen!".
*/
//deklarer variabel med tilfeldig verdi mellom 1 og 10
window.onload = oppstart;

function oppstart(){
    document.querySelector("#gjettKnapp").onclick = sjekkRiktig;
}

function sjekkRiktig(){
    let tilf = Math.floor(Math.random()*10)+1;
    console.log(tilf);
    //deklarer variabel og hent brukers respons
    let respons = Number(document.querySelector("#tall").value);

    //fange opp ulovlige verdier
    if(respons <1 || respons >10){
        console.log("Skriv et tall mellom 1 og 10");
    }
    //hvis respons er riktig
    else if(respons == tilf){
        //skriv tilbakemelding
        console.log("gjetta riktig");
    }
    //ellers
    else{
        //skriv tilbakemelding
        console.log("Du gjetta feil");
    }
}
