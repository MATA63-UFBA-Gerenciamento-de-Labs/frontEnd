
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
}

module.exports = PageObject;