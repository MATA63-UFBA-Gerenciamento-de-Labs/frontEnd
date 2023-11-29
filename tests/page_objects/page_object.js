
class PageObject{

    constructor(driver){
        this.driver = driver;
    }

    async go_to_url(theURL){
        await this.driver.get(theURL);
    }

    async closeBrowser(){
        await this.driver.quit();
    }

    async dismiss_alert(){
        await this.driver.switchTo().alert().dismiss();
    }

    async accept_alert(){
        await this.driver.switchTo().alert().accept();
    }

    async write_in_alert(txt){
        await this.driver.switchTo().alert().sendKeys(txt);
    }
}

module.exports = PageObject;