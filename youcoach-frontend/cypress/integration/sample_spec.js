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



describe('The Login Page', () => {
  it('sets auth cookie when logging in via form submission', function () {

    cy.visit('https://you-coach-south.herokuapp.com');
    cy.get('a[routerLink*="/login"]').contains('Sign').click();

    cy.get('input[id=username]').type('coachee1@school.org', {force: true});

    // {enter} causes the form to submit
    cy.get('input[id=password]').type(`YouC0ach{enter}`, {force: true});

    // we should be redirected to /dashboard
    cy.url().should('include', '/profile');

    // our auth cookie should be present
    cy.window()
      .its("sessionStorage")
      .invoke("getItem", "jwt_token")
      .should("exist");
    cy.window()
      .its("sessionStorage")
      .invoke("getItem", "username")
      .should("equal", 'coachee1@school.org');

    // // UI should reflect this user being logged in
    // cy.get('h1').should('contain', 'jane.lane')
  })
})

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');

    cy.get('a[routerLink*="/login"]').contains('Sign').click();

    cy.get('input[id=username]').type('coachee1@school.org', {force: true});

    // {enter} causes the form to submit
    cy.get('input[id=password]').type(`YouC0ach{enter}`, {force: true});

    // we should be redirected to /dashboard
    cy.url().should('include', '/profile');

    // our auth cookie should be present
    cy.window()
      .its("sessionStorage")
      .invoke("getItem", "jwt_token")
      .should("exist");
    cy.window()
      .its("sessionStorage")
      .invoke("getItem", "username")
      .should("equal", 'coachee1@school.org');
  })
})

describe('Registering a new Customer', () => {
  it('should be able to register when all fields are filled in.', () => {
    cy.visit('/');

    cy.get('a[routerLink*="/register"]').contains('Register').click();

    cy.get('input[id="first_name"]').type('test', {force: true});
    cy.get('input[id="last_name"]').type('test', {force: true});
    cy.get('input[id="email"]').type('test@email.com', {force: true});
    cy.get('input[id="password"]').type('Abcdefg1', {force: true});
    cy.get('input[id="passwordVerification"]').type('Abcdefg1', {force: true});

    cy.get('button[type="submit"]').click();
  });
})
