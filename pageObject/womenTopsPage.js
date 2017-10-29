var WomenTopsPage = function(){
    this.URL = 'http://automationpractice.com/index.php?id_category=4&controller=category';
    this.pageTitle = 'Tops - My Store';

    this.fadedLongSleeveTshirt = element(by.linkText('Faded Short Sleeve T-shirts'));
}

WomenTopsPage.prototype.isLoaded = function () {
    var that = this;
    return browser.getCurrentUrl().then(function (currentURL) {
        return browser.getTitle().then(function (currentTitle) {
            return currentURL == that.URL && currentTitle == that.pageTitle
        });
    });
}

WomenTopsPage.prototype.clickFadedLongSleeveTshirtButton = function () {
    var that = this;
    return that.fadedLongSleeveTshirt.click();
}

module.exports = WomenTopsPage;