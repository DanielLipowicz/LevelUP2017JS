var WomenPage = require(pageObjectDir + "/womenPage.js");
var womenPage = new WomenPage();

//womenPage['sizeS']
var data = {
    "tc1": {
        "selector": "sizeS",
        "atributteValue": "1_1"
    },
    "tc2": {
        "selector": "sizeM",
        "atributteValue": "2_1"
    },
    "tc3": {
        "selector": "sizeL",
        "atributteValue": "3_1"
    }
}

describe('Protractor Demo App', function () {
    browser.get(womenPage.URL);

    using(data, function (tc) {

        it('chose size', function () {
            womenPage[tc.selector].click();
            expect(womenPage[tc.selector].getAttribute("value")).toEqual(tc.atributteValue)
        })
    });




    it('Obserwowanie efektu', function () {
        browser.wait(function () { setTimeout(function () { }, 5000) }, 5000);
    })
});