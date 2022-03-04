class Selectors{
    genderMale(){
        return cy.get('#gender-male')
    }
    genderFemale(){
        return cy.get('#gender-female')
    }
    firstName(){
        return cy.get('#FirstName')
    }
    lastName(){
        return cy.get('#LastName')
    }
    password(){
        return cy.get('#Password')
    }
    confirmPassword(){
        return cy.get('#ConfirmPassword')
    }
    registerButton(){
        return cy.get('#register-button')
    }
    message(){
        return cy.get('div.result')
    }
    firstNameErrorMessage(){
        return cy.get('#FirstName-error')
    }
    lastNameErrorMessage(){
        return cy.get('#LastName-error')
    }
    mailErrorMessage(){
        return cy.get('#Email-error')
    }
    passwordErrorMessage(){
        return cy.get('#Password-error')
    }
    confirmPasswordErrorMessage(){
        return cy.get('#ConfirmPassword-error')
    }
    daybirth(){
        return cy.get('[name=DateOfBirthDay]')
    }
    monthbirth(){
        return cy.get('[name=DateOfBirthMonth]')

    }
    yearbirth(){
        return cy.get('[name=DateOfBirthYear]')
    }

}

export default Selectors