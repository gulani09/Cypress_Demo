import {Login} from "./Pages/Login"

const login = new Login()

it('POM Demo', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    login.enterUserName('Admin')
    login.enterPassword('admin123')
    login.clikLogin()

})