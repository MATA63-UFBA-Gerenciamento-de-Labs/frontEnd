
class PageObject{

    constructor(driver){
        this.driver = driver;
    }

    async go_to_url(theURL){
        await this.driver.manage().window().maximize();
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

    async read_alert(){
        let txt = await this.driver.switchTo().alert().getText();
        return txt;
    }

    async wait(){
        await this.driver.sleep(500);
    }
}

module.exports = PageObject;