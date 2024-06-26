// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const faker = require("faker");

Cypress.Commands.add(
  "generateRandomEmail",
  () => `${Math.random().toString(36).substring(2, 12)}@yahoo.com`
);

Cypress.Commands.add("signup", (firstName, lastName, email, password) => {
  cy.get("#firstName").type(firstName);
  cy.get("#lastName").type(lastName);
  cy.get("#signup-email").type(email);
  cy.get("#signup-password").type(password);
  cy.get('[data-qa="signup-submit-button"]').click();
});

Cypress.Commands.add("auth", (email, password) => {
  cy.get("#signin-email").type(email);
  cy.get("#signin-password").type(password);
  cy.get('[data-qa="signin-submit-button"]').click();
});

Cypress.Commands.add("generatePassword", (length) => {
  const upperCase = faker.random.alpha({ count: 1, upcase: true });
  const lowerCase = faker.random.alpha({ count: 1, upcase: false });
  const digit = faker.random.number({ min: 0, max: 9 }).toString();
  const specialChar = faker.random.arrayElement([
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
  ]);

  let rest = faker.random.alphaNumeric(length - 4);

  const password = `${upperCase}${lowerCase}${digit}${specialChar}${rest}`;
  const shuffledPassword = password
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");

  return cy.wrap(shuffledPassword);
});

Cypress.Commands.add("generateUser", () => {
  return cy.generatePassword(8).then((password) => {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: password,
    };
    return cy.wrap(user);
  });
});
