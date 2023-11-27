const locator = require('../locator/DashboardPageLocator')

class DashboardPage {
    async verify_right_user(name) {
        cy.xpath(locator.datatestid.dashboard_user_area_dropdown).should('be.visible')
        cy.xpath(locator.datatestid.dashboard_user_picture).should('be.visible')
        cy.xpath(locator.datatestid.dashboard_user_name).should('be.visible');

    }
}

module.exports = DashboardPage