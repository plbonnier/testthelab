describe("template spec", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
  });
  it("test home page ", () => {
    cy.get("h1").should("contain", "Produits");
    cy.contains("Produits");
    cy.get("section").should("have.length", 3);
    cy.get("section h2").first().should("contain", "Récemment Ajoutés");
    cy.get("section h2").eq(0).should("contain", "Récemment Ajoutés");
    cy.get("section h2").eq(1).should("contain", "Plus Consultés");
    cy.get("section h2").eq(2).should("contain", "Dernièrement Consultés");
  });
  it("clicked element & increment vues", () => {
    cy.get(".product-image").first().click();
    cy.get(".product-details .views-count").should("contain", 61);
  });

  it("check hover card product", () => {
    cy.get(".product-card")
      .first()
      .trigger("mouseover")
      .should("have.css", "transform", "none");
  });
});
