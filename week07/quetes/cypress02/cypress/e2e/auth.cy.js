const user = {
  email: "4ptrjj9ly5@yahoo.com",
  password: "Password123!",
};

const { email, password } = user;
describe("Back Market", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}/register`);
    cy.get('[data-qa="accept-cta"]').click();
  });

  it("test d'authentification réussi", () => {
    cy.auth(email, password).then(() => {
      cy.url().should("include", "/dashboard/orders");
    });
  });
});
