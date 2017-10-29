var HomePage = require(pageObjectDir + "/homePage.js"),
    WomenPage = require(pageObjectDir + "/womenPage.js"),
    WomenTopsPage = require(pageObjectDir + "/womenTopsPage.js"),
    WomenTopsProductPage = require(pageObjectDir + "/womenTopsProductPage.js"),
    CartPage = require(pageObjectDir + "/cartPage.js"),
    homePage = new HomePage(),
    womenPage = new WomenPage(),
    womenTopsPage = new WomenTopsPage(),
    womenTopsProductPage = new WomenTopsProductPage(),
    cartPage = new CartPage(),
    price;

beforeAll(function () {
    browser.get(homePage.URL);
})

describe('Protractor: http://automationpractice.com \n E2E test - adding item to shoping cart.', function () {
    it("Check if 'Women - My Store' page is displayed?", function () {
        homePage.clickOnWomenTab();
        expect(womenPage.isLoaded())
            .toBe(true);
    })

    it('Check if \'Tops - My Store\' page is displayed?', function () {
        womenPage.clickCategoryTopButton();
        expect(womenTopsPage.isLoaded())
            .toBe(true);
    })

    it('Check if \'Faded Short Sleeve T-shirts - My Store\' page is displayed?', function () {
        womenTopsPage.clickFadedLongSleeveTshirtButton();
        expect(browser.getTitle())
            .toEqual('Faded Short Sleeve T-shirts - My Store');
    })

    it('Is description longer than \'8\' characters?', function () {
        expect(womenTopsProductPage.getProductDescriptionLength())
            .toBeGreaterThan(8);
    })

    it('Is condition \'New\'?', function () {
        expect(womenTopsProductPage.getProductCondition())
            .toEqual('New');
    })

    it('Add product in \'M\' size to the basket and go to the basket', function () {
        price = womenTopsProductPage.getProductPrice();
        womenTopsProductPage.selectSizeM();
        womenTopsProductPage.submitToCartButtonForm();
        womenTopsProductPage.clickCartButton();

        expect(cartPage.isLoaded())
            .toBeTruthy();
    })

    it('Check if the product is in the basket', function () {
        expect(cartPage.getProductDescriptionText())
            .toEqual('Faded Short Sleeve T-shirts');
    })
    it('Check if the product in the basket has correct price', function () {
        expect(cartPage.getProductPrice())
            .toEqual(price);
    })
});