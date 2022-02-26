class Rgistrationpage {

    lastname() {
        return cy.get('#LastName')

    }

    firstname() {
        return cy.get('#FirstName')
    }

    registerbutton() {
        return cy.get('.ico-register')
    }

}

module.exports = Rgistrationpage