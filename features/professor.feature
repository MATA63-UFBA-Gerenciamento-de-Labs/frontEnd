Feature: Funcionalidades da tela do professor

    Background:
        Given o professor esta logado
    
    Scenario: Professor remove acesso de aluno
        Given existe um aluno matriculado
        When o professor remove o acesso desse aluno
        Then o aluno nao consta mais na lista de alunos matriculados