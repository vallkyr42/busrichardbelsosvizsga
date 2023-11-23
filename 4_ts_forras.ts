var szam: number = 0;
function osszesOszto(szam: number): number[] {
    var osztok: number[] = [];
    for (let aktoszto: number = 1; aktoszto <= szam; aktoszto++) {
        if (szam % aktoszto == 0) {
            osztok.push(aktoszto);
        }
    }

    return osztok;
}

var szamtomb: number[] = [];
function parosDarab(szamtomb: number[]): number {
    var db: number = 0;
    for (let i: number = 0; i < szamtomb.length; i++) {
        if (szamtomb[i] % 2 == 0) {
            db++;
        }
    }
    return db;
}

function fordito(): string {
    var szoveg: string = "";

    return szoveg;
}

function fuggvenyhivasPalindrom(fuggveny: Function): boolean {
    var valasz: boolean = true;
    var szoveg1: string = "";
    szoveg1 = fordito().toString().toLowerCase();
   
    for (let i: number = 0; i < szoveg1.length; i++) {
        var aktkar1: string = szoveg1.charAt(i);

        if (aktkar1 == " ") {
            aktkar1 = "";


        }
        var szoveg2: string = szoveg1;

        for (let i: number = 0; i < szoveg1.length; i++) {
            var aktkar2: string = szoveg1.charAt(szoveg1.length - i);
           // szoveg2.charAt(i) = aktkar2;
        }
        // eddig jutottam, itt tulbonyolitottam
    }


    return valasz;
}