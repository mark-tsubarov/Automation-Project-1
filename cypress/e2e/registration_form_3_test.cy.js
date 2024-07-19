beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_3.html')
})

/*
BONUS TASK: add visual tests for registration form 3
Task list:
* Create test suite for visual tests for registration form 3 (describe block)
* Create tests to verify visual parts of the page:
    * radio buttons and its content
    * dropdown and dependencies between 2 dropdowns:
        * list of cities changes depending on the choice of country
        * if city is already chosen and country is updated, then city choice should be removed
    * checkboxes, their content and links
    * email format
 */
describe('1', () => {


    it('User can submit form with all fields added', ()=>{
        cy.get('#name').type('Mark')
        cy.get('#email').type('test@test.com')
        cy.get('#country').select('Estonia')
        cy.get('#city').select('Tartu')
        
    })

    it.only('Email input should support correct pattern', () => {
        // Check regex
        // input invalid email
        // check that email element has red border outline
        // submit button should not be active
        cy.get('#email').type('invalid')
        cy.get('h2').contains('Password').click()
        cy.get('#email').should('have.css', 'box-shadow').should('contain', 'rgb(255, 0, 0)')
        cy.get('.submit_button').should('not.be.enabled');
    })
})

/*
BONUS TASK: add functional tests for registration form 3
Task list:
* Create second test suite for functional tests
* Create tests to verify logic of the page:
    * all fields are filled in + corresponding assertions
    * only mandatory fields are filled in + corresponding assertions
    * mandatory fields are absent + corresponding assertions (try using function)
    * add file functionlity(google yourself for solution!)
 */
describe('2', () => {


    it('User can submit form with all fields added', ()=>{
        cy.get('#username').type('MRK')
        cy.get('#email').type('testing@test.com')
        cy.get('[data-cy="name"]').type('Mark')
        cy.get('#lastName').type('Tsubarov')
        cy.get('[data-testid="phoneNumberTestId"]').type('1111111111')
        cy.get('input[name="password"]').type('NEWPASSWORD666')
        cy.get('[name="confirm"]').type('NEWPASSWORD666')
        cy.get('#vehicle2').type("checkbox")
        cy.get('#cars').select('audi')
        cy.get('#animal').select('snake')
        cy.get('.submit_button').should('be.enabled')
        cy.get('.submit_button').click()
        cy.get('#success_message').should('be.visible').should('contain', "User successfully submitted registration")
    })
})