/// <reference types="cypress"/>


describe('US-001-Funcionalidade: Busca de filmes', () => {
  it('Deve buscar o filme e limpar a busca', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type('Matrix')
    cy.get('#search-button').click()
    // cy.wait(500)
    cy.get('#clear-button').wait(500).click()
  })

  it('Deve buscar o filme', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type('Matrix')
    cy.get('#search-button').click()
    cy.get(':nth-child(1) > h3').should('be.visible').contains("Matrix")
  })

  it('Deve retornar com mensagem de filme não encontrado', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type('cneowcb')
    cy.get('#search-button').click()
    cy.get('#results-section > p').should('be.visible').contains("Filme não encontrado.")
  })
})