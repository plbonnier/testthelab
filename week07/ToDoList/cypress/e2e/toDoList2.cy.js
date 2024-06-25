describe('do a toDoList', () => {
    it('toDolist', () => {
        cy.visit('http://127.0.0.1:5500/week07/ToDoList/')
        cy.get('.form__input').type('réussir mon atelier{enter}')
        //si pas on ne met pas {enter}, penser à mettre
        //cy.get(selecteur du formulaire).submit()
        cy.get('.counter').contains('3 tâches en cours')

        cy.get('.task:last-child').contains('réussir mon atelier')
        cy.get('.task__checkbox:last').check()
        cy.get('.task__checkbox:last').should('be.checked')
        cy.get('.counter').contains('2 tâches en cours')
        cy.get('.task__checkbox:last').uncheck()
    })
})