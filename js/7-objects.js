class Osoba {
    constructor(imie, nazwisko, wiek, kolorOczu) {
        this.name = imie;
        this.surname = nazwisko;
        this.age = wiek;
        this.eyeColor = kolorOczu;
    }
    printInfo() {
        let info = `Name: ${this.name}, last name: ${this.surname}, wiek: ${this.age}`;
        console.log(info);
    }
}

let mateusz = new Osoba("mateusz", "Górski");
/*mateusz.age = 30;

mateusz.kolorOczu = "zielony";*/

let lukasz = new Osoba("łukasz", "Nowak", 26, "piwny");
console.log(lukasz.age, lukasz.eyeColor);

lukasz.printInfo();
