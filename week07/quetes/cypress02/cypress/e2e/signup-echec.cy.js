const { firstName, lastName, password } = require("../fixtures/user.json");

describe("Back Marcket", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}/register`);
    cy.get('[data-qa="accept-cta"]').click();
  });

  // TODO
  /*
Lorsque vous utilisez un champ de type email (<input type="email">) dans un formulaire HTML,
le navigateur vérifie automatiquement si l'adresse email saisie est dans un format correct.
Si l'adresse est invalide, le navigateur empêche la soumission du formulaire et affiche
un message d'erreur intégré (tooltip) pour informer l'utilisateur.

L'objet validity est une propriété native des éléments de formulaire HTML5, fournie par 
l'API DOM du navigateur. Lorsqu'un élément de formulaire (comme <input>) est sélectionné,
le navigateur expose cet objet pour vous permettre de vérifier l'état de validation de l'élément.

Il est renvoyé par les éléments de formulaire dans le DOM. Cet objet contient plusieurs propriétés
booléennes indiquant l'état de validation de l'élément (par exemple, valid, valueMissing, typeMismatch, etc.).
*/
  it("test d'inscription échouée (Email erroné)", () => {
    cy.signup(firstName, lastName, "totoDupont.yahoo.fr", password);
    cy.get("#signup-email")
      .should("have.prop", "validity")
      .and("have.property", "valid", false);
  });

  it("test d'inscription échouée (password erroné)", () => {
    cy.generateRandomEmail().then((email) => {
      cy.signup(firstName, lastName, email, "Password!");
      cy.contains(
        "Au moins 8 caractères, dont 1 majuscule, 1 minuscule et 1 chiffre. Parce qu'on sait jamais."
      );
    });
  });
});
