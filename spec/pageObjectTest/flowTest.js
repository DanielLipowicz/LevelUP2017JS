var HomePage = require(pageObjectDir + "/homePage.js");
var ContactUs = require(pageObjectDir + "/contactUs.js");

var homePage = new HomePage();
var contactUs = new ContactUs();

beforeAll(function () {
    browser.get(homePage.URL);
    homePage.contactUsLink.click();
})

describe('Automation Web flow', function () {
    // it('Click ContactUs button', function () {
    //     browser.get(homePage.URL);
    //     homePage.contactUsLink.click();
    // });
    it('Check if Customer Service Label is displayed?', function () {
        expect(contactUs.customerServiceLabel.isDisplayed()).toBeTruthy();
    })
    it('Check if Subject Heading Dropdown is displayed?', function () {
        expect(contactUs.subjectHeadingDropdown.isDisplayed()).toBeTruthy();
    })
    it('Check if Submit Button is displayed?', function () {
        expect(contactUs.submitButton.isDisplayed()).toBeTruthy();
    })


    
    it('Check if Subject Dropdown Option is present?', function () {
        expect(contactUs.idContact.isPresent()).toBeTruthy();
    })
    it('Check if Submit Dropdown Option is displayed?', function () {
        expect(contactUs.idContact.isDisplayed()).toBeTruthy();
    })

    it('Check if Women Tops Link is present?', function () {
        expect(contactUs.topMenuTops.isPresent()).toBeTruthy();
    })
    it('Check if Women Tops Link is displayed?', function () {
        expect(contactUs.topMenuTops.isDisplayed()).toBeTruthy();
    })

});