let tablica = ["Adam", "łukasz", "Andrzej"];
console.log(tablica);
tablica[0] = "Karolina";
console.log(tablica);

tablica.push("Michał"); // wstawia element na koncu
tablica.unshift("Anna"); // wstawia element na poczatku

tablica.shift(); //Usuwa element na początku
tablica.pop(); // Usuwa element z końca

tablica.splice(1,"","Roksana");

console.log(tablica.indexOf("Michał"));
console.log(tablica);