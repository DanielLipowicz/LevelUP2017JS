var CartPage = function(){
    this.URL = 'http://automationpractice.com/index.php?controller=order';
    this.pageTitle = 'Order - My Store';
    this.productDescription = element(by.css('#product_1_3_0_0 > td.cart_description > p > a'));
    this.unitPrice = element(by.css('#total_product'));
}

CartPage.prototype.isLoaded = function () {
    var that = this;
    return browser.getCurrentUrl().then(function (currentURL) {
        return browser.getTitle().then(function (currentTitle) {
            return currentURL == that.URL && currentTitle == that.pageTitle
        });
    });
}

CartPage.prototype.getProductDescriptionText = function () {
    var that = this;
    return that.productDescription.getText().then(function(productDescription){
        return productDescription;
    });
}

CartPage.prototype.getProductPrice = function () {
    var that = this;
    return that.unitPrice.getText().then(function(productPrice){
        return productPrice;
    });
}

module.exports = CartPage;