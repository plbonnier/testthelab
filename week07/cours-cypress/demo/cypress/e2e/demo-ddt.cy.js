describe("control example json", () => {
  before(() => {
    cy.fixture("example.json").as("data");
  });

  it("check object example", () => {
    cy.get("@data").then((data) => {
      cy.wrap(data).should("have.property", "name");
    });
    cy.get("@data").then(({ name, email, body }) => {
      cy.wrap(name).should("be.a", "string");
    });
  });
});
