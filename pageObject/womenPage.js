var WomenPage = function () {
    this.URL = 'http://automationpractice.com/index.php?id_category=3&controller=category';
    this.pageTitle = 'Women - My Store';

    this.womenCategoryTopsButton = element(By.css('#subcategories > ul > li:nth-child(1) > div.subcategory-image > a > img'));
    //checkbox
    this.allSizeCheckbox = element.all(By.css('#ul_layered_id_attribute_group_1>li>div>span>input'));
    this.sizeS = $('#layered_id_attribute_group_1');
    this.sizeM = $('#layered_id_attribute_group_2');
    this.sizeL = $('#layered_id_attribute_group_3');
}

WomenPage.prototype.isLoaded = function () {
    var that = this;
    return browser.getCurrentUrl().then(function (currentURL) {
        return browser.getTitle().then(function (currentTitle) {
            return currentURL == that.URL && currentTitle == that.pageTitle
        });
    });
}

WomenPage.prototype.clickCategoryTopButton = function () {
    var that = this;
    return that.womenCategoryTopsButton.click();
}

WomenPage.prototype.selectSizeS = function () {
    var that = this;
    return that.sizeS.click();
}

WomenPage.prototype.selectSizeM = function () {
    var that = this;
    return that.sizeM.click();
}

WomenPage.prototype.selectSizeL = function () {
    var that = this;
    return that.sizeL.click();
}

module.exports = WomenPage;