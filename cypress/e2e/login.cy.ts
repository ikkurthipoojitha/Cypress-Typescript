/// <reference types="cypress" />
import { LoginPage } from './Pages/loginPage.cy';

const loginPage = new LoginPage()

it('login test',function(){
    loginPage.navigate('https://github.com/login');
    loginPage.enterUsername('ipoojitha1997@gmail.com');
    loginPage.enterPassword('Chocolate@123456');
    loginPage.clickLogin();

    // cy.visit('https://github.com/login')
    // cy.get('#login_field').type('ipoojitha1997@gmail.com')
    // cy.get('#password').type('Chocolate@123456')
    // cy.get('.btn').click()
})