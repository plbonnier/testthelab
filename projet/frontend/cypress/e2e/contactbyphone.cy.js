/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
// eslint-disable-next-line prettier/prettier
describe('envoie d\'un message par le header en mode ordi', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.get('header button').click();
        cy.get('header a[href="/contact"]').first().click();
        cy.url().should('include', '/contact');
        cy.get('h1').should('contain', 'Contact');
        cy.get('div.absolute p').should('contain', 'Une Question ?');
        cy.get('h2').should('contain', 'FAQ');
        cy.get('h3').first().should('contain', 'Faut-il fournir des documents spécifiques');
    });
    
    it('envoie de message réussi', () => {
        cy.get('#name').type('Toto');
        cy.get('#email').type('toto@gmail.com');
        cy.get('#contact').type('0123456789');
        cy.get('#subject').type('je suis un test');
        cy.get('#message').type('je suis un test, je vais voir si cela réussi');
        cy.contains('Envoyer').click();
        cy.get('[type="submit"]').should('contain', 'Envoi');
    });
    
    it('envoie de message raté pas de nom', () => {
        cy.get('#email').type('toto@gmail.com');
        cy.get('#contact').type('0123456789');
        cy.get('#subject').type('je suis un test');
        cy.get('#message').type('je suis un test, je vais voir si cela réussi');
        cy.contains('Envoyer').click();
        cy.get('#name').should('have.prop', 'validity').and('have.property', 'valid', false);
    });
    
    it('envoie de message raté pas de message', () => {
        cy.get('#email').type('toto@gmail.com');
        cy.get('#contact').type('0123456789');
        cy.get('#subject').type('je suis un test');
        cy.contains('Envoyer').click();
        cy.get('#message').should('have.prop', 'validity').and('have.property', 'valid', false);
    });
    
    it('envoie de message raté pas de mail', () => {
        cy.get('#name').type('Toto');
        cy.get('#contact').type('0123456789');
        cy.get('#subject').type('je suis un test');
        cy.get('#message').type('je suis un test, je vais voir si cela réussi');
        cy.contains('Envoyer').click();
        cy.get('#email').should('have.prop', 'validity').and('have.property', 'valid', false);
    });
    
    it('envoie de message raté pas de telephone', () => {
        cy.get('#name').type('Toto');
        cy.get('#email').type('toto@gmail.com');
        cy.get('#subject').type('je suis un test');
        cy.get('#message').type('je suis un test, je vais voir si cela réussi');
        cy.contains('Envoyer').click();
        cy.get('#contact').should('have.prop', 'validity').and('have.property', 'valid', false);
    });

    it('envoie de message raté pas de sujet', () => {
        cy.get('#name').type('Toto');
        cy.get('#email').type('toto@gmail.com');
        cy.get('#contact').type('0123456789');
        cy.get('#message').type('je suis un test, je vais voir si cela réussi');
        cy.contains('Envoyer').click();
        cy.get('#subject').should('have.prop', 'validity').and('have.property', 'valid', false);
    });
});