var ProductPage = require(pageObjectDir + "/productPage.js");

var productPage = new ProductPage();

var EC = protractor.ExpectedConditions;

describe('Protractor Demo App', function () {

    //fit wykonuje jeden przypdek testowy
    fit('chose size, add to chart and checking if cart contains the product', function () {
        //szybko ustawiam sie w kontekst ktory mnie interesuje - strona produktu
        browser.get('http://automationpractice.com/index.php?id_product=1&controller=product');

        productPage.sizeM.click();
        productPage.addToCartButton.click();

        //browser.wait(argument pierwszy jest wyrazeniem expected condition który jest czescią protractor API - zwraca on wartosc boolean ktora przerywa czekanie i mozemy przejsc dalej. Drugi argument mowi nam o czasie w ktorym czekanie zostanie przerwane i przejdziemy dalej)
        browser.wait(EC.visibilityOf(productPage.textInPopup), 5000)
            .then(function () {
                expect(productPage.textInPopup.getText()).toEqual("wreszcie to złapałem");
            })
        
    });

    it('chose size, add to chart and checking if cart contains the product', function () {
        //szybko ustawiam sie w kontekst ktory mnie interesuje - strona produktu
        browser.get('http://automationpractice.com/index.php?id_product=1&controller=product');

        productPage.sizeM.click();
        productPage.addToCartButton.click();

        //browser.wait(argument pierwszy jest wyrazeniem expected condition który jest czescią protractor API - zwraca on wartosc boolean ktora przerywa czekanie i mozemy przejsc dalej. Drugi argument mowi nam o czasie w ktorym czekanie zostanie przerwane i przejdziemy dalej)
        browser.wait(EC.visibilityOf(productPage.headerTextInPopup), 5000)
            .then(function () {
                expect(productPage.getPopupText()).toEqual("bez opakowania w promisa zwróciłem funkcje ktora sama w sobie jest promisem");
            })
    });

    it('chose size, add to chart and checking if cart contains the product', function () {
        //szybko ustawiam sie w kontekst ktory mnie interesuje - strona produktu
        browser.get('http://automationpractice.com/index.php?id_product=1&controller=product');

        productPage.sizeM.click();
        productPage.addToCartButton.click();

        //browser.wait(argument pierwszy jest wyrazeniem expected condition który jest czescią protractor API - zwraca on wartosc boolean ktora przerywa czekanie i mozemy przejsc dalej. Drugi argument mowi nam o czasie w ktorym czekanie zostanie przerwane i przejdziemy dalej)
        browser.wait(EC.visibilityOf(productPage.headerTextInPopup), 5000)
            .then(function () {
                expect(productPage.getRichPopupText()).toEqual("przykład w którym opakowałem modyfikacje tekstu w promisa - return new promise");
            })
    });

    it('chose size, add to chart and checking if cart contains the product', function () {
        //szybko ustawiam sie w kontekst ktory mnie interesuje - strona produktu
        browser.get('http://automationpractice.com/index.php?id_product=1&controller=product');

        productPage.sizeM.click();
        productPage.addToCartButton.click();

        //browser.wait(argument pierwszy jest wyrazeniem expected condition który jest czescią protractor API - zwraca on wartosc boolean ktora przerywa czekanie i mozemy przejsc dalej. Drugi argument mowi nam o czasie w ktorym czekanie zostanie przerwane i przejdziemy dalej)
        browser.wait(EC.visibilityOf(productPage.headerTextInPopup), 5000)
            .then(function () {
                expect(productPage.getUndefinedPopupText()).toEqual("przykład w którym nie opakowałem modyfikacji tekstu w promisa");
            })
    });


});