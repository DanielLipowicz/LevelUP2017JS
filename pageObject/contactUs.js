var ContactUs = function ContactUs(){
        this.URL = 'http://automationpractice.com/index.php?controller=contact';

        this.customerServiceLabel = element(By.css(".page-heading.bottom-indent")); //.center_column >h1
        this.subjectHeadingDropdown = element(By.css("#uniform-id_contact")); //By.id('id_contact')
        this.submitButton = element(By.css("#submitMessage"));   

        this.idContact = element(By.css("#id_contact"));
        this.topMenuTops = element(By.css('.submenu-container.clearfix.first-in-line-xs >li:nth-of-type(1) >a.sf-with-ul'));
    }
    module.exports = ContactUs;