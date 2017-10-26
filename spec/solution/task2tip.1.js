var WomenPage = require(pageObjectDir + "/womanPage.js");
var womenPage = new WomenPage();

//womenPage['sizeS']
var data = {
    "tc1": {
        "order": 0,
        "atributteValue": "1_1"
    },
    "tc2": {
        "order": 1,
        "atributteValue": "2_1"
    },
    "tc3": {
        "order": 2,
        "atributteValue": "3_1"
    }
}


beforeAll(function () {
    browser.get(womenPage.URL);
});

using(data, function (tc) {
    describe('Protractor Demo App', function () {

        it('chose size', function () {
            // element.all(By.css('#ul_layered_id_attribute_group_1>li>div>span>input')).then(function (elements) {
            womenPage.allSizeCheckbox.then(function (elements) {
                elements[tc.order].click();
                expect(elements[tc.order].getAttribute("value")).toEqual(tc.atributteValue)
            });
        })
    });
});
