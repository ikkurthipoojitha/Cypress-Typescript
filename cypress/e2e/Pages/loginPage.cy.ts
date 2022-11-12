export class LoginPage{

    loginPage_username = '#login_field'
    loginPage_password = '#password'
    loginPage_button = '.btn'
    navigate(url:string){
        cy.visit(url)
    }
    enterUsername(username:string){
        cy.get(this.loginPage_username).type(username)
    
    }
    enterPassword(password:string){
        cy.get(this.loginPage_password).type(password)
    
    }
    clickLogin(){
        cy.get(this.loginPage_button).click()

    }
}