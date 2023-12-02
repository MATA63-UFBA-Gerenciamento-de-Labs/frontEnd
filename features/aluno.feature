Feature: Tela do aluno

    Background:
        Given usuario esta na tela do aluno

    Scenario: Aluno solicita acesso a laboratorio de aula
        When aluno solicita o acesso a um lab de aula
        Then o sistema confirma o pedido

    Scenario: Aluno limpar campos de acesso a laboratorio de aula
        Given o aluno preencheu os campos para acesso a lab de aula
        When o aluno limpa os campos do lab de aula
        Then o sistema mostra os campos default em lab de aula

    Scenario: Aluno solicita acesso a laboratorio de estudo
        When aluno solicita o acesso a um lab de estudo
        Then o sistema confirma o pedido

    Scenario: Aluno limpar campos de acesso a laboratorio de estudo
        Given o aluno preencheu os campos para acesso a lab de estudo
        When o aluno limpa os campos do lab de estudo
        Then o sistema mostra os campos default em lab de estudo

    Scenario: Aluno solicitar nova tag
        When o aluno solicita uma nova tag
        Then o sistema confirma o pedido de nova tag