var szam = 0;
function osszesOszto(szam) {
    var osztok = [];
    for (var aktoszto = 1; aktoszto <= szam; aktoszto++) {
        if (szam % aktoszto == 0) {
            osztok.push(aktoszto);
        }
    }
    return osztok;
}
var szamtomb = [];
function parosDarab(szamtomb) {
    var db = 0;
    for (var i = 0; i < szamtomb.length; i++) {
        if (szamtomb[i] % 2 == 0) {
            db++;
        }
    }
    return db;
}
function fordito() {
    var szoveg = "";
    return szoveg;
}
function fuggvenyhivasPalindrom(fuggveny) {
    var valasz = true;
    var szoveg1 = "";
    szoveg1 = fordito().toString().toLowerCase();
    for (var i = 0; i < szoveg1.length; i++) {
        var aktkar1 = szoveg1.charAt(i);
        if (aktkar1 == " ") {
            aktkar1 = "";
        }
        var szoveg2 = szoveg1;
        for (var i_1 = 0; i_1 < szoveg1.length; i_1++) {
            var aktkar2 = szoveg1.charAt(szoveg1.length - i_1);
            // szoveg2.charAt(i) = aktkar2;
        }
        // eddig jutottam, itt tulbonyolitottam
    }
    return valasz;
}
