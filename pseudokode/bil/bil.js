/*
Lag pseudokode og/eller flytskjema til oppgava:
Lag et program som, basert på brukerens alder, gir en tilbakemelding om hen kan kjøre bil (18 år eller eldre). 
Kanskje noen bør velge sykkel (7-17 år), trehjulssykkel (2-6 år) eller rullator (over 70 år) i stedet for bil? 
(Her får du bruk for valgsetning)
*/
window.onload = oppstart;

function oppstart(){
    document.querySelector("#sendKnapp").onclick = sjekkAlder;
}

function sjekkAlder(){
    //deklarere variabler alder
    let alder = document.querySelector("#alder").value;
    //dersom alder < 0
    if(alder < 0){
        //skriv feilmelding - pos.tall
        document.querySelector("#utskrift").innerHTML = "Skriv inn et positivt tall"
    }
    //dersom alder > 70 
    else if(alder > 70){
        //skriv tilbakemelding - rullator
        document.querySelector("#utskrift").innerHTML = "Finn fram rullatoren"
    }
    //dersom alder > 18
    else if(alder >= 18){
        //skriv tilbakemelding - bil
        document.querySelector("#utskrift").innerHTML = "Du er i riktig alder til å kjøre bil"
    }
    //dersom alder >= 7
    else if(alder >= 7){
        //skriv tilbakemelding - sykkel
        document.querySelector("#utskrift").innerHTML = "ung og sprek - sykle til skolen"
    }
    //ellers
    else{
        //skriv tilbakemelding - trehjulssykkel
        document.querySelector("#utskrift").innerHTML = "Tre hjul fungerer også. Pass opp for bilene"
    }
}