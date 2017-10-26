var WomenPage = require(pageObjectDir + "/womanPage.js");
var womenPage = new WomenPage();

//womenPage['sizeS']
var data = {
    "tc1": "sizeS",
    "tc2": "sizeM",
    "tc3": "sizeL",

}

describe('Protractor Demo App', function () {
    browser.get(womenPage.URL);
   
    using(data, function (tc) {
        it('chose size', function () {
            womenPage[tc].click();
        })
    });




    it('Obserwowanie efektu', function () {
        browser.wait(function(){setTimeout(function(){},5000)},5000);
    })
});