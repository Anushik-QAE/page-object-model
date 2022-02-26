import { Credentials } from "../../support/commands";

describe ('register page',function (){
    it ('Regiter',function (){
        cy.visit('https://demo.nopcommerce.com/register?returnUrl=%2F')
        cy.url(). should('include', 'register?');
       // cy.log(Credentials.email)
        //cy.get('#Email').const(Credentials.email).type();
       // declare module '@faker-js/faker' {
          //  import faker from 'faker';
          //  export default faker;
       // }
        cy.get('#Email').type(Credentials.email)

    });
});