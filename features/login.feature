Feature: Login
  Casos de teste da planilha Login
  
  Background:
    Given usuario esta na pagina de login

  Scenario: Usuario realizar login com dados validos
    When usuario tenta o login com dados validos
    Then usuario eh redirecionado para a homepage

  Scenario Outline: Usuario realizar login com dados invalidos
    When usuario tenta o login com "<dado>" invalido
    Then sistema mostra mensagem de erro
    
      Examples:
        |dado|
        |matricula|
        |senha|

  Scenario: Usuario realizar login com matricula inexistente
    When usuario tenta o login com matricula inexistente
    Then sistema mostra mensagem de erro