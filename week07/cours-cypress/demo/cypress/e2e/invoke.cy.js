describe("invok function", () => {
  it('should value input contain "06', () => {
    cy.visit("http://127.0.0.1:5500/week07/cours-cypress/demo/index.html");
    cy.get("#phone-number").type("0634353567");
    cy.get("#phone-number").invoke("val").should("contain", "06");
  });
});
