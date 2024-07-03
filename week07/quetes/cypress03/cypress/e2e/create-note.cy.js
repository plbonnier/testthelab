describe("API Notes", () => {
  beforeEach(() => {
    cy.fixture("note").as("note");
  });

  it("Créez des notes avec titre et contenu", function () {
    cy.generateNote().then(({ title, description, category }) => {
      cy.request({
        method: "POST",
        url: `${Cypress.env("baseUrl")}/notes`,
        headers: {
          "x-auth-token": Cypress.env("apiKey"),
        },
        body: { title, description, category },
      }).then((response) => {
        cy.wrap(response)
          .its("headers")
          .its("content-type")
          .should("include", "application/json");
        cy.wrap(response).its("body").should("be.an", "object");
        cy.wrap(response.body.success).should("eql", true);
        cy.wrap(response.body).should("have.property", "status", 200);
      });
    });
  });
});
