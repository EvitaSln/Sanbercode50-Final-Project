const locator = require('../locator/LoginPageLocator')

class LoginPage {
    async visit(path) {
        cy.visit(path)
        return cy.url().should('eq', path)
    }

    async verify_login_page () {
        cy.xpath(locator.datatestid.logo, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.usr_input, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.pass_input, { timeout: 10000 }).should('be.visible')
        cy.xpath(locator.datatestid.btn_submit, { timeout: 10000 }).should('be.visible')
    }

    async type_email(email) {
        cy.xpath(locator.datatestid.usr_input)
            .type(email)
            .should('have.value', email)
    }
  

    async type_password(password) {
        cy.xpath(locator.datatestid.pass_input)
            .type(password)
            .should('have.value', password)
    }

    async click_submit_button() {
        cy.xpath(locator.datatestid.btn_submit).click()
    }

   async verify_login_failed() {
       cy.xpath(locator.datatestid.err_login_message).should('be.visible')
   }
}

module.exports = LoginPage
