var WomenDressesProductPage = function(){
    this.productDescription = element(by.css('.pb-center-column.col-xs-12.col-sm-4>h1'));
    this.productPrice = element(by.css('div.price>p>span#our_price_display'));
    this.topMenuDresses = element(by.css('#block_top_menu > ul > li:nth-child(2) > a'));
}
var EC = protractor.ExpectedConditions;
WomenDressesProductPage.prototype.getProductDescription = function(){
    var that = this;
    return that.productDescription.getText()
}

WomenDressesProductPage.prototype.getProductPrice = function(){
    var that = this;
    return browser.wait(EC.visibilityOf(that.productPrice), 5000)
    .then(function () {
        return that.productPrice.getText()
    })
}

WomenDressesProductPage.prototype.clickDressesMenuButton = function(){
    var that = this;
    return that.topMenuDresses.click();
}
module.exports = WomenDressesProductPage;