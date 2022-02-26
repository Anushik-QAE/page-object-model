//import {Registration} from "../../RegistrationPages/Register";
import Rgistrationpage from "../../Registration/Register.spec"
let reg = new Rgistrationpage()
describe('Registration',function() {
    beforeEach('Verify registration  page ', function () {
        cy.visit('https://demo.nopcommerce.com/');
        reg.registerbutton().click()
        //this.'registerbutton'.click();
        cy.url().should('contain', 'register');


    });
    it('Verify radio buttons activity', () => {
        cy.get('#gender-male').check()
            .should('be.visible').should('be.checked');
        cy.get('#gender-female').check()
            .should('be.visible').should('be.checked');

    });
    it('Verify fields activity', () => {
        //this.firstname().click().type('John')
        //.should('have.value','John');
        cy.get('#LastName').click().type('Adams')
            .should('have.value', 'Adams');
        cy.get('#Email').click().type('JohnAdams@mail.ru')
            .should('have.value', 'JohnAdams@mail.ru');
        cy.get('#Company').click().type('Companyname')
            .should('have.value', 'Companyname');
        cy.get('#Password').click().type('123123')
            .should('have.value', '123123');
        cy.get('#ConfirmPassword').click().type('123123')
            .should('have.value', '123123');
    });
});