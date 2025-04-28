/// <reference types="cypress"/>


describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  afterEach(() => {
    cy.screenshot()
  })

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `alan${Date.now()}@teste.com`
    cy.preencherCadastro('Alan', 'Zoka', email, '11988684536', 'Teste@321')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })

  it('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('Alan11', 'Zoka', 'alan@teste.com', '11988684536', 'Teste@321')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })

  it('Deve validar mensagem de erro com o campo sobrenome inválido', () => {
    cy.preencherCadastro('Alan', 'Zoka11', 'alan@teste.com', '11988684536', 'Teste@321')
    cy.get('#signup-response').should('contain', 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })

  it('Deve validar mensagem de erro com o campo email inválido', () => {
    cy.preencherCadastro('Alan', 'Zoka', 'alanteste.com', '11988684536', 'Teste@321')
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  })

  it('Deve validar mensagem de erro com o campo senha fraca', () => {
    cy.preencherCadastro('Alan', 'Zoka', 'alan@teste.com', '11988684536', 'senha')
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  })
})
