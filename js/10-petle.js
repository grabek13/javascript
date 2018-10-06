//let number = 10;
//
//for(let i = 0; i <= number; i++) {
//    console.log(i);
//}

/*let tablica = ["Ania", "Konrad", "Mateusz"];

tablica.forEach(function(element, index) {
    console.log("Imie " + element + " znajduje sie pod indexem " + index);
});*/

let number = 10;
let index = 0
while(number > 0) {
    console.log(--number);
}

let adam = {wiek: 100, wlosy: false, oczy: true};

for (let i in adam) {
    console.log("klucz " + i + " wartosc " + adam[i]);
}