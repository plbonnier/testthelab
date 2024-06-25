describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5500/week07/ToDoList/index.html");
  });
  it("ajouter une tâche", () => {
    cy.visit("http://127.0.0.1:5500/week07/ToDoList/index.html");
    cy.get(".form__input").type("je suis le meilleur !").wait(3000);
    cy.get(".form").submit();
    cy.get(".tasks .task").should("contain", "je suis le meilleur !");
  });
  it("cocher une tâche", () => {
    cy.visit("http://127.0.0.1:5500/week07/ToDoList/index.html");
    cy.get(".task__checkbox").first().check();
    cy.get(".task").should("have.class", "task--done");
  });

  it("décocher une tâche", () => {
    cy.visit("http://127.0.0.1:5500/week07/ToDoList/index.html");
    cy.get(".task__checkbox").first().uncheck();
    cy.get(".task").first().should("not.have.class", "task--done");
  });

  it("mis à jour de compteur", () => {
    cy.visit("http://127.0.0.1:5500/week07/ToDoList/index.html");
    cy.get(".counter").should("contain", "2 tâches en cours");
    cy.get(".task__checkbox").last().check();
    cy.get(".counter").should("contain", "1 tâche en cours");
  });
});
