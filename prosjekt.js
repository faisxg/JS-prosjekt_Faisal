// Lydfilene mine:

const sample =[ 
    [new Audio("lyder/E.mp3"), new Audio("lyder/Dm.mp3"), new Audio("lyder/D.mp3"), new Audio("lyder/Cm.mp3"), new Audio("lyder/C.mp3"), new Audio("lyder/B.mp3"), new Audio("lyder/Am.mp3"), new Audio("lyder/A.mp3"), new Audio("lyder/Gm.mp3"), new Audio("lyder/G.mp3"), new Audio("lyder/Fm.mp3"), new Audio("lyder/F.mp3"), new Audio("lyder/E2.mp3"), new Audio("lyder/Dm2.mp3"), new Audio("lyder/D2.mp3")], 
    [new Audio("lyder2/E.mp3"), new Audio("lyder2/Dm.mp3"), new Audio("lyder2/D.mp3"), new Audio("lyder2/Cm.mp3"), new Audio("lyder2/C.mp3"), new Audio("lyder2/B.mp3"), new Audio("lyder2/Am.mp3"), new Audio("lyder2/A.mp3"), new Audio("lyder2/Gm.mp3"), new Audio("lyder2/G.mp3"), new Audio("lyder2/Fm.mp3"), new Audio("lyder2/F.mp3"), new Audio("lyder2/E2.mp3"), new Audio("lyder2/Dm2.mp3"), new Audio("lyder2/D2.mp3")]
]; 
let arrayNr = 0;

let button = document.getElementById("Switch"); 

let Mode = ["Mode: Classic", "Mode: Synth"]; // Ulike moduser som blir plottet inn i HTML-en
let Background = ["url(bilder/wood2.jpg)", "url(bilder/synth.jpg)"]; // Bakgrunnene

// Lyttefunksjon for hver gang knappen der det står "switch mode" trykkes ned. Her lages det en verdi for arrayindekset, og i forhold til dette indekset byttes også bakgrunnen og hvilken modus som oppgis.

button.addEventListener("click", function (change) {
    arrayNr = arrayNr + 1;
    if (arrayNr > 1) {
        arrayNr = 0
    };

    document.getElementById("Mode").innerText = Mode[arrayNr];
    document.getElementById("body").style.backgroundImage = Background[arrayNr]; 
    // https://www.w3schools.com/js/js_htmldom_css.asp (hjalp med å finne ut hvordan jeg kan endre css gjennom js)
})


// Selve funksjonaliteten til pianoet skjer her:

// bruker objekter i array for å definere hvilke noter som er aktive, der aktiv = 1, inaktiv = 0. Sorterer de i følgende rekkefølge pga. da er f. eks. sample[0][14] den samme noten som spiller om du trykker på note "a", begge vil være i den 14ende indeksen. Det gjør da at jeg kan også putte de i den samme generelle funksjonen.

let Noter = [
    {note: "l", aktiv: 0},
    {note: "9", aktiv: 0},
    {note: "k", aktiv: 0},
    {note: "j", aktiv: 0},
    {note: "7", aktiv: 0},
    {note: "h", aktiv: 0},
    {note: "6", aktiv: 0},
    {note: "g", aktiv: 0},
    {note: "5", aktiv: 0},
    {note: "f", aktiv: 0},
    {note: "d", aktiv: 0},
    {note: "3", aktiv: 0},
    {note: "s", aktiv: 0},
    {note: "2", aktiv: 0},
    {note: "a", aktiv: 0},
]

// Her er en lyttefunksjon der den ser etter nedtrykk av taster, det gjelder deretter alle taster. Lager en funksjon som spiller lydene fra den første matrisen basert på en variabel (arrayNr defineres tidligere i koden, skifter basert på om man trykker på switch mode knappen). Denne funksjonen bruker jeg under if-setningene, som sammenlikner nedtrykket tast (event.key), og hvilken tast som er gyldig. Hvis if-setningen går gjennom, vil den kjøre den generelle funksjonen som ble lagd på begynnelsen, her er delen der det var viktig å få like indexer for like noter/tangenter, dette gjør funksjonen mer generell.

document.addEventListener("keydown", function (event) {
    function Play(tangentNr) {
        sample[arrayNr][tangentNr].play();
        Noter[tangentNr].aktiv = 1;
    }
        if (event.key === "a") {
            Play(14);
        }
        if (event.key === "2") {
            Play(13);
        }
        if (event.key === "s") {
            Play(12);
        }
        if (event.key === "3") {
            Play(11);
        }
        if (event.key === "d") {
            Play(10);
        }
        if (event.key === "f") {
            Play(9);
        }
        if (event.key === "5") {
            Play(8);
        }
        if (event.key === "g") {
            Play(7);
        }
        if (event.key === "6") {
            Play(6);
        }
        if (event.key === "h") {
            Play(5);
        }
        if (event.key === "7") {
            Play(4);
        }
        if (event.key === "j") {
            Play(3);
        }
        if (event.key === "k") {
            Play(2);
        }
        if (event.key === "9") {
            Play(1);
        }
        if (event.key === "l") {
            Play(0);
        }
});  

// Her er en lyttefunksjon som vil se etter hvilke noter som er aktive (om Noter[i].aktiv === 1) og vil slutte lyden ved å skippe til slutten (skifter currentTime til 10). For ryddighetens skyld vil den også gjøre de "aktive" (1) notene "inaktive" (0) på slutten av if-setningen, det gir ikke mening at den skal stå på 1 (altså aktiv) etter at den er ute av spill.

document.addEventListener("keyup", function (event) {
    function Release(tangentNr) {
        for (let i = 0; i < Noter.length; i++) {
            
            // KI ga meg en påminnelse om at i en if-setning er det enten == eller === som gjelder. https://chatgpt.com/c/6924db57-19c4-8332-b955-bdd4b7929d6e
            
            if (Noter[i].aktiv === 1) {
                sample[arrayNr][tangentNr].currentTime = 10;
                Noter[tangentNr].aktiv = 0;
            }
        }
    }
    if (event.key === "a") {
        Release(14);
    }
    if (event.key === "2") {
        Release(13);
    }
    if (event.key === "s") {
        Release(12);
    }
    if (event.key === "3") {
        Release(11);
    }
    if (event.key === "d") {
        Release(10);
    }
    if (event.key === "f") {
        Release(9);
    }
    if (event.key === "5") {
        Release(8);
    }
    if (event.key === "g") {
        Release(7);
    }
    if (event.key === "6") {
        Release(6);
    }
    if (event.key === "h") {
        Release(5);
    }
    if (event.key === "7") {
        Release(4);
    }
    if (event.key === "j") {
        Release(3);
    }
    if (event.key === "k") {
        Release(2);
    }
    if (event.key === "9") {
        Release(1);
    }
    if (event.key === "l") {
        Release(0);
    }
})


