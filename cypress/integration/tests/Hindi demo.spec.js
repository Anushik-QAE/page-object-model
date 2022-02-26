

describe( "Verification", function()
{
it ("Search box verification",()  => {
    cy.visit("https://demo.nopcommerce.com");   // Opens the URL
    cy.get("[id=small-searchterms]").type("Apple MacBook Pro 13-inch");
    cy.get('.button-1.search-box-button').click();//Click on the search button
    cy.url().should('contain','q=Apple+MacBook+Pro+13-inch');
    cy.get("[id=small-searchterms]").type("Apple ");
    // cy.wait(3000)
    cy.get('.ui-widget li:nth-child(1)').click()
    });

});

