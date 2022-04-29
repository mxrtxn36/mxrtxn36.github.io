const hely1 = document.getElementById("hely1");
const hely2 = document.getElementById("hely2");
const hely3 = document.getElementById("hely3");
const hely4 = document.getElementById("hely4");
const hely5 = document.getElementById("hely5");
const hely6 = document.getElementById("hely6");
const hely7 = document.getElementById("hely7");
const hely8 = document.getElementById("hely8");
const hely9 = document.getElementById("hely9");


function gombLenyomas(key) {
    switch (key) {
        case "ArrowRight":
            break;
        case "ArrowLeft":
            break;
        case "ArrowUp":
            break;
        case "ArrowDown":
            break;
        default:
            console.log("other key pressed ignored");
            break;
    }
}

addEventListener("keydown", function(){gombLenyomas(event.key)});


function feherHely() {
    let kepHely = "";
    let i = 1;
    do {
        var tesztNev = `hely${i}`;
//        console.log(tesztNev);
        kepHely = eval(tesztNev).getAttribute("src");
//        console.log(kepHely);
        i++;
    } while (kepHely != "szamok/white.svg");
    return i-1;
}

function ottLevoSzamSrc(szamHelySzama){
    const tesztNev = `hely${szamHelySzama}`;
    const szamSrc = eval(tesztNev).getAttribute("src");
    console.log("return: " + szamSrc);
    return szamSrc;
}

function helyCsereFeherrel(hanyasraKattintott, elsoSzam, masodikSzam, harmadikSzam, negyedikSzam) {
    const feherSzama = feherHely();
    let feherreCsere = `szamok/${feherSzama}.svg`;
    let kattintasCsere = `szamok/${hanyasraKattintott}.svg`
    if (feherSzama == elsoSzam|| feherSzama == masodikSzam || feherSzama == harmadikSzam || feherSzama == negyedikSzam) {
        eval(`hely${feherSzama}`).setAttribute("src", ottLevoSzamSrc(hanyasraKattintott));
        eval(`hely${hanyasraKattintott}`).setAttribute("src", "szamok/white.svg");
//        console.log(`hely${hanyasraKattintott}`);
        // console.log(" a fehér száma: " + feherSzama);
        // console.log("ottLevoSzamSrc: " + ottLevoSzamSrc(feherSzama));
        // console.log("hanyasrakattintott " + hanyasraKattintott)
    }
}


hely1.addEventListener("click", () => {helyCsereFeherrel(1,2,4);});
hely2.addEventListener("click", () => {helyCsereFeherrel(2,1,3,5);});
hely3.addEventListener("click", () => {helyCsereFeherrel(3,2,6);});
hely4.addEventListener("click", () => {helyCsereFeherrel(4,1,5,7);});
hely5.addEventListener("click", () => {helyCsereFeherrel(5,2,4,6,8);});
hely6.addEventListener("click", () => {helyCsereFeherrel(6,3,5,9);});
hely7.addEventListener("click", () => {helyCsereFeherrel(7,4,8);});
hely8.addEventListener("click", () => {helyCsereFeherrel(8,5,7,9);});
hely9.addEventListener("click", () => {helyCsereFeherrel(9,6,8);});
