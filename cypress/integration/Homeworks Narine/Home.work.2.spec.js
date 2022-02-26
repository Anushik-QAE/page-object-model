describe('Check Resigtration functionaluity', function(){

it('login functionality',function ()
{
    cy.visit("https://demo.nopcommerce.com/");
    cy.get('.ico-login') .click();
    cy.get('#Email').type("bbb@mail.ru");
    cy.get('#Password').type("123123");
    cy.get('.login-button').click();
    cy.url().should('contain', 'login');

})



});