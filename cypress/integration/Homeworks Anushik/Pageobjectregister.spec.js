import Registrationpage from "../Pageobject/Registrationpage";

describe ('Registration page functionality',function (){
    const rg = new Registrationpage()
    beforeEach('Visit registration page',function (){
        rg.visit();
    });

    it ('Verify radio buttons activity',function (){
        rg.radiobuttonfemale();
        rg.radiobuttonmale();
    });

    it('Verify dropdown functionality',function (){
        rg.dayofbirth();
        rg.monthofbirth();
        rg.yearofbirth();
    });

    it('Registrattion with valid datas',function (){
        rg.radiobuttonmale();
        rg.dayofbirth();
        rg.monthofbirth();
        rg.yearofbirth();
        rg.fillFirstname();
        rg.fillLastname();
        cy.get('#Email').clear().type(rg.randomEmail())
        rg.randomEmail();
        rg.fillPassword();
        rg.fillConfirmPassword();
        rg.Submit();
        rg.messageregistrationcomplated();

    });

    it('Verify that  error validations are shown',function (){
        rg.Submit();
        rg.firstNameErrorMessage();
        rg.lastNameErrorMessage();
        rg.mailerrormessage();
        rg.passworderrormessage();
        rg.confirmpassworderrormessage();
        rg.fillinvalidpassword();
        rg.invalidpasswordmessage();
        rg.fillPassword();
        rg.fillinvalidconfirmpassword();
        rg.invalidconfirmpasswordmessage();});
});