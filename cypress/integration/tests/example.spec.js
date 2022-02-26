describe('example', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('#divUsername').type("Admin");
        cy.get('#divPassword').type("admin123");
        cy.get('[type="submit"]').click();
        cy.get('#menu_admin_viewAdminModule').click();
        cy.get('#menu_admin_Job').click({force:true});
        cy.get('li').should("have.class", "selected");
        cy.get('#menu_admin_viewJobTitleList').click({force:true});
        cy.get('#btnAdd').click();
    });

    it('example', () => {
        cy.get('#jobTitle_jobTitle').type('QA Engineenr678');
        cy.get('#jobTitle_jobDescription').type('Writing test cases and bug reports.');
        cy.get('[type="file"]').attachFile('Information.pdf');
        cy.get('#jobTitle_note').type('If you want to work with us, send your CV!');
        cy.get('#btnSave').click();
        cy.url().should('contain','viewJobTitleList');
    });

    it('Verify that error validations are shown', () => {
        cy.get('#btnSave').click();
        cy.get('.validation-error[name="jobTitle[jobTitle]"]').should('contain', 'Required');
        // cy.get('[name="jobTitle[jobTitle]').invoke('attr', 'class').should('contain', 'Required')
        cy.get('#jobTitle_jobTitle').type('QA Engineenr678');
        cy.get('#btnSave').click();
        cy.get('.validation-error#jobTitle_jobTitle').should('contain', 'Already exists');

    });
});
cy.get('#Email').type("testing.cypress@mail.ru");
cy.get('#Password').type('45678');
cy.get('.button-1.login-button').click()
cy.get('.message-error.validation-summary-errors').should('contain', 'Login was unsuccessful.Please correct the errors and try again.');
