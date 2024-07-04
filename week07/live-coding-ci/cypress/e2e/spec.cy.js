describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
    cy.get(".navbar-brand").contains("cypress.io");
    cy.get(".navbar-brand").should("contain", "cypress.io");
    cy.get(".navbar-brand").click().wait(3000);
    cy.url().should("include", "/");
  });
  it("focused test", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    cy.get(".action-email").type("fake@email.com");
    cy.get(".action-email").should("have.value", "fake@email.com");
  });
});
