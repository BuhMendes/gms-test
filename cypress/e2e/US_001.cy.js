/// <reference types="cypress"/>


describe('US-001-Funcionalidade: Busca de filmes', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Deve buscar o filme e limpar a busca', () => {
    cy.get('#search-input').type('Matrix')
    cy.get('#search-button').click()
    // cy.wait(500)
    cy.get('#clear-button').wait(500).click()
  })

  it('Deve buscar o filme', () => {
    cy.get('#search-input').type('Matrix')
    cy.get('#search-button').click()
    cy.get(':nth-child(1) > h3').should('be.visible').contains("Matrix")
  })

  it('Deve buscaar filmes com sucesso de uma lista', () => {
  cy.fixture('filmes').then((filmes) => {
    cy.get('#search-input').type(filmes[0].titulo)
    cy.get('#search-button').click()
    cy.get('#results-section').should('contain', filmes[0].titulo)
  })
  })

  it.only('Deve buscar filmes com sucesso da lista inteira', () => {
  cy.fixture('filmes').each((filmes) => {
    cy.get('#search-input').clear().type(filmes.titulo)
    cy.get('#search-button').click({force: true})
    cy.get('#results-section').should('contain', filmes.titulo)
  })
  })

  it('Deve retornar com mensagem de filme não encontrado', () => {
    cy.get('#search-input').type('cneowcb')
    cy.get('#search-button').click()
    cy.get('#results-section > p').should('be.visible').contains("Filme não encontrado.")
  })
})