let PageObject = require('./page_object');
const {By} = require('selenium-webdriver');
class ProfessorPage extends PageObject{

    async enter_url(theURL){
        await this.go_to_url(theURL);
    }

    async fornecer_acesso(){
        //botao fornecer acesso
        await this.driver.findElement(By.id("1")).click();
        //esperar implementacao do modal
    }

    async get_tamanho_tabela(){
        let alunos = await this.driver.findElements(By.className("table_entryData__W1zkT"));
        console.log(alunos.length);
        return alunos;
    }

    async remover_acesso(alunos){
        let aluno_checkbox_path = "//*[@id='"+alunos+"input']";
        const aluno_checkbox = await this.driver.findElement(By.xpath(aluno_checkbox_path));

        await this.driver.executeScript('arguments[0].scrollIntoView(true);', aluno_checkbox);
        
        await this.driver.wait(async () => await aluno_checkbox.isDisplayed(), 1000000); // Timeout de 10 segundos

        await this.driver.findElement(By.xpath(aluno_checkbox)).click();
        //botao remover acesso
        await this.driver.findElement(By.id("2")).click();
    }

}
module.exports = ProfessorPage