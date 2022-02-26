import { Credentials } from "../../support/commands";

describe('Registration',function()
{
    beforeEach('Verify registration  page ',function() {
        cy.visit('https://demo.nopcommerce.com/');
        cy.get('.ico-register').click();
        cy.url().should('contain', 'register');


    });
    it('Verify radio buttons activity', () => {
        cy.get('#gender-male').check()
            .should('be.visible').should('be.checked');
        cy.get('#gender-female').check()
            .should('be.visible').should('be.checked');

    });
    it('Verify fields activity', () => {
        let pass = Credentials.password
        cy.get('#FirstName').click().type('John')
            .should('have.value','John');
        cy.get('#LastName').click().type('Adams')
            .should('have.value','Adams');
        cy.get('#Email').click().type(Credentials.email);
        cy.get('#Company').click().type('Companyname')
            .should('have.value','Companyname');
        cy.get('#Password').click().type(pass);
        cy.get('#ConfirmPassword').type(pass);




    });
    it('Verify dropdown list', () => {
        cy.get('[name=DateOfBirthDay]').select('17')
            .should('contain','17');
        cy.get('[name=DateOfBirthMonth]').select('May')
            .should('contain','May');
        cy.get('[name=DateOfBirthYear]').select('1999')
            .should('contain','1999');


    });
    it('Registration with valid datas', () => {
        cy.get('#gender-male').check()
            .should('be.visible').should('be.checked');
        cy.get('#FirstName').click().type('John')
            .should('have.value','John');
        cy.get('#LastName').click().type('Adams')
            .should('have.value','Adams');
        cy.get('[name=DateOfBirthDay]').select('20')
            .should('contain','20');
        cy.get('[name=DateOfBirthMonth]').select('June')
            .should('contain','June');
        cy.get('[name=DateOfBirthYear]').select('1998')
            .should('contain','1998');
        cy.get('#Email').click().type(Credentials.email);
        cy.get('#Company').click().type('Company1')
            .should('have.value','Company1');
        cy.get('[type=checkbox]').check();
        cy.get('#Password').click().type(pass);
        cy.get('#ConfirmPassword').type(pass);
        cy.get('#register-button').click();
        cy.get('div.result').should('contain','Your registration completed');

    });
    it('Verify error validations ', () => {
        cy.get('#register-button').click();
        cy.get('#FirstName-error').should('contain','First name is required.');
        cy.get('#LastName-error').should('contain','Last name is required.');
        cy.get('#Email-error').should('contain','Email is required.');
        cy.get('#Password-error').should('contain','Password is required.');
        cy.get('#ConfirmPassword-error').should('contain','Password is required.');
        cy.get('#Password').type('123').should('have.value','123');
        cy.get('#ConfirmPassword').click();
        cy.get('#Password-error').should('contain','Password must meet the following rules: ');
        cy.get('#Password').clear().type('123456').should('have.value','123456');
        cy.get('#ConfirmPassword').type('1234');
        cy.get('#ConfirmPassword-error')
            .should('contain','The password and confirmation password do not match.');


    });

});

