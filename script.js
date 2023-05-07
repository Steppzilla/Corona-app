
zahlenBerechnen();

function zahlenBerechnen() {
    inz = document.querySelector("#inzidenz").value;
    spez = document.querySelector("#spezifität").value; //Gesunde tatsächlich gesund
    sens = document.querySelector("#sensitivität").value; //Kranke tatsächlich krank
    einw = document.querySelector("#einwohner").value;
    dauer = document.querySelector("#dauerkrank").value;
    //testAnz=document.querySelector("#testAnzahl").value;

    let anteilKrank = inz * dauer / 100000;

    let anzahlKrank = einw * anteilKrank; //echt krank
    let anzahlGesund = einw - anzahlKrank; //echt gesund

    let testEchtGesund = anzahlGesund * spez; //korrekt negatives Ergebnis
    let falschKrank = anzahlGesund - testEchtGesund; //falsch negativ, eigentlich krank aber Test gesund

    //------------------------------------------------sensitivität-tabelle

    let testEchtKrank = anzahlKrank * sens; //korrekt positives Ergebnis
    let falschGesund = anzahlKrank- testEchtKrank //falsch positiv, eigentlich gesund, aber Test krank


    let testGesund = falschGesund + testEchtGesund;
    let testKrank = falschKrank + testEchtKrank;

    //Die Inzidenz ist oft zu gering, um die falsch positiven darzulegen. Dann stimmt die summe der Kranken nicht .

    //wenn diese nicht stimmt wird ein weiterer Test eingefügt bzw berechnet, wie oft man mit dem selben Test erneut testen müsste, um auf diese Ergebnisse zu kommen, die im
    //täglichen Lagebericht stehen. (Unter Annahme alle Menschen würden getestet werden) und keiner mehrfach in die Statistik eingehen, was leider getan wird.

   // document.getElementById("inzidenz").value = Math.round(inz);

    document.getElementById("feldEinwohner").innerHTML = Math.round(einw);
    document.getElementById("feldK").innerHTML = Math.round(anzahlKrank);
    document.getElementById("feldG").innerHTML = Math.round(anzahlGesund).toString();
    //spezifität: Von den Gesunden sind diese auch wirklich negativ getestet
    document.getElementById("feldG_TG").innerHTML = Math.round(testEchtGesund);
    document.getElementById("feldG_TK").innerHTML = Math.round(falschKrank);

    //Sensitivität: Von den Kranken werden diese korrekt krank, also mit pos test erkannt:
    document.getElementById("feldK_TK").innerHTML = Math.round(testEchtKrank);
    document.getElementById("feldK_TG").innerHTML = Math.round(falschGesund);

    document.getElementById("feldTK").innerHTML = Math.round(testKrank);
    document.getElementById("feldTG").innerHTML = Math.round(testGesund);


    //document.getElementById("mindestInzidenz").innerHTML= Math.round(mindestInzidenz);

    //Spans noch füllen //
    document.getElementById("G_TK").innerHTML = Math.round(falschKrank);
    document.getElementById("K_TG").innerHTML = Math.round(falschGesund);


    console.log("ende");


}


document.querySelector("#inzidenz").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        zahlenBerechnen();
    }

});

document.querySelector("#spezifität").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {

        zahlenBerechnen();
    }

});

document.querySelector("#sensitivität").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {

        zahlenBerechnen();
    }

});
document.querySelector("#einwohner").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        zahlenBerechnen();
    }

});
document.querySelector("#dauerkrank").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        zahlenBerechnen();
    }

});

function cochraine(zahl){
    console.log("bin drin")
    console.log(zahl)

    if(zahl==0){//ohne symptome
        console.log("zahl is null");
         document.querySelector("#inzidenz").setAttribute('value',"250");
         document.querySelector("#spezifität").setAttribute('value',"0.997"); //Gesunde tatsächlich gesund
         document.querySelector("#sensitivität").setAttribute('value',"0.64"); //Kranke tatsächlich krank
         document.querySelector("#einwohner").setAttribute('value',"10000");
         document.querySelector("#dauerkrank").setAttribute('value',"2");
         zahlenBerechnen();
    }
    if(zahl==1){
        document.querySelector("#inzidenz").setAttribute('value',"2500"); //mit symptomen
        document.querySelector("#spezifität").setAttribute('value',"0.995"); //Gesunde tatsächlich gesund
        document.querySelector("#sensitivität").setAttribute('value',"0.80"); //Kranke tatsächlich krank
        document.querySelector("#einwohner").setAttribute('value',"1000");
        document.querySelector("#dauerkrank").setAttribute('value',"2");
        zahlenBerechnen();

    }


}

function genauerSchnellTest(){
    document.querySelector("#inzidenz").setAttribute('value',"500"); //mit symptomen
    document.querySelector("#spezifität").setAttribute('value',"0.9968"); //Gesunde tatsächlich gesund
    document.querySelector("#sensitivität").setAttribute('value',"0.98"); //Kranke tatsächlich krank
    document.querySelector("#einwohner").setAttribute('value',"10000");
    document.querySelector("#dauerkrank").setAttribute('value',"2");
    zahlenBerechnen();
}

function schlechterSchnellTest(){
    document.querySelector("#inzidenz").setAttribute('value',"100"); //mit symptomen
    document.querySelector("#spezifität").setAttribute('value',"0.99"); //Gesunde tatsächlich gesund
    document.querySelector("#sensitivität").setAttribute('value',"0.75"); //Kranke tatsächlich krank
    document.querySelector("#einwohner").setAttribute('value',"10000");
    document.querySelector("#dauerkrank").setAttribute('value',"2");
    zahlenBerechnen();
}

function markiereFeld(feldID){
    document.getElementById(feldID).classList.add("highlight");

    setTimeout(function () {
            document.getElementById(feldID).classList.remove("highlight");

    }, 1000);

}
