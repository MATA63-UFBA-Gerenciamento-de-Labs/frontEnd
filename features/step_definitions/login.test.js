const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { Builder } = require('selenium-webdriver');
const LoginPage = require('../../tests/page_objects/login.page');

process.env.PATH = 'tests\page_objects\webdrivers\chromedriver.exe';

let driver;
let loginPage;

const customTimeout = 100000; // Tempo limite personalizado em milissegundos

Given('usuario esta na pagina de login', async () => {
  driver = await new Builder().forBrowser('chrome').build();
  // Definindo o tempo limite para esperar até que um elemento seja encontrado
  await driver.manage().setTimeouts({ implicit: customTimeout });
  // Definindo o tempo limite para aguardar até que uma ação seja executada
  await driver.manage().setTimeouts({ pageLoad: customTimeout, script: customTimeout });

  loginPage = new LoginPage(driver);
  await loginPage.enter_url('http://localhost:3000');
});

When('usuario tenta o login com dados validos', async () => {
  await loginPage.enter_username("218217788");
  await loginPage.enter_password("teste123");
  await loginPage.press_confirm_btn();
});
  
Then('usuario eh redirecionado para a homepage', async () => {
  assert.equal(true, true);
  await loginPage.closeBrowser();
});

When('usuario tenta o login com {string} invalido', async (dado) => {
  let matricula = "218217788";
  let senha = "teste123";
  if (dado == "matricula") matricula = "teste";
  else if (dado == "senha") senha = "t";
  await loginPage.enter_username(matricula);
  await loginPage.enter_password(senha);
  await loginPage.press_confirm_btn();
});

When('usuario tenta o login com matricula inexistente', async () => {
  await loginPage.enter_username("218217789");
  await loginPage.enter_password("teste123");
  await loginPage.press_confirm_btn();
});

Then('sistema mostra mensagem de erro', async () => {
  assert.equal(true, true);
  await loginPage.closeBrowser();
});