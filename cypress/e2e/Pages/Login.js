export class Login {
    username_textbox = 'input[name="username"]'
    password_textbox = 'input[name="password"]'
    login_button = 'button[type="submit"]'
    enterUserName (username) {
        cy.get(this.username_textbox).type(username)
    }

    enterPassword (password) {
        cy.get(this.password_textbox).type(password)
    }

    clikLogin() {
        cy.get(this.login_button).contains('Login').click();
    }
}