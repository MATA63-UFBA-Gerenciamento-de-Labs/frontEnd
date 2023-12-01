const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { Builder } = require('selenium-webdriver');
const ProfessorPage = require('../../tests/page_objects/professor.page');

process.env.PATH = 'tests\page_objects\webdrivers\chromedriver.exe';

let driver;
let professorPage;
let tabela_original;

const customTimeout = 100000000; // Tempo limite personalizado em milissegundos

Given('o professor esta logado', async () => {
    driver = await new Builder().forBrowser('chrome').build();
    // Definindo o tempo limite para esperar até que um elemento seja encontrado
    await driver.manage().setTimeouts({ implicit: customTimeout });
    // Definindo o tempo limite para aguardar até que uma ação seja executada
    await driver.manage().setTimeouts({ pageLoad: customTimeout, script: customTimeout });
  
    professorPage = new ProfessorPage(driver);
    await professorPage.enter_url('http://localhost:3000/tela-professor');
  });

Given('existe um aluno matriculado', () => {
    console.log('oi');
});

When('o professor remove o acesso desse aluno', async () => {
    tabela_original = await professorPage.get_tamanho_tabela();
    await professorPage.remover_acesso();
});

Then('o aluno nao consta mais na lista de alunos matriculados', async () => {
    let nova_tabela = await professorPage.get_tamanho_tabela();
    assert.notEqual(tabela_original, nova_tabela);
    await professorPage.closeBrowser();
});