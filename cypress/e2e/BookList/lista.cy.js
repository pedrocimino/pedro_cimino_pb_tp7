/// <reference types='cypress' />

describe("Visualizar lista de livros", () => {
  beforeEach("Visitar o site onde a lista está hospedada", () => {
    cy.visit("http://localhost:5173/");
  });

  it("Deve apresentar uma lista de livros", () => {
    cy.get('[data-cy="booksListItem"]').should("have.length", 12);
  });

  it("Deve buscar um livro na lista inserindo um nome", () => {
    const inputBusca = cy.get('[data-cy="inputBusca"]');
    inputBusca.type("Nome do livro");
  });

  it("Deve selecionar uma categoria de busca na lista de livros", () => {
    const selectFilter = cy.get('[data-cy="selectFilter"]');

    selectFilter.type("Ficção Distópica");
  });

  it('Deve retornar "Ficção Distópica" quando pesquisada', () => {
    const termo = "Ficção Distópica";
    const inputBusca = cy.get('[data-cy="inputBusca"');
    inputBusca.type(termo);
  });
});
