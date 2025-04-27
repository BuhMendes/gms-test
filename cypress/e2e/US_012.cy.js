/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Alan')
    cy.get('#signup-lastname').type('Zoka')
    cy.get('#signup-email').type('alan@teste.com')
    cy.get('#signup-phone').type('119993685741')
    cy.get('#signup-password').type('Teste!123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})