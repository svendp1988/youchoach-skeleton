describe('Visit home page', () => {
  it('Visits the Heroku home page', () => {
    cy.visit('https://you-coach-south.herokuapp.com');
  })
});

describe('Navigate to register', () => {
  it('clicking "Register" navigates to a new url', () => {
    cy.visit('https://you-coach-south.herokuapp.com');

    cy.get('a[routerLink*="/register"]').contains('Register').click();

    cy.url().should('include', '/register');
  })
});


describe('Filling out register form', () => {
  it('register button should only be clickable when form is fully filled in', () => {
    cy.visit('https://you-coach-south.herokuapp.com');

    cy.get('a[routerLink*="/register"]').contains('Register').click();
    cy.get('button[type*="submit"]').click({force: true});
    cy.once('fail', (err) => {
      expect(err.message).to.include('cy.click() failed because this element is disabled');
    })
  })
})



