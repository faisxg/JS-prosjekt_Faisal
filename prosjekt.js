let sample = [new Audio("lyder/E.mp3"), new Audio("lyder/Dm.mp3"), new Audio("lyder/D.mp3"), new Audio("lyder/Cm.mp3"), new Audio("lyder/C.mp3"), new Audio("lyder/B.mp3"), new Audio("lyder/Am.mp3"), new Audio("lyder/A.mp3"), new Audio("lyder/Gm.mp3"), new Audio("lyder/G.mp3"), new Audio("lyder/Fm.mp3"), new Audio("lyder/F.mp3"), new Audio("lyder/E2.mp3"), new Audio("lyder/Dm2.mp3"), new Audio("lyder/D2.mp3")];

let button = document.getElementById("Switch");

document.addEventListener("keydown", function (event) {
    function Play(tangentNr) {
        sample[tangentNr].currentTime = 0;
        sample[tangentNr].play();
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

