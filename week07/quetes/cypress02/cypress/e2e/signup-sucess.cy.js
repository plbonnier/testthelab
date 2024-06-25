const { firstName, lastName, password } = require("../fixtures/user.json");

describe("Back Marcket", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}/register`);
    cy.get('[data-qa="accept-cta"]').click();
  });

  it("test d'inscription réussie", () => {
    cy.generateRandomEmail().then((email) => {
      cy.signup(firstName, lastName, email, password);
      cy.url().should("include", "/dashboard/orders");
    });
  });
});
