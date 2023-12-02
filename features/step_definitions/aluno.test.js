const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { Builder } = require('selenium-webdriver');
const AlunoPage = require('../../tests/page_objects/aluno.page');

process.env.PATH = 'tests\page_objects\webdrivers\chromedriver.exe';

let driver;
let alunoPage;

const customTimeout = 1000000; // Tempo limite personalizado em milissegundos

Given('usuario esta na tela do aluno', async () => {
  driver = await new Builder().forBrowser('chrome').build();
  // Definindo o tempo limite para esperar até que um elemento seja encontrado
  await driver.manage().setTimeouts({ implicit: customTimeout });
  // Definindo o tempo limite para aguardar até que uma ação seja executada
  await driver.manage().setTimeouts({ pageLoad: customTimeout, script: customTimeout });

  alunoPage = new AlunoPage(driver);
  await alunoPage.enter_url('http://localhost:3000/tela-aluno');
});

When('aluno solicita o acesso a um lab de aula', async () => {
    await alunoPage.preencher_campos_lab_aula("220215588", "MATA63");
    await alunoPage.solicitar_acesso_lab_aula();
});

Then('o sistema confirma o pedido', async () => {
    let sucesso = false;
    try{
        let txt = await alunoPage.read_alert();
        if(txt.includes("Pedido para aula feito com sucesso"))
            sucesso = true;
        await alunoPage.accept_alert();
        
    } catch {
        sucesso = false;
    } finally {
        assert.equal(true, sucesso);
    }
    await alunoPage.closeBrowser();
});

Given('o aluno preencheu os campos para acesso a lab de aula', async () => {
    await alunoPage.preencher_campos_lab_aula("220215588", "MATA63");
});

When('o aluno limpa os campos do lab de aula', async () => {
    await alunoPage.limpar_campos_lab_aula();
});

Then('o sistema mostra os campos default em lab de aula', async () => {
    let num_mat = await alunoPage.get_valor_num_mat_lab_aula();
    console.log(num_mat);
    assert.notEqual(num_mat, "220215588");
    await alunoPage.closeBrowser();
});

When('aluno solicita o acesso a um lab de estudo', async () => {
    await alunoPage.page_down();
    await alunoPage.wait(500);
    await alunoPage.preencher_campos_lab_estudo("220215588");
    await alunoPage.solicitar_acesso_lab_estudo();
});

Given('o aluno preencheu os campos para acesso a lab de estudo', async () => {
    await alunoPage.page_down();
    await alunoPage.wait(500);
    await alunoPage.preencher_campos_lab_estudo("220215588");
});

When('o aluno limpa os campos do lab de estudo', async () => {
    await alunoPage.limpar_campos_lab_estudo();
});

Then('o sistema mostra os campos default em lab de estudo', async () => {
    let num_mat = await alunoPage.get_valor_num_mat_lab_estudo();
    console.log(num_mat);
    assert.notEqual(num_mat, "220215588");
    await alunoPage.closeBrowser();
});

When('o aluno solicita uma nova tag', async () => {
    await alunoPage.page_down();
    await alunoPage.wait(500);
    await alunoPage.solicitar_nova_tag("220215588", "MATA63");
});

Then('o sistema confirma o pedido de nova tag', async () => {
    let sucesso = false;
    try{
        let txt = await alunoPage.read_alert();
        if(txt.includes("Pedido para nova tag feito com sucesso"))
            sucesso = true;
        await alunoPage.accept_alert();
        
    } catch {
        sucesso = false;
    } finally {
        assert.equal(true, sucesso);
    }
    await alunoPage.closeBrowser();
});