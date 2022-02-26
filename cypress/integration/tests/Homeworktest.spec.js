describe('Amazon Sign In page',function(){
    beforeEach ('Amazon page ',function() {
        cy.visit('/');
        cy.get('.nav-line-1-container').click();
        cy.url().should('contain', 'signin');
    });
    it('Test Sing In page fields activity', () => {
        cy.get('#ap_email').type('anushik.davtyan.00@mail.ru');
        cy.get('input#ap_email').should('have.value','anushik.davtyan.00@mail.ru');
        cy.get('span#continue').click();
        cy.get('#ap_password').type('123123');
        cy.get('input#ap_password').should('have.value','123123');

    });
    it('Test if error validations are shown ',() =>{
        cy.get('#ap_email').type('anushik.davtyan.00mail.ru');
        cy.get('span#continue').click();
        cy.get('#auth-error-message-box').should('contain','There was a problem');
        cy.get('#ap_email').clear();
        cy.get('add-to-cart-button').first().click();
        cy.get('add-to-cart-button').last().click();
        // cy.get('add-to-cart-button').eq(0).click()


    });
});