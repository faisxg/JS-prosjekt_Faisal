let sample =[ 
    [new Audio("lyder/E.mp3"), new Audio("lyder/Dm.mp3"), new Audio("lyder/D.mp3"), new Audio("lyder/Cm.mp3"), new Audio("lyder/C.mp3"), new Audio("lyder/B.mp3"), new Audio("lyder/Am.mp3"), new Audio("lyder/A.mp3"), new Audio("lyder/Gm.mp3"), new Audio("lyder/G.mp3"), new Audio("lyder/Fm.mp3"), new Audio("lyder/F.mp3"), new Audio("lyder/E2.mp3"), new Audio("lyder/Dm2.mp3"), new Audio("lyder/D2.mp3")], 
    [new Audio("lyder2/E.mp3"), new Audio("lyder2/Dm.mp3"), new Audio("lyder2/D.mp3"), new Audio("lyder2/Cm.mp3"), new Audio("lyder2/C.mp3"), new Audio("lyder2/B.mp3"), new Audio("lyder2/Am.mp3"), new Audio("lyder2/A.mp3"), new Audio("lyder2/Gm.mp3"), new Audio("lyder2/G.mp3"), new Audio("lyder2/Fm.mp3"), new Audio("lyder2/F.mp3"), new Audio("lyder2/E2.mp3"), new Audio("lyder2/Dm2.mp3"), new Audio("lyder2/D2.mp3")]
];

let button = document.getElementById("Switch");

let arrayNr = 0

// https://www.w3schools.com/js/js_htmldom_css.asp (hjalp med å finne ut hvordan jeg kan endre css gjennom js)

let Mode = ["Mode: Classic", "Mode: Synth"]
let Background = ["url(bilder/wood2.jpg)", "url(bilder/synth.jpg)"]

button.addEventListener("click", function (change) {
    arrayNr = arrayNr + 1;
    if (arrayNr > 1) {
        arrayNr = 0
    };
    document.getElementById("Mode").innerText = Mode[arrayNr];
    document.getElementById("body").style.backgroundImage = Background[arrayNr];
})

document.addEventListener("keydown", function (event) {
    function Play(tangentNr) {
        sample[arrayNr][tangentNr].currentTime = 0;
        sample[arrayNr][tangentNr].play();
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

