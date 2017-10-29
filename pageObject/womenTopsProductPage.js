var WomenTopsProductPage = function(){
    this.productDescription = element(by.css('#short_description_content > p'));
    this.productCondition = element(by.css('#product_condition > span'));
    this.sizeDropdown = element(by.options('group_1'));
    this.sizeDropdownM = element(by.cssContainingText('option', 'M'));
    this.addToCartButton = element(by.css('#add_to_cart > button > span'));
    this.proceedToCheckoutButton = element(by.css('.btn.btn-default.button.button-medium'));
    this.cart = element(by.css('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a > b'));
    this.productPrice = element(by.css('#our_price_display'));
}

WomenTopsProductPage.prototype.getProductDescriptionLength = function (isLongerThan) {
    var that = this;
    return new Promise(function (resolve) {
        that.productDescription.getText().then(function (text) {
            resolve(text.length);
        })
    });
}

WomenTopsProductPage.prototype.getProductCondition = function(){
    var that = this;
    return that.productCondition.getText()
}

WomenTopsProductPage.prototype.getProductPrice = function(){
    var that = this;
    return that.productPrice.getText().then(function(productPrice){
        return productPrice;
    });
}

WomenTopsProductPage.prototype.selectSizeM = function(){
    var that = this;
    return that.sizeDropdownM.click();
}

WomenTopsProductPage.prototype.submitToCartButtonForm = function(){
    var that = this;
    return that.addToCartButton.submit();
}

WomenTopsProductPage.prototype.clickCartButton = function(){
    var that = this;
    return that.cart.click();
}

module.exports = WomenTopsProductPage;