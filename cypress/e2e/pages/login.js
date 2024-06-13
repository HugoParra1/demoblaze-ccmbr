class login {
    constructor() {
        this.usernameInput = '#loginusername';
        this.passwordInput = '#loginpassword';
        this.submitloginButton = '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary';
        this.errorMessage = '#loginmessage';
        this.welcomeMessage = '#nameofuser';
        this.logoutButton = '#logout2';
        this.loginButton = '#login2';

    }

    visit() {
        cy.visit('https://demoblaze.com/');
    }

    fillLoginForm(username, password) {
        cy.get(this.usernameInput).invoke("val", username);
        cy.get(this.passwordInput).invoke("val", password);
    }   

    submitLogin() {
        cy.get(this.submitloginButton).click();
    }

    checkAlertMessage(expectedMessage) {
        cy.on('window:alert', (text) => {
            expect(text).to.equal(expectedMessage);
        });
    }

    checkUserLoggedIn() {
        cy.get(this.welcomeMessage).should('be.visible');
        cy.get(this.welcomeMessage).should('contain.text', 'Welcome');
    }

    openLoginModal() {
        cy.get(this.loginButton).click();
    }

    logout() {
        cy.get(this.logoutButton).click();
    }

    checkUserLoggedOut() {
        cy.get(this.welcomeMessage).should('not.be.visible');
    }


}

module.exports = new login;