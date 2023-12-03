let PageObject = require('./page_object');
const {Key, By} = require('selenium-webdriver');

class AlunoPage extends PageObject{

    async enter_url(theURL){
        await this.go_to_url(theURL);
    }

    async page_down(){
        await this.driver.findElement(By.id("7")).sendKeys(Key.PAGE_DOWN);
    }

    async preencher_campos_lab_aula(mat, disc){
        await this.driver.findElement(By.id("1")).sendKeys(mat);
        await this.driver.findElement(By.id("2")).sendKeys(disc);
        await this.driver.findElement(By.id("3")).click();
        await this.driver.findElement(By.id("3")).sendKeys(Key.ARROW_DOWN);
        await this.driver.findElement(By.id("4")).click();
        await this.driver.findElement(By.id("4")).sendKeys(Key.ARROW_DOWN);
    }

    async solicitar_acesso_lab_aula(){
        await this.driver.findElement(By.id("6")).click();
    }

    async limpar_campos_lab_aula(){
        await this.driver.findElement(By.id("5")).click();
    }

    async get_valor_num_mat_lab_aula(){
        let num_mat = await this.driver.findElement(By.id("1"));
        return num_mat.getAttribute("placeholder");
    }

    async preencher_campos_lab_estudo(mat){
        await this.driver.findElement(By.id("7")).sendKeys(mat);
        await this.driver.findElement(By.id("8")).click();
        await this.driver.findElement(By.id("8")).sendKeys(Key.ARROW_DOWN);
        await this.driver.findElement(By.id("9")).click();
        await this.driver.findElement(By.id("9")).sendKeys(Key.ARROW_DOWN);
    }

    async solicitar_acesso_lab_estudo(){
        await this.driver.findElement(By.id("11")).click();
    }

    async limpar_campos_lab_estudo(){
        await this.driver.findElement(By.id("10")).click();
    }

    async get_valor_num_mat_lab_estudo(){
        let num_mat = await this.driver.findElement(By.id("7"));
        return num_mat.getAttribute("placeholder");
    }

    async solicitar_nova_tag(mat, disc){
        await this.driver.findElement(By.id("12")).sendKeys(mat);
        await this.driver.findElement(By.id("13")).sendKeys(disc);
        await this.driver.findElement(By.id("14")).click();
    }

}
module.exports = AlunoPage