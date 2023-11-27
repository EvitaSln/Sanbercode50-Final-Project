const UserData = require('../support/datatest/UserData')
const LoginPage = require('../support/pages/LoginPage')
const DashboardPage = require('../support/pages/DashboardPage')

let loginpage = new LoginPage()
let dashboardpage = new DashboardPage()

describe('User should be able to login', () => {
  beforeEach(() => {
    loginpage.visit('https://appstaging.viseetor.id/login')
  }) 

  it('login with valid data', () => {
    loginpage.verify_login_page()
    loginpage.type_email(UserData.datatest.email)
    loginpage.type_password(UserData.datatest.password)
    loginpage.click_submit_button()
    dashboardpage.verify_right_user(UserData.datatest.name)
    cy.wait(3000);
  }),

  it('login with invalid data', () => {
    loginpage.type_email(UserData.datatest1.email)
    loginpage.type_password(UserData.datatest1.password)
    loginpage.click_submit_button()
    loginpage.verify_login_failed()
    cy.wait(3000);
  })

})