import { Credentials } from "../../support/commands";

describe('Check Resigtration functionaluity', function()
{
    it("Navigate the page", ()=>{
        let pass = Credentials.password
        cy.visit("https://demo.nopcommerce.com/");
        cy.get(".ico-register").click();
        cy.url().should("includes", "register?returnUrl=%2F");
        cy.get("#gender-male").check();
        cy.get("#FirstName").type("John");
        cy.get("#LastName").type("Smith");
        cy.get('[name="DateOfBirthDay"]').select("7").
            should("contain", "7");
        cy.get('[name="DateOfBirthMonth"]').select("July").
            should("contain", "July");
        cy.get('[name="DateOfBirthYear"]').select("1912").
        should("contain", "1912");
        cy.get('#Email').type(Credentials.email);
        cy.get("#Company").type("BBC LLC");
        cy.get('input[type="checkbox"]').click();
        cy.get("#Password").type(pass);
        cy.get("#ConfirmPassword").type(pass);
        cy.get("#register-button").click();
        cy.url().should("contain", "registerresult/1?returnUrl=/");
    })

})
