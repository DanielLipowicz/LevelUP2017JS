1. Jako właściciel sklepu chcialbym się dowiedzieć czy sklep internetpowy poprawnie dodaje produkty do koszyka oraz poprawnie wylicza cene - oto przypadek testowy stworzony przez testera:

Wejsc na strone http://automationpractice.com
Otworzyć dział damski – zwalidować czy na pewno jesteśmy na odpowiedniej stronie
Otworzyć dział topy – zwalidowac
Otworzyć Faded Short Sleeve T-shirts
Na stronie produktu spawrdzić czy opis zawiera wiecej niż 8 znaków i czy stan jest „new”
Dodać produkt w rozmiarze m do koszyka
Przejsc do koszyka
Sprawdzić czy znajduje się tam produkt

zmodyfikuj scenariusz tak aby spełniał dobre praktyki testu automatycznego E2E

można wzbogacić test o dodatkowe walidacje np. inne produkty

2. Stwórz scenariusz testowy który sprawdza czy wszystkie produkty z działu dresses otwierejają się poprawnie posiadają odpowiednią nazwę oraz odpowiednią cene (nie zmienioną ze stanem faktycznym).

Stwórz taki scenariusz który bedzie zgody z dobrymi praktykami testu automatycznego funkcjonalnego


3. opcjonalny - Scenariusz związany z angularem który zostanie przygotowany jeśli materiał z angularem zostanie zrealizowany w przyzwoitym czasie

<b>dla ambitnych<b>
*zmodyfikuj konfiguracje testów tak aby wykonac je na dwóch różnych przeglądarkach

*zmodyfikuj konfiguracje testów tak aby wykonac je na wielu instancjach przegladarki jednocześnie

**w zadaniu z opisem sprawdź czy nazwa pasuje jak zwrotka z poniższej funkcji - powinno pasować

var itemDescriptionSource = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                resolve("Faded Short Sleeve T-shirts");
            }, 5000)
    });
};