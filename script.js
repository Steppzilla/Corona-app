let clickCounter = 1;

zahlenBerechnen();
aufgabeWaehlen(1, 'Dauer der Krankheit');
function zahlenBerechnen() {
    let inz = document.getElementById("inzidenz").value;
    let spez = document.getElementById("spezifität").value; //Gesunde tatsächlich gesund
    let sens = document.getElementById("sensitivität").value; //Kranke tatsächlich krank
    let einw = document.getElementById("einwohner").value;
    let dauer = document.getElementById("dauerkrank").value;

    let anteilKrank = inz * dauer / 100000;

    let anzahlKrank = einw * anteilKrank; //echt krank
    let anzahlGesund = einw - anzahlKrank; //echt gesund

    let testEchtGesund = anzahlGesund * spez; //korrekt negatives Ergebnis (spezifität)
    let falschKrank = anzahlGesund - testEchtGesund; //falsch negativ, eigentlich krank aber Test gesund

    let testEchtKrank = anzahlKrank * sens; //korrekt positives Ergebnis (sensitivität)
    let falschGesund = anzahlKrank - testEchtKrank //falsch positiv, eigentlich gesund, aber Test krank


    let testGesund = falschGesund + testEchtGesund;
    let testKrank = falschKrank + testEchtKrank;

    // alles runden:
    einw = Math.round(einw).toString();
    anzahlKrank = Math.round(anzahlKrank).toString();
    anzahlGesund = Math.round(anzahlGesund).toString();
    testEchtGesund = Math.round(testEchtGesund).toString();
    falschKrank = Math.round(falschKrank).toString();
    testEchtKrank = Math.round(testEchtKrank).toString();
    falschGesund = Math.round(falschGesund).toString();
    testKrank = Math.round(testKrank).toString();
    testGesund = Math.round(testGesund).toString();

    // TABELLE Füllen:

    document.getElementById("feldEinwohner").innerHTML = einw;
    document.getElementById("feldK").innerHTML = anzahlKrank;
    document.getElementById("feldG").innerHTML = anzahlGesund;
    //spezifität: Von den Gesunden sind diese auch wirklich negativ getestet
    document.getElementById("feldG_TG").innerHTML = testEchtGesund;
    document.getElementById("feldG_TK").innerHTML = falschKrank;
    //Sensitivität: Von den Kranken werden diese korrekt krank, also mit pos test erkannt:
    document.getElementById("feldK_TK").innerHTML = testEchtKrank;
    document.getElementById("feldK_TG").innerHTML = falschGesund;
//Summen:
    document.getElementById("feldTK").innerHTML = testKrank;
    document.getElementById("feldTG").innerHTML = testGesund;

    //Spans noch füllen //
    document.getElementById("G_TK").innerHTML = falschKrank;
    document.getElementById("K_TG").innerHTML = falschGesund;
}


document.getElementById("inzidenz").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        zahlenBerechnen();
    }

});

document.getElementById("spezifität").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        zahlenBerechnen();
    }
});

document.getElementById("sensitivität").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {

        zahlenBerechnen();
    }

});
document.getElementById("einwohner").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        zahlenBerechnen();
    }

});
document.getElementById("dauerkrank").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        zahlenBerechnen();
    }

});

function cochraine(zahl) {

    if (zahl === 0) {//ohne symptome
        document.getElementById("inzidenz").value= "250";
        document.getElementById("spezifität").value= "0.997";
        document.getElementById("sensitivität").value= "0.64";
        document.getElementById("einwohner").value= "10000";
        document.getElementById("dauerkrank").value= "2";

        zahlenBerechnen();
    }
    if (zahl === 1) {
        document.getElementById("inzidenz").value= "2500";
        document.getElementById("spezifität").value= "0.995";
        document.getElementById("sensitivität").value= "0.80";
        document.getElementById("einwohner").value= "1000";
        document.getElementById("dauerkrank").value= "2";

        zahlenBerechnen();

    }
}

function genauerSchnellTest() {
    document.getElementById("inzidenz").value= "500";//mit symptomen
    document.getElementById("spezifität").value= "0.9968";
    document.getElementById("sensitivität").value= "0.98";
    document.getElementById("einwohner").value= "10000";
    document.getElementById("dauerkrank").value= "2";

    zahlenBerechnen();
}

function schlechterSchnellTest() {
    document.getElementById("inzidenz").value= "100";//mit symptomen
    document.getElementById("spezifität").value= "0.99";
    document.getElementById("sensitivität").value= "0.75";
    document.getElementById("einwohner").value= "10000";
    document.getElementById("dauerkrank").value= "2";

    zahlenBerechnen();
}

function markiereFeld(feldID) {
    document.getElementById(feldID).classList.add("highlight");

    setTimeout(function () {
        document.getElementById(feldID).classList.remove("highlight");

    }, 1000);

}

function aufgabeWaehlen(nr, titel){
    for(var i=1; i<=17; i++){
        document.getElementById("aufgabe"+i).classList.add("unsichtbar");
    }
    document.getElementById("aufgabe"+nr).classList.remove("unsichtbar");
    document.getElementById("ueberschrift").innerHTML = nr.toString() + ") " + titel;

}






