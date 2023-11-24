Feature: Login
  Casos de teste da planilha Login
  
  Background:
    Given usuario na pagina de login

  Scenario: Usuario realizar login com dados validos
    When usuario tenta realizar o login
    Then usuario eh redirecionado para a homepage