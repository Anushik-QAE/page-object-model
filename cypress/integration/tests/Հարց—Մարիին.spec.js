describe("Tables", function()
    {
        it('Tables', function () {
        cy.visit("http://testautomationpractice.blogspot.com/");
        cy.get("table[name=BookTable]").contains('td','Learn Selenium').should('be.visible');

        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)')
        .contains('Selenium').should('be.visible');

        cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(($e, index, $list) => {
            const text = $e.text()

            if(text.includes("Amnvmnbod")) {
                cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function( bname)
                {
                    const bookName= bname.text()
                    expect(bookName).to.equal("Master In Java")
                })
            } else{
              cy.get('[onclick="myFunction()"]').click();
            }
    })
            cy.get('[onclick="myFunction()"]').contains('Click')
            cy.get('[onclick="myFunction()"]').should('include','Click');
        })

        //#HTML1 > div.widget-content > table >
});
