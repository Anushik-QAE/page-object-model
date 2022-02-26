describe ('testcases',function()
{
    before(() =>
    {
    cy.log('******This is SETUP block******')
})

    after(() =>
    {
        cy.log('******This is TEAR DOWN block******')
    });

    beforeEach(() =>
    {
        // runs before every test block
        cy.log('******This is LOGIN block******')
    });

    afterEach(() =>
    {
        // runs after each test block
        cy.log('******This is LOGOUT block******')
    });



    it('Searching',function()
    {cy.log('*********This is Search test********')

    });



        it('Advanced searching', function () {
            cy.log('*********This is Advanced searching test********')

        });



    it('Listing products',function() {

          cy.log('*********This is Search test********')

      });

});