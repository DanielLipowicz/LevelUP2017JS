var ProductPage = function () {

    this.URL = 'http://automationpractice.com/index.php?id_product=1&controller=product';
    this.productDescription = element(By.css("#short_description_content > p"));
    this.conditionValue = element(By.css("#product_condition > span"));
    this.sizeM = element(By.css("#group_1 > option:nth-child(2)"));
    this.addToCartButton = element(By.css(" #add_to_cart > button > span"));
    this.popUpText= element(By.css("#layer_cart > div.clearfix"));
    this.cartLink = element(By.css("#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a > b"));
    this.textInPopup = $('.layer_cart_product.col-xs-12.col-md-6 >h2'); // $('')==element(By.css('')
    


}
//ta metoda to tylko przyklad jak mozna wykozystac promise. Merytorycznie pod kontem testowania nie jest optymalna
ProductPage.prototype.isLabelLongerThan = function (isLongerThan) { 
    var that=this;
    return new Promise(function (resolve) {
        that.productDescription.getText().then(function (text) {
            resolve(text.length > isLongerThan);
            //resolve(isLongerThan);
        })
    });
}

module.exports = ProductPage;