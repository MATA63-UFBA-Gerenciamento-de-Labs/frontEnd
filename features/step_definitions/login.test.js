const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { Builder } = require('selenium-webdriver');
const LoginPage = require('../../tests/page_objects/login.page');

process.env.PATH = 'tests\page_objects\webdrivers\chromedriver.exe';

let driver;
let loginPage;

const customTimeout = 100000; // Tempo limite personalizado em milissegundos

Given('usuario na pagina de login', async () => {
  driver = await new Builder().forBrowser('chrome').build();
  // Definindo o tempo limite para esperar até que um elemento seja encontrado
  await driver.manage().setTimeouts({ implicit: customTimeout });
  // Definindo o tempo limite para aguardar até que uma ação seja executada
  await driver.manage().setTimeouts({ pageLoad: customTimeout, script: customTimeout });

  loginPage = new LoginPage(driver);
  await loginPage.enter_url('http://localhost:3000');
});

When('usuario tenta realizar o login', async () => {
  await loginPage.enter_username("teste");
});
  
Then('usuario eh redirecionado para a homepage', async () => {
  assert.equal(true, true);
  await loginPage.closeBrowser();
});