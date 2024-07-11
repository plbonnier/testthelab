/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
describe('enregistrement d\'un nouvel utilisateur', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get('a[href="/signup"]').click();
    cy.url().should('include', '/signup');
    cy.get('h1').should('contain', 'Inscription');
    cy.contains('Rejoignez-nous').should('contain', 'Rejoignez-nous');
    cy.get('div.absolute p').should('contain', 'Rejoignez-nous');
  });

  it('enregistrement réussi', () => {
    cy.get('#lastname').type('Toto');
    cy.get('#firstname').type('Tata');
    cy.get('#birthday').type('2006-05-07');
    cy.get('#email').type('toto37@gmail.com');
    cy.get('#password').type('toto15');
    cy.get('#confirmPassword').type('toto15');
    cy.get('#terms').click();
    cy.contains('Je M\'inscris').click();
    cy.wait(3000);
    cy.url().should('include', '/login');
    cy.get('h1').should('contain', 'Se Connecter');
    cy.get('div.absolute p').should('contain', 'Bon retour parmis nous');
  });

  it('enregistrement raté pas de lastname', () => {
    cy.get('#firstname').type('Tata');
    cy.get('#birthday').type('2006-05-07');
    cy.get('#email').type('toto19@gmail.com');
    cy.get('#password').type('toto15');
    cy.get('#confirmPassword').type('toto15');
    cy.get('#terms').click();
    cy.contains('Je M\'inscris').click();
    cy.get('#lastname').should('have.prop', 'validity').and('have.property', 'valid', false);
  });

  it('enregistrement raté pas de firstname', () => {
    cy.get('#lastname').type('Tata');
    cy.get('#birthday').type('2006-05-07');
    cy.get('#email').type('toto20@gmail.com');
    cy.get('#password').type('toto15');
    cy.get('#confirmPassword').type('toto15');
    cy.get('#terms').click();
    cy.contains('Je M\'inscris').click();
    cy.get('#firstname').should('have.prop', 'validity').and('have.property', 'valid', false);
  });

  it('enregistrement raté pas de birthday', () => {
    cy.get('#lastname').type('Tata');
    cy.get('#firstname').type('Tata');
    cy.get('#password').type('toto15');
    cy.get('#confirmPassword').type('toto15');
    cy.get('#terms').click();
    cy.contains('Je M\'inscris').click();
    cy.get('#birthday').should('have.prop', 'validity').and('have.property', 'valid', false);
  });

  it('enregistrement raté pas de mail', () => {
    cy.get('#lastname').type('Tata');
    cy.get('#firstname').type('Tata');
    cy.get('#birthday').type('2006-05-07');
    cy.get('#password').type('toto15');
    cy.get('#confirmPassword').type('toto15');
    cy.get('#terms').click();
    cy.contains('Je M\'inscris').click();
    cy.get('#email').should('have.prop', 'validity').and('have.property', 'valid', false);
  });

  it('enregistrement raté email existant', () => {
    cy.get('#lastname').type('Toto');
    cy.get('#firstname').type('Tata');
    cy.get('#birthday').type('2006-05-07');
    cy.get('#email').type('toto37@gmail.com');
    cy.get('#password').type('toto15');
    cy.get('#confirmPassword').type('toto15');
    cy.get('#terms').click();
    cy.contains('Je M\'inscris').click();
    cy.wait(3000);
    cy.get('#email').should('have.prop', 'validity').and('have.property', 'valid', false);
    cy.url().should('include', '/signup');
  });
  
  it('enregistrement raté pas de password', () => {
    cy.get('#lastname').type('Tata');
    cy.get('#firstname').type('Tata');
    cy.get('#birthday').type('2006-05-07');
    cy.get('#email').type('toto20@gmail.com');
    cy.get('#confirmPassword').type('toto15');
    cy.get('#terms').click();
    cy.contains('Je M\'inscris').should('be.disabled');
  });

  it('enregistrement raté pas de confirmPassword', () => {
    cy.get('#lastname').type('Tata');
    cy.get('#firstname').type('Tata');
    cy.get('#email').type('toto20@gmail.com');
    cy.get('#birthday').type('2006-05-07');
    cy.get('#password').type('toto15');
    cy.get('#terms').click();
    cy.contains('Je M\'inscris').should('be.disabled');
  });
  
  it('enregistrement raté password pas identique', () => {
    cy.get('#lastname').type('Tata');
    cy.get('#firstname').type('Tata');
    cy.get('#email').type('toto20@gmail.com');
    cy.get('#birthday').type('2006-05-07');
    cy.get('#password').type('toto15');
    cy.get('#confirmPassword').type('toto1');
    cy.get('#terms').click();
    cy.get('form div p').should('contain', 'Vous devez saisir le même mot de passe !');
    cy.contains('Je M\'inscris').should('be.disabled');
  });
  
  it('enregistrement raté pas de clic sur les conditions', () => {
    cy.get('#lastname').type('Tata');
    cy.get('#firstname').type('Tata');
    cy.get('#email').type('toto20@gmail.com');
    cy.get('#birthday').type('2006-05-07');
    cy.get('#password').type('toto15');
    cy.get('#confirmPassword').type('toto15');
    cy.contains('Je M\'inscris').click();
    cy.get('#terms').should('have.prop', 'validity').and('have.property', 'valid', false);
  });

})