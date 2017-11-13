var WomenDressesPage = function () {
    this.URL = 'http://automationpractice.com/index.php?id_category=8&controller=category';
    this.pageTitle = 'Dresses - My Store';

    this.productContainer = $$('div.product-container'); //element.all(by.css('.abc')) is equivalent to $$('.abc')

    /*
    use that selectors after product container selector - this is relative path to particular elements.
    */
    this.priceFromContainer = $('div>div>span.price.product-price');
    this.productDescFromContainer = $('div>h5>a.product-name');

}
WomenDressesPage.prototype.get = function () {
    var that = this;
    browser.get(that.URL);
};

WomenDressesPage.prototype.isLoaded = function () {
    var that = this;
    return browser.getCurrentUrl().then(function (currentURL) {
        return browser.getTitle().then(function (currentTitle) {
            return currentURL == that.URL && currentTitle == that.pageTitle
        });
    });
}
WomenDressesPage.prototype.getProductName = function (noOfElement) {
    var that = this;
    var productLocator = that.productDescFromContainer;
    return that.productContainer.then(function (elements) {
        return elements[noOfElement].$('div>h5>a.product-name').getText();
    });
}
WomenDressesPage.prototype.getProductPrice = function (noOfElement) {
    var that = this;
    var productLocator = that.productDescFromContainer;
    return that.productContainer.get(noOfElement).$$('div>div>span.price.product-price').last().getText();
// });
}   
WomenDressesPage.prototype.clickOnProduct = function (noOfElement) {
    var that = this;
    var productLocator = that.productDescFromContainer;
    return that.productContainer.then(function (elements) {
        return elements[noOfElement].$('div>h5>a.product-name').click();;
    });
}



module.exports = WomenDressesPage;