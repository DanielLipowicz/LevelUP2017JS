var WomenDressesPage = require(pageObjectDir + "/womenDressesPage.js"),
    womenDressesPage = new WomenDressesPage(),
    WomenDressesProductPage = require(pageObjectDir + "/womenDressesProductPage.js"),
    womenDressesProductPage = new WomenDressesProductPage(),

    dataHC = {
        "dress1": {
            "orderOnPage": 0,
            'name': 'Printed Dress',
            'price': '$26.00',
        },
        "dress2": {
            "orderOnPage": 1,
            'name' : 'Printed Dress',
            'price' : '$50.99',
        },
        "dress3": {
            "orderOnPage": 2,
            'name' : 'Printed Summer Dress',
            'price' : '$28.98',
        },
        "dress4": {
            "orderOnPage": 3,
            'name' : 'Printed Summer Dress',
            'price' : '$30.50',
        },
        "dress5": {
            "orderOnPage": 4,
            'name' : 'Printed Chiffon Dress',
            'price' : '$16.40',
        }
    };

beforeAll(function () {

})

describe('Protractor: http://automationpractice.com, ex2 - dataDriven', function () {
    using(dataHC, function (tc) {
        it('Go and Check if \'Dresses - My Store\' page is displayed?', function () {
            womenDressesPage.get();
            expect(womenDressesPage.isLoaded())
                .toBeTruthy();
        })
        it('Check if \'' + tc.name + '\' matches product description', function () {
            expect(womenDressesPage.getProductName(tc.orderOnPage)).toEqual(tc.name);
        })
        it('Check if \'' + tc.price + '\' matches product price', function () {
            expect(womenDressesPage.getProductPrice(tc.orderOnPage))
                .toEqual(tc.price);
        })
        it('Check if \'' + tc.name + '\' page is displayed?', function () {
            womenDressesPage.clickOnProduct(tc.orderOnPage)
            expect(browser.getTitle())
                .toEqual('' + tc.name + ' - My Store');
        })
        it('Check if \'' + tc.name + '\' matches product description', function () {
            expect(womenDressesProductPage.getProductDescription())
                .toEqual(tc.name);
        })
        it('Check if \'' + tc.price + '\' matches product price on product page.', function () {
            expect(womenDressesProductPage.getProductPrice())
                .toEqual(tc.price);
        })
        it('Check if \'Dresses - My Store\' page is displayed?', function () {
            womenDressesProductPage.clickDressesMenuButton();
            expect(womenDressesPage.isLoaded())
                .toBeTruthy();
        })
    })
}) 