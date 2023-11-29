let PageObject = require('./page_object');
const {By} = require('selenium-webdriver');

class LoginPage extends PageObject{

    async enter_url(theURL){
        await this.go_to_url(theURL);
    }

    async enter_username(username){
        await this.driver.findElement(By.id(':R4im:')).sendKeys(username);
    }

    async enter_password(password){
        await this.driver.findElement(By.id(':R52m:')).sendKeys(password);
    }

    async press_confirm_btn(){
        await this.driver.findElement(By.xpath('//*[@id="__next"]/div/div[1]/button[2]')).click();
    }

}
module.exports = LoginPage