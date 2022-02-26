describe ('Alerts test case', function (){
    beforeEach(function() {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    });
         it ('alert type',function(){
            // cy.on('window:alert',function ('alerttext'))
            cy.contains('Click for JS Alert').click();



        });
    });