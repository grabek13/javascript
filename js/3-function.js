/*function wyswietlImie(imie) {
    return imie;
}

console.log(wyswietlImie("Adam"));*/

//ES6 functions

// = jeden parametr

/*let wyswietlImie = imie => imie;

console.log(wyswietlImie("Adam"));*/

// wiceje niz jeden parametr 

let wyswietlImie = (imie1, imie2) => "imie : " + imie1 + " imie2 " + imie2;

console.log(wyswietlImie("Ala", "Adam"));

let wyswietlImie = (imie1, imie2) => {
    
    return "imie : " + imie1 + " imie2 " + imie2;
}

console.log(wyswietlImie("Ala", "Adam"));