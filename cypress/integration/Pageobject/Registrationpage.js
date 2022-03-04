import Selectors from '../selectors/selectors'

const selector = new Selectors()
class Registrationpage {
    visit()
    {
        cy.visit('https://demo.nopcommerce.com/register')
        cy.url().should('contain','/register')

    }

    radiobuttonmale()
    {
       selector.genderMale().check()
           .should('be.visible').should('be.checked');

    }

    radiobuttonfemale()
    {
       selector.genderFemale().check()
           .should('be.visible').should('be.checked');

    }

    fillFirstname()
    {
       selector.firstName().clear().type('Jonnny')
        return this
    }

    fillLastname()
    {
        selector.lastName().clear().type('Addams')
        return this

    }

     randomEmail() {
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
        for (var e = 0; e < 10; e++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return string + '@gmail.com';
    }

    fillPassword()
    {
       selector.password().clear().type('123456')
        return this
    }

    fillConfirmPassword()
    {
        selector.confirmPassword().clear().type('123456')
        return this
    }

    Submit()
    {
       selector.registerButton().click()
    }

    messageregistrationcomplated()

    {
        selector.message().should('contain','Your registration completed')

    }

    firstNameErrorMessage()
    {
        selector.firstNameErrorMessage().should('have.text','First name is required.')
    }

    lastNameErrorMessage()
    {
        selector.lastNameErrorMessage().should('have.text','Last name is required.')
    }

    mailerrormessage()
    {
       selector.mailErrorMessage().should('have.text','Email is required.')
    }

    passworderrormessage()
    {
        selector.passwordErrorMessage().should('have.text','Password is required.')
    }

    confirmpassworderrormessage()
    {
       selector.confirmPasswordErrorMessage().should('have.text','Password is required.')
    }

    fillinvalidpassword()
    {
        selector.password().clear().type('123')
        return this
    }

    invalidpasswordmessage()
    {
        selector.passwordErrorMessage().should('contain','Password must meet the following rules: ')
    }

    fillinvalidconfirmpassword()
    {
        selector.confirmPassword().clear().type('123568')
        return this
    }

    invalidconfirmpasswordmessage()
    {
        selector.confirmPasswordErrorMessage().should('contain','The password and confirmation password do not match.')
    }

    dayofbirth()
    {
       selector.daybirth().select('17').should('contain','17');
    }

    monthofbirth()
    {
        selector.monthbirth().select('May').should('contain','May');

    }

    yearofbirth()
    {
       selector.yearbirth().select('1999').should('contain','1999');
    }
}
export default Registrationpage
