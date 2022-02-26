describe('login',function()
{
    beforeEach(' login page ',function(){
        cy.visit('https://demo.nopcommerce.com/');
        cy.get('.ico-login').click();
        cy.url().should('contain','login');
    });

    it('Verify that error validations are shown', () => {
        cy.get('.button-1.login-button').click();
        cy.get('#Email-error').should('contain', 'Please enter your email');
        cy.get('#Email').clear().type('testing.cypress@mail.ru');
        cy.get('#Password').type('4567821');
        cy.get('.button-1.login-button').click();
        cy.get('.message-error.validation-summary-errors')
            .should('contain', 'Login was unsuccessful. Please correct the errors and try again.');
        cy.get('#Email').clear().type('testingcypress');
        cy.get('#Password').type('testing123');
        cy.get('.button-1.login-button').click();
        cy.get('#Email-error').should('contain','Wrong email');
        cy.get('#Email').clear();
        cy.get('#Email-error').should('contain','Please enter your email');

    });

    it('Verify Password forgote functionality', () => {
        cy.get('.forgot-password').click();
        cy.url('https://demo.nopcommerce.com/').should('contain',
            'passwordrecovery');
        cy.get('#Email').type('testingcypress1');
        cy.get('[name="send-email"]').click();
        cy.get('#Email-error').should('contain','Wrong email');
        cy.get('#Email').clear().type('testingcypress@mail.ru');
        cy.get('[name="send-email"]').click();
        // cy.wait(1000);
        cy.get('.content').should('contain','Email not found.');

    });
    it('Verify login functionality with valid datas', () => {
        cy.get('#Email').clear().type('johnadams@mail.ru')
            .should('have.value','johnadams@mail.ru');
        cy.get('#Password').type('123456');
        cy.get('#RememberMe').check().should('be.checked');
        cy.get('.button-1.login-button').click();
        cy.get('.ico-account').should('be.visible');
        cy.get('.ico-account').click();
        cy.url().should('contain','customer/info');

    });
});


