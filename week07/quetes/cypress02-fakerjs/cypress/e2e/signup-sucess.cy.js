describe("Back Marcket", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}/register`);
    cy.get('[data-qa="accept-cta"]').click();
  });

  it("test d'inscription réussie", () => {
    cy.generateUser().then(({ firstName, lastName, email, password }) => {
      cy.signup(firstName, lastName, email, password);
      cy.url().should("include", "/dashboard/orders");
    });
  });
});
