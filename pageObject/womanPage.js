var WomenPage = function () {

    this.URL = 'http://automationpractice.com/index.php?id_category=3&controller=category';
    this.womenLabel = element(By.css("#center_column > h1 > span.cat-name"));
    //this.topsLink = element(By.css(" #block_top_menu > ul > li:nth-child(1) > ul > li.sfHoverForce > a"));
    this.topMenuTops = element(By.css('.submenu-container.clearfix.first-in-line-xs >li:nth-of-type(1) >a.sf-with-ul'));
    this.topMenuTops2 = element(By.css('div.block_content>ul.tree.dynamized>li:nth-child(1)>a:first-of-type'));
    //

    //checkbox
    this.sizeS = $('#layered_id_attribute_group_1');
    this.sizeM = $('#layered_id_attribute_group_2');
    this.sizeL = $('#layered_id_attribute_group_3');
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