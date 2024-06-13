class SignUp {
    constructor() {
        this.signInButton = '#signin2';
        this.signInModal = '#signInModal';
        this.signUsernameInput = '#sign-username';
        this.signPasswordInput = '#sign-password';
        this.signUpButton = `${this.signInModal} > .modal-dialog > .modal-content > .modal-footer > .btn-primary`;
        this.loginButton = '#login2';
        this.logInModal = '#logInModal';
        this.loginUsernameInput = '#loginusername';
        this.loginPasswordInput = '#loginpassword';
        this.welcomeMessage = '#nameofuser';
    }

    visit() {
        cy.visit('https://demoblaze.com/');
    }

    openSignUpModal() {
        cy.get(this.signInButton).click();
        cy.get(this.signInModal).should('be.visible');
    }

    fillSignUpForm(username, password) {
        cy.get(this.signUsernameInput).invoke("val", username);
        cy.get(this.signPasswordInput).invoke("val", password);
    }

    submitSignUp() {
        cy.get(this.signUpButton).click();
    }

    checkAlertMessage(expectedMessage) {
        cy.on('window:alert', (text) => {
            expect(text).to.equal(expectedMessage);
        });
    }

    openLoginModal() {
        cy.get(this.loginButton).click();
        cy.get(this.logInModal).should('be.visible');
    }

    fillLoginForm(username, password) {
        cy.get(this.loginUsernameInput).invoke("val", username);
        cy.get(this.loginPasswordInput).invoke("val", password);
    }

    submitLogin() {
        cy.get(this.logInModal).find('.modal-footer > .btn-primary').click();
    }

    checkUserLoggedIn() {
        cy.get(this.welcomeMessage).should('be.visible');
        cy.get(this.welcomeMessage).should('contain.text', 'Welcome');
    }
}
module.exports = new SignUp;
