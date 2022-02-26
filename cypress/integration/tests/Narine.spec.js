describe('Registration', function(){

    it('data_validation', () => {
        cy.visit('/');
    cy.get('.btn.btn-signIn'). click();
    cy.get('#username').type('Test1');
    cy.get('#password').type('Test2');
    cy.get('#Login').click();
    cy.get('.help-block').should('contain', 'Սխալ ծածկանուն և/կամ գաղտնաբառ');
    cy.get('.forgot.pull-left').click();
    cy.get('.modal.fade.in').should('be.visible');







    // cy.get('.forgot.pull-left').click();


    });

});










