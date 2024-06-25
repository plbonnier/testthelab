describe('do a toDoList', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/week07/ToDoList/')
  })

  beforeEach(() => {
    //aller sur la page d'inscription de back market
    cy.visit('http://127.0.0.1:5500/week07/ToDoList/')
  })

  it('add a new task', () => {
    cy.get('.form__input').type('réussir mon atelier{enter}')
  })

  it('check the p', () => {
    cy.get('.counter').contains('en cours')
  })

  it('check the task', () => {
    cy.get('.task:last').contains('réussir mon atelier')
  })

  it('click the new task', () => {
    cy.get('.task__checkbox:last').click()
  })

  it('check the checkbox checked', () => {
    cy.get('.task__checkbox:last').should('be.checked')
  })

})