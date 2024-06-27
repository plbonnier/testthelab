describe("test api with intercept", () => {
  it("intercep users", () => {
    cy.visit("http://127.0.0.1:5500/week07/cours-cypress/demo/index.html");
    cy.intercept("/api/users").as("getUsers");
    cy.get("form").submit();
    cy.wait("@getUsers")
      .its("response.body[0]")
      .should("include", { name: "tot" });
  });
});
