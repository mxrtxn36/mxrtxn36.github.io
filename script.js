const hely1 = document.getElementById("hely1");
const hely2 = document.getElementById("hely2");
const hely3 = document.getElementById("hely3");
const hely4 = document.getElementById("hely4");
const hely5 = document.getElementById("hely5");
const hely6 = document.getElementById("hely6");
const hely7 = document.getElementById("hely7");
const hely8 = document.getElementById("hely8");
const hely9 = document.getElementById("hely9");
const randomGomb = document.getElementById("randomGomb");


function feherHely() {
    let kepHely = "";
    let i = 1;
    do {
        var tesztNev = `hely${i}`;
        kepHely = eval(tesztNev).getAttribute("src");
        i++;
    } while (kepHely != "szamok/white.svg");
    return i-1;
}

function ottLevoSzamSrc(szamHelySzama){
    const tesztNev = `hely${szamHelySzama}`;
    const szamSrc = eval(tesztNev).getAttribute("src");
    return szamSrc;
}

function helyCsereFeherrel(hanyasraKattintott, elsoSzam, masodikSzam, harmadikSzam, negyedikSzam) {
    const feherSzama = feherHely();
    if (feherSzama == elsoSzam || feherSzama == masodikSzam || feherSzama == harmadikSzam || feherSzama == negyedikSzam) {
        eval(`hely${feherSzama}`).setAttribute("src", ottLevoSzamSrc(hanyasraKattintott));
        eval(`hely${hanyasraKattintott}`).setAttribute("src", "szamok/white.svg");
    }
}

szamTomb = [1,2,3,4,5,6,7,8]

function tombRandomizalo(tomb) {
    for(let i = tomb.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i);
        const temp = tomb[i];
        tomb[i] = tomb[j];
        tomb[j] = temp;
    }
    
    return tomb;
}

function helyFeltoltes(randomTomb) {
    for (let i = 1; i < 9; i++) {
        eval(`hely${i}`).setAttribute("src", `szamok/${randomTomb[i-1]}.svg`);
    }
    hely9.setAttribute("src", "szamok/white.svg")
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
//telefonon jobb
hely1.addEventListener("drag", () => {helyCsereFeherrel(1,2,4);});
hely2.addEventListener("drag", () => {helyCsereFeherrel(2,1,3,5);});
hely3.addEventListener("drag", () => {helyCsereFeherrel(3,2,6);});
hely4.addEventListener("drag", () => {helyCsereFeherrel(4,1,5,7);});
hely5.addEventListener("drag", () => {helyCsereFeherrel(5,2,4,6,8);});
hely6.addEventListener("drag", () => {helyCsereFeherrel(6,3,5,9);});
hely7.addEventListener("drag", () => {helyCsereFeherrel(7,4,8);});
hely8.addEventListener("drag", () => {helyCsereFeherrel(8,5,7,9);});
hely9.addEventListener("drag", () => {helyCsereFeherrel(9,6,8);});

randomGomb.addEventListener("click", () => {helyFeltoltes(tombRandomizalo(szamTomb));})
