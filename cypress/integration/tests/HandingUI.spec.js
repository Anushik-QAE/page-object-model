describe ("Test", function()
    {
it ("Verify Input box and Radio button", function()
    {
        cy.visit("https://demo.guru99.com/test/newtours/")
        cy.url(). should('include', '/test/newtours/');
        cy.get('input[name=userName]').should('be.visible')
            .should ('be.enabled').type('tutorial');
        cy.get('input[name=password]').should('be.visible')
            .should ('be.enabled').type('tutorial');
        cy.get('input[name=submit]').should('be.visible').click();
        cy.title().should('eq','Login: Mercury Tours');
        cy.get('[href="reservation.php"]').click();
        cy.url().should('include', 'https://demo.guru99.com/test/newtours/reservation.php');
        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked');
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click();
        cy.get('[name=findFlights]').should('be.visible').click();
        cy.title().should('eq','Find a Flight: Mercury Tours:');

    }






)





    }

    )