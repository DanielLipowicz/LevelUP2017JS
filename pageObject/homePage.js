var HomePage = function HomePage(){
    this.URL = 'http://automationpractice.com/index.php';
    
    this.cartLabel = element(By.css('.shopping_cart'));
    this.contactUsLink = element(By.css('#contact-link'));
    
    this.womenTab = element(By.cssContainingText("a.sf-with-ul", "Women"));
}

HomePage.prototype.clickOnWomenTab = function(){
    var that = this;
    return that.womenTab.click();
}

module.exports = HomePage;

