describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
    cy.get(".navbar-brand").contains("cypress.io");
    cy.get("h1").contains("Kitchen Sink");
    cy.get(".home-list").get("a").first().click().wait(3000);
    cy.url().should("include", "/");
  });
});
